const request = require("supertest");
const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

/**
 *  beforeAll()  -> Executa automaticamente uma vez antes de todos os testes desse arquivo
 *  afterAll()   -> Executa automaticamente uma vez depois de todos os testes desse arquivo
 *  beforeEach() -> Executa antes de cada um dos testes
 *  afterEach()  -> Executa depois de cada um dos testes
 *
 */

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Chris",
      email: "christian.alves@dellead.com",
      password: "123123",
    });

    const respose = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(respose.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await User.create({
      name: "Chris",
      email: "christian.alves@dellead.com",
      password: "123123",
    });

    const respose = await request(app).post("/sessions").send({
      email: user.email,
      password: "132123",
    });
    expect(respose.status).toBe(401);
  });
});
