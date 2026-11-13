import { describe, it, expect, jest, afterEach } from "@jest/globals";
import supertest from "supertest";
import app from "../src/app";
import { AuthService } from "../src/services/AuthService";

describe("AuthController", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns 400 when login body is invalid", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .set("Content-Type", "application/json")
      .send({});

    expect(response.status).toBe(400);
  });

  it("returns 401 when credentials are invalid", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .set("Content-Type", "application/json")
      .send({
        email: "usuario-inexistente@example.com",
        password: "senha-invalida",
      });

    expect(response.status).toBe(401);
  });

  it("returns 200 and accessToken when credentials are valid", async () => {
    jest.spyOn(AuthService.prototype, "login").mockResolvedValue({
      accessToken: "fake-token",
    } as never);

    const response = await supertest(app)
      .post("/auth/login")
      .set("Content-Type", "application/json")
      .send({
        email: "admin@example.com",
        password: "senha-valida",
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      accessToken: "fake-token",
    });
  });
});