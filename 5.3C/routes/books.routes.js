const express = require("express");
const router = express.Router();

const controller = require("../controllers/books.controller");

router.get("/books", controller.getAllBooks);
router.get("/books/:id", controller.getBookById);

// required special route
router.get("/integrity-check42", (req,res)=>{
res.sendStatus(204);
});

module.exports = router;