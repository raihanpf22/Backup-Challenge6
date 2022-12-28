import app, { server } from "../../server";
import request from "supertest";
import path from "path";
import carRepository from "../repositories/carRepository";

afterAll(async () => {
  await server.close();
});

describe("GET / - List Cars Module", () => {
  it("Should response with 200 as status code", async () => {
    return request(app)
      .get("/cars")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data).not.toEqual("Null");
      });
  });
});

describe("POST / - Create Data Car Module", () => {
  it("Should response with 201 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;
    const fileImage = path.join(__dirname, "../assets/camry.jpg");

    const payload = {
      no_police: "B 4022 KZB",
      brand: "TOYOTA",
      model: "Sedan",
      image: fileImage,
      price_perday: 5000000,
      capacity: 4,
      status: true,
      transmision: "CVT",
      type: "Camry",
    };
    return request(app)
      .post("/cars/create")
      .set("Authorization", `Bearer ${token}`)
      .field("no_police", payload.no_police)
      .field("brand", payload.brand)
      .field("model", payload.model)
      .attach("image", fileImage)
      .field("price_perday", payload.price_perday)
      .field("capacity", payload.capacity)
      .field("status", payload.status)
      .field("transmision", payload.transmision)
      .field("type", payload.type)
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.data).not.toEqual("Null");

        carRepository.deleted({ id: res.body.data.id });
      });
  });
});

describe("POST / - Create Data Car Error Test", () => {
  it("Should response with 400 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;
    const fileImage = path.join(__dirname, "../assets/camry.jpg");

    const payload = {
      no_police: "B 4022 KZB",
      brand: "TOYOTA",
      model: "Sedan",
      image: fileImage,
      price_perday: "5000000",
      capacity: "4",
      status: true,
      transmision: "CVT",
      type: "Camry",
    };
    return request(app)
      .post("/cars/create")
      .set("Authorization", `Bearer ${token}`)
      .field("brand", payload.brand)
      .field("model", payload.model)
      .attach("image", fileImage)
      .field("price_perday", payload.price_perday)
      .field("capacity", payload.capacity)
      .field("status", payload.status)
      .field("transmision", payload.transmision)
      .field("type", payload.type)
      .then((res) => {
        expect(res.statusCode).not.toBe(201);
        expect(res.body.data).toEqual("Null");
      });
  });
});

describe("PUT / - Edit Data Car Module", () => {
  it("Should response with 200 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;
    const fileImage = path.join(__dirname, "../assets/camry.jpg");

    const payload = {
      no_police: "B 4022 KZB",
      brand: "TOYOTA",
      model: "Sedan",
      image: fileImage,
      price_perday: 5000000,
      capacity: 4,
      status: true,
      transmision: "CVT",
      type: "Camry",
    };

    const payloadUpdate = {
      no_police: "B 4022 KZB Update",
      brand: "TOYOTA Update",
      model: "Sedan Update",
      image: fileImage,
      price_perday: 5000000,
      capacity: 4,
      status: true,
      transmision: "CVT Update",
      type: "Camry Update",
    };

    const createCar = await request(app)
      .post("/cars/create")
      .set("Authorization", `Bearer ${token}`)
      .field("no_police", payload.no_police)
      .field("brand", payload.brand)
      .field("model", payload.model)
      .attach("image", fileImage)
      .field("price_perday", payload.price_perday)
      .field("capacity", payload.capacity)
      .field("status", payload.status)
      .field("transmision", payload.transmision)
      .field("type", payload.type);

    return request(app)
      .put(`/cars/edit/${createCar.body.data.id}`)
      .set("Authorization", `Bearer ${token}`)
      .field("no_police", payloadUpdate.no_police)
      .field("brand", payloadUpdate.brand)
      .field("model", payloadUpdate.model)
      .attach("image", fileImage)
      .field("price_perday", payloadUpdate.price_perday)
      .field("capacity", payloadUpdate.capacity)
      .field("status", payloadUpdate.status)
      .field("transmision", payloadUpdate.transmision)
      .field("type", payloadUpdate.type)
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.data).not.toEqual("Null");
      });
  });
});

describe("PUT / - Edit Data Car Error Test", () => {
  it("Should response with 400 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;
    const fileImage = path.join(__dirname, "../assets/camry.jpg");
    const id = "300";

    const payload = {
      no_police: "B 4022 KZB",
      brand: "TOYOTA",
      model: "Sedan",
      image: fileImage,
      price_perday: 5000000,
      capacity: 4,
      status: true,
      transmision: "CVT",
      type: "Camry",
    };

    return request(app)
      .put(`/cars/edit/${id}`)
      .set("Authorization", `Bearer ${token}`)
      .field("no_police", payload.no_police)
      .field("brand", payload.brand)
      .field("model", payload.model)
      .attach("image", fileImage)
      .field("price_perday", payload.price_perday)
      .field("capacity", payload.capacity)
      .field("status", payload.status)
      .field("transmision", payload.transmision)
      .field("type", payload.type)
      .then((res) => {
        expect(res.statusCode).not.toBe(201);
        expect(res.body.data).toEqual("Null");
      });
  });
});

describe("DELETE / - Delete Data Car Module", () => {
  it("Should response with 200 as status code", async () => {
    const payloadLogin = {
      email: "raihanpambagyo@gmail.com",
      password: "P@ssw0rd",
    };

    const login = await request(app).post("/login").send(payloadLogin);

    const token = login.body.token;

    const fileImage = path.join(__dirname, "../assets/camry.jpg");

    const payload = {
      no_police: "B 4022 KZB",
      brand: "TOYOTA",
      model: "Sedan",
      image: fileImage,
      price_perday: 5000000,
      capacity: 4,
      status: true,
      transmision: "CVT",
      type: "Camry",
    };

    const createCar = await request(app)
      .post("/cars/create")
      .set("Authorization", `Bearer ${token}`)
      .field("no_police", payload.no_police)
      .field("brand", payload.brand)
      .field("model", payload.model)
      .attach("image", fileImage)
      .field("price_perday", payload.price_perday)
      .field("capacity", payload.capacity)
      .field("status", payload.status)
      .field("transmision", payload.transmision)
      .field("type", payload.type);

    return request(app)
      .delete(`/cars/delete/${createCar.body.data.id}`)
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data).not.toEqual("Null");
      });
  });
});
