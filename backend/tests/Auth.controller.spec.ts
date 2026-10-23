import { afterEach, describe, it, expect } from "@jest/globals";
import supertest from "supertest";
import app from "../src/app";
import { AuthService } from "../src/services/AuthService";

describe("initial setup access secret", () => {
  const originalSecret = process.env.INITIAL_SETUP_SECRET;

  afterEach(() => {
    if (originalSecret === undefined) delete process.env.INITIAL_SETUP_SECRET;
    else process.env.INITIAL_SETUP_SECRET = originalSecret;
  });

  it("only accepts the deployment-configured secret", () => {
    process.env.INITIAL_SETUP_SECRET = "test-secret-with-at-least-16-chars";
    const service = new AuthService({} as any);

    expect(service.isValidSetupSecret("test-secret-with-at-least-16-chars")).toBe(true);
    expect(service.isValidSetupSecret("wrong-secret-value-123456")).toBe(false);
  });

  it("keeps setup unavailable when no deployment secret is configured", () => {
    delete process.env.INITIAL_SETUP_SECRET;
    const service = new AuthService({} as any);

    expect(service.isSetupAvailable()).toBe(false);
    expect(service.isValidSetupSecret("any-secret-value-long-enough")).toBe(false);
  });
});

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
