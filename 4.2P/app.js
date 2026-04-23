const express = require("express");
const cors = require("cors");
const path = require("path");

const { calculate } = require("./utils/calculator");

function createApp({ Book } = {}) {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, "public")));

    app.get("/api/calculate", (req, res) => {
        const { operation, a, b } = req.query;

        try {
            const result = calculate(operation, a, b);
            res.json({ operation, a: Number(a), b: Number(b), result });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    app.get("/books", async (req, res) => {
        if (!Book) {
            return res.status(503).json({ message: "Book service unavailable" });
        }

        try {
            const books = await Book.find().sort({ _id: -1 });
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: "Failed to load books", error: err.message });
        }
    });

    app.post("/books", async (req, res) => {
        if (!Book) {
            return res.status(503).json({ message: "Book service unavailable" });
        }

        try {
            const newBook = new Book(req.body);
            await newBook.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: "Failed to add book", error: err.message });
        }
    });

    app.delete("/books/:id", async (req, res) => {
        if (!Book) {
            return res.status(503).json({ message: "Book service unavailable" });
        }

        try {
            await Book.findByIdAndDelete(req.params.id);
            res.json({ message: "Deleted" });
        } catch (err) {
            res.status(400).json({ message: "Failed to delete book", error: err.message });
        }
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    });

    return app;
}

module.exports = { createApp };
