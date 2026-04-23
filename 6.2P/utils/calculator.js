function parseNumber(value, label) {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
        throw new Error(`${label} must be a valid number`);
    }

    return parsed;
}

function calculate(operation, a, b) {
    const firstNumber = parseNumber(a, "a");
    const secondNumber = parseNumber(b, "b");

    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "subtract":
            return firstNumber - secondNumber;
        case "multiply":
            return firstNumber * secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new Error("Cannot divide by zero");
            }

            return firstNumber / secondNumber;
        default:
            throw new Error("Operation must be add, subtract, multiply, or divide");
    }
}

module.exports = { calculate };
