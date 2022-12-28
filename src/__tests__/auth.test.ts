import app, { server } from "../../server";
import request from "supertest";
import userRepository from "../repositories/userRepository";

afterAll(async () => {
  await server.close();
});

describe("POST / - Login Module", () => {
  it("Should response with 200 as status code", async () => {
    const payload = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    return request(app)
      .post("/login")
      .send(payload)
      .set("Content-type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data).not.toEqual(null);
      });
  });
});

describe("POST / - Login Error Test", () => {
  it("Should response with 400 as status code", async () => {
    const payload = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rs",
    };

    return request(app)
      .post("/login")
      .send(payload)
      .set("Content-type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.data).toEqual("Null");
      });
  });
});

describe("POST / - Register Member Module", () => {
  it("Should response with 201 as status code", async () => {
    const payload = {
      name: "Bambang Pamungkas",
      email: "sikat@gmail.com",
      password: "P@ssw0rd",
    };

    return request(app)
      .post("/register")
      .send(payload)
      .set("Content-type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.data).not.toEqual(null);

        userRepository.deletedByID({ id: res.body.data.id });
      });
  });
});

describe("POST / - Register Member Error Test", () => {
  it("Should response with 400 as status code", async () => {
    const payload = {
      name: "Swieta Nurjannah Hetty",
      email: "swieta12@gmail.com",
      password: "P@ssw0rd",
    };

    return request(app)
      .post("/register")
      .send(payload)
      .set("Content-type", "application/json")
      .then((res) => {
        expect(res.statusCode).not.toBe(201);
        expect(res.body.data).not.toEqual(null);
      });
  });
});

describe("POST / - Register Admin Module", () => {
  it("Should response with 201 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;

    const payload = {
      name: "Bambang Pamungkas Admin",
      email: "sikatadmin@gmail.com",
      password: "P@ssw0rd",
    };

    return request(app)
      .post("/admin/register")
      .send(payload)
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.data).not.toEqual(null);

        userRepository.deletedByID({ id: res.body.data.id });
      });
  });
});

describe("POST / - Register Admin Error Test", () => {
  it("Should response with 201 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;

    const payload = {
      name: "Sakina",
      email: "sakina12@gmail.com",
      password: "P@ssw0rd",
    };

    return request(app)
      .post("/admin/register")
      .send(payload)
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).not.toBe(201);
        expect(res.body.data).toEqual("Null");
      });
  });
});

describe("GET / - Current User Module", () => {
  it("Should response with 200 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;

    return request(app)
      .get("/current_user")
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data).not.toEqual("Null");
      });
  });
});

describe("GET / - Current User Error Test", () => {
  it("Should response with 400 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyoo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;

    return request(app)
      .get("/current_user")
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).not.toBe(200);
        expect(res.body.data).toEqual("Null");
      });
  });
});
