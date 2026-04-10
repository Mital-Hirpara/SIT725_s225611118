const mongoose = require("mongoose");
const Book = require("../models/book.model");

// 👇 ADD THIS CONNECTION FIRST
mongoose.connect("mongodb+srv://mital:mvc_database@cluster2.fabf7ll.mongodb.net/?appName=Cluster2")
.then(() => console.log("MongoDB connected for seeding"))
.catch(err => console.log(err));

const books = [
{
id: "b1",
title: "The Three-Body Problem",
author: "Liu Cixin",
year: 2008,
genre: "Science Fiction",
summary: "Earth encounters alien civilization",
price: 19.99
}
];

async function seedDB(){
await Book.deleteMany();
await Book.insertMany(books);
console.log("Database seeded");
mongoose.connection.close();
}

seedDB();