const booksService = require("../services/books.service");

function getAllBooks(req,res){
const books = booksService.getAllBooks();
res.json(books);
}

function getBookById(req,res){
const id = req.params.id;
const book = booksService.getBookById(id);

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