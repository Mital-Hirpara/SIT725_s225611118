const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const { createApp } = require("./app");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MONGO_URI is missing in .env");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection failed:", err.message));

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: String,
    rating: Number,
    available: Boolean
});

const Book = mongoose.model("Book", BookSchema);
const app = createApp({ Book });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
