import { describe, it, expect } from "@jest/globals";
import bcrypt from "bcrypt";

import { UserDTO } from "../DTOs/User";
import { AuthController } from "./Auth.controller";
import { DatabaseInterface } from "../services/DatabaseService";
import { AuthService } from "../services/AuthService";

const mockedValidUserPassword = "validfakeHashedPassword"
const mockedValidUserSalt = bcrypt.genSaltSync(10);
const mockedValidUser: UserDTO = {
  id: "1",
  nome: "Test User",
  email: "test@example.com",
  telefone: "1234567890",
  role: "user",
  senha: bcrypt.hashSync(mockedValidUserPassword, mockedValidUserSalt),
  salt: mockedValidUserSalt
}

class MockedDatabaseService implements DatabaseInterface {
  async getUserByEmail(email: string): Promise<UserDTO | null> {
    if (email === mockedValidUser.email) {
      return mockedValidUser
    }
    return null;
  }
}

const mockedDatabaseService = new MockedDatabaseService();
const mockedAuthService = new AuthService(mockedDatabaseService);
const mockedAuthController = new AuthController(mockedAuthService);

describe("AuthController Unit Tests, route: auth/login/", () => {

  it("checks if /login returns a token for valid credentials", async () => {
    const response = await mockedAuthController.login(mockedValidUser.email, mockedValidUserPassword)
    expect(typeof response.accessToken).toBe("string");
  })

  it("checks if /login throws error for invalid email", async () => {
    await expect(mockedAuthController.login("invalidTest@example.com", mockedValidUserPassword))
      .rejects.toThrow("Invalid email or password")
  })

  it("checks if /login throws error for invalid password", async () => {
    await expect(mockedAuthController.login(mockedValidUser.email, "invalidTestPassword"))
      .rejects.toThrow("Invalid email or password")
  })
});
