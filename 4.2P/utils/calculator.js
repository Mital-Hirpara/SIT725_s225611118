function toNumber(value, name) {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
        throw new Error(`${name} must be a valid number`);
    }

    return parsed;
}

function calculate(operation, a, b) {
    const first = toNumber(a, "a");
    const second = toNumber(b, "b");

    switch (operation) {
        case "add":
            return first + second;
        case "subtract":
            return first - second;
        case "multiply":
            return first * second;
        case "divide":
            if (second === 0) {
                throw new Error("Cannot divide by zero");
            }

            return first / second;
        default:
            throw new Error("Operation must be one of add, subtract, multiply, or divide");
    }
}

module.exports = { calculate };
