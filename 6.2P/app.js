const express = require("express");
const path = require("path");

const { calculate } = require("./utils/calculator");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running" });
});

app.get("/api/calculate", (req, res) => {
    const { operation, a, b } = req.query;

    try {
        const result = calculate(operation, a, b);
        res.json({
            operation,
            inputs: {
                a: Number(a),
                b: Number(b)
            },
            result
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = app;
