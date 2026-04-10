const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();

app.use(express.json());

// MongoDB connection (hardcoded as per task)
mongoose.connect("mongodb+srv://mital:mvc_database@cluster2.fabf7ll.mongodb.net/?appName=Cluster2")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

// API routes
app.use("/api", booksRoutes);

// frontend
app.use(express.static(path.join(__dirname,"public")));

const PORT = 3000;

app.listen(PORT,()=>{
console.log(`Server running at http://localhost:${PORT}`);
});