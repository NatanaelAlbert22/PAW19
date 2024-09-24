const express = require('express');
const router = express.Router();
const {createBook, getAllBooks, getBookById, deleteBookById} = require('../controllers/book.controller');

// Create a new book
router.post('/post', createBook);

// Read the data
// GET all books
router.get('/readbook', getAllBooks);

// GET book by ID
router.get('/readbook/:id', getBookById);

// UPDATE book by ID
router.put('/updatebook/:id', updateBookById);

// Delete a book
router.delete('/delete/:id', deleteBookById);

module.exports = router;