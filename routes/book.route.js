const express = require('express');
const router = express.Router();
const {createBook, getAllBooks, getBookById} = require('../controllers/book.controller');

// Create a new book
router.post('/post', createBook);

// Read the data
// GET all books
router.get('/readbook', getAllBooks);

// GET book by ID
router.get('/readbook/:id', getBookById);

module.exports = router;