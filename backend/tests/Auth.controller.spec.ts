import { describe, it, expect } from "@jest/globals";

import { MockedDatabaseService, MOCKED_USER } from "../../../aero-beach/backend/src/mocks/DatabaseService.mock";
import { AuthService } from "../../../aero-beach/backend/src/services/AuthService";
import { AuthController } from "../../../aero-beach/backend/src/controllers/Auth.controller";

const mockedDatabaseService = new MockedDatabaseService();
const mockedAuthService = new AuthService(mockedDatabaseService);
const mockedAuthController = new AuthController(mockedAuthService);

describe("AuthController Unit Tests, route: auth/login/", () => {

  it("checks if /login returns a token for valid credentials", async () => {
    const response = await mockedAuthController.login(MOCKED_USER.email, MOCKED_USER.unhashedPassword)
    expect(typeof response.accessToken).toBe("string");
  })

  it("checks if /login throws error for invalid email", async () => {
    await expect(mockedAuthController.login("invalidTest@example.com", MOCKED_USER.unhashedPassword))
      .rejects.toThrow("Invalid email or password")
  })

  it("checks if /login throws error for invalid password", async () => {
    await expect(mockedAuthController.login(MOCKED_USER.email, "invalidTestPassword"))
      .rejects.toThrow("Invalid email or password")
  })
});
