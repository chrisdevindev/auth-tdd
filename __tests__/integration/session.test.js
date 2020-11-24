const request = require("supertest");
const app = require("../../src/app");
const factory = require("../factories");
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
    const user = await factory.create("User", {
      password: "123123",
    });
    console.log(user);

    const respose = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(respose.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const respose = await request(app).post("/sessions").send({
      email: user.email,
      password: "132123",
    });
    expect(respose.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to acess private routes when authenticate", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

      expect(response.status).toBe(200)
  });

  it('should not be able to acces private routes without jwt token', async () =>{
    const response = await request(app)
      .get("/dashboard")

      expect(response.status).toBe(401)
  })
});
