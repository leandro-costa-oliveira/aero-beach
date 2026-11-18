import { beforeEach, afterEach, describe, expect, it, jest } from "@jest/globals";
import supertest from "supertest";

import app from "../src/app";
import { prisma } from "../src/services/DatabaseService";

describe("PlayerController", () => {
  beforeEach(async () => {
    await prisma.inscricao.deleteMany();
    await prisma.dupla.deleteMany();
    await prisma.jogador.deleteMany();
    await prisma.usuario.deleteMany();
    await prisma.arena.deleteMany();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns 403 when a player tries to list users", async () => {
    const adminEmail = `admin-${Date.now()}@test.com`;
    const playerEmail = `player-${Date.now()}@test.com`;
    const password = "123456";

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Administrador",
        email: adminEmail,
        password,
      })
      .expect(201);

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Jogador",
        email: playerEmail,
        password,
      })
      .expect(201);

    const login = await supertest(app)
      .post("/auth/login")
      .send({
        email: playerEmail,
        password,
      })
      .expect(200);

    await supertest(app)
      .get("/jogadores")
      .set("Authorization", login.body.accessToken)
      .expect(403);
  });

  it("returns 403 when a player tries to update another user's role", async () => {
    const adminEmail = `admin-${Date.now()}@test.com`;
    const playerEmail = `player-${Date.now()}@test.com`;
    const password = "123456";

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Administrador",
        email: adminEmail,
        password,
      })
      .expect(201);

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Jogador",
        email: playerEmail,
        password,
      })
      .expect(201);

    const login = await supertest(app)
      .post("/auth/login")
      .send({
        email: playerEmail,
        password,
      })
      .expect(200);

    const admin = await prisma.usuario.findUnique({
      where: {
        email: adminEmail,
      },
    });

    expect(admin).not.toBeNull();

    await supertest(app)
      .patch(`/jogadores/${admin!.id}`)
      .set("Authorization", login.body.accessToken)
      .send({
        role: "admin",
      })
      .expect(403);
  });

  it("allows an administrator to list users", async () => {
    const adminEmail = `admin-${Date.now()}@test.com`;
    const password = "123456";

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Administrador",
        email: adminEmail,
        password,
      })
      .expect(201);

    const login = await supertest(app)
      .post("/auth/login")
      .send({
        email: adminEmail,
        password,
      })
      .expect(200);

    const response = await supertest(app)
      .get("/jogadores")
      .set("Authorization", login.body.accessToken)
      .expect(200);

    expect(response.body).toHaveProperty("jogadores");
    expect(Array.isArray(response.body.jogadores)).toBe(true);
  });

  it("allows an administrator to update a user's role", async () => {
    const adminEmail = `admin-${Date.now()}@test.com`;
    const playerEmail = `player-${Date.now()}@test.com`;
    const password = "123456";

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Administrador",
        email: adminEmail,
        password,
      })
      .expect(201);

    await supertest(app)
      .post("/jogadores")
      .send({
        nome: "Jogador",
        email: playerEmail,
        password,
      })
      .expect(201);

    const login = await supertest(app)
      .post("/auth/login")
      .send({
        email: adminEmail,
        password,
      })
      .expect(200);

    const player = await prisma.usuario.findUnique({
      where: {
        email: playerEmail,
      },
    });

    expect(player).not.toBeNull();

    await supertest(app)
      .patch(`/jogadores/${player!.id}`)
      .set("Authorization", login.body.accessToken)
      .send({
        role: "admin",
      })
      .expect(200);
  });
});