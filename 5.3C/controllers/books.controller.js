const Book = require("../models/book.model");

async function getAllBooks(req,res){
const books = await Book.find();
res.json(books);
}

async function getBookById(req,res){
const book = await Book.findOne({id:req.params.id});

if(book){
res.json(book);
}else{
res.status(404).json({message:"Book not found"});
}
}

module.exports = {
getAllBooks,
getBookById
};