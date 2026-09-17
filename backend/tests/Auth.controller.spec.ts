import { describe, it, expect } from "@jest/globals";
import supertest from "supertest";
import app from "../src/app";

describe("AuthController", () => {
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
});