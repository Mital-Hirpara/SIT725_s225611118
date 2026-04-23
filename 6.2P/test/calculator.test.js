const { calculate } = require("../utils/calculator");

let expect;

before(async () => {
    ({ expect } = await import("chai"));
});

describe("calculate()", () => {
    it("returns the sum of two valid numbers", () => {
        expect(calculate("add", 5, 7)).to.equal(12);
    });

    it("handles an edge case with decimal multiplication", () => {
        expect(calculate("multiply", 0.5, 8)).to.equal(4);
    });

    it("throws an error for division by zero", () => {
        expect(() => calculate("divide", 10, 0)).to.throw("Cannot divide by zero");
    });

    it("throws an error when a value is not numeric", () => {
        expect(() => calculate("add", "five", 2)).to.throw("a must be a valid number");
    });
});
