import bcrypt from "bcrypt";
import { DatabaseInterface } from "../services/DatabaseService";
import { Usuarios } from "../../generated/prisma";

const mockedValidUserPassword = "validfakeHashedPassword"
const mockedValidUserSalt = bcrypt.genSaltSync(10);
const mockedValidUser: Usuarios = {
  id: "1",
  nome: "Test User",
  email: "test@example.com",
  telefone: "1234567890",
  role: "user",
  senha: bcrypt.hashSync(mockedValidUserPassword, mockedValidUserSalt),
  salt: mockedValidUserSalt
}

export const MOCKED_USER: Usuarios & { unhashedPassword: string } = {
  ...mockedValidUser,
  unhashedPassword: mockedValidUserPassword
};

export class MockedDatabaseService implements DatabaseInterface {
  async getUserByEmail(email: string): Promise<Usuarios | null> {
    if (email === mockedValidUser.email) {
      return mockedValidUser
    }
    return null;
  }

  async createTournament(tournament: Omit<any, "id">): Promise<void> {
    // Mock implementation, does nothing
  }
}