const express = require("express");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();

app.use(express.json());

// API routes
app.use("/api", booksRoutes);

// public folder
app.use(express.static(path.join(__dirname,"public")));

const PORT = 3000;

app.listen(PORT,()=>{
console.log(`Server running at http://localhost:${PORT}`);
});