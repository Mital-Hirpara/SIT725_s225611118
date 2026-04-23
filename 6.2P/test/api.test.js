const request = require("supertest");

const app = require("../app");

let expect;

before(async () => {
    ({ expect } = await import("chai"));
});

describe("GET /api/calculate", () => {
    it("returns 200 and the correct result for valid input", async () => {
        const response = await request(app)
            .get("/api/calculate")
            .query({ operation: "subtract", a: 10, b: 4 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(6);
    });

    it("returns 400 for an unsupported operation", async () => {
        const response = await request(app)
            .get("/api/calculate")
            .query({ operation: "power", a: 2, b: 3 });

        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal("Operation must be add, subtract, multiply, or divide");
    });

    it("returns 400 when query values are invalid", async () => {
        const response = await request(app)
            .get("/api/calculate")
            .query({ operation: "add", a: "abc", b: 3 });

        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal("a must be a valid number");
    });

    it("returns 200 for an edge case using zero", async () => {
        const response = await request(app)
            .get("/api/calculate")
            .query({ operation: "add", a: 0, b: 0 });

        expect(response.status).to.equal(200);
        expect(response.body.result).to.equal(0);
    });
});
