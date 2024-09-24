const express = require('express');
const router = express.Router();
const {createAuthor, getAllAuthors, getAuthorById, deleteAuthorById} = require('../controllers/author.controller');

// Create a new author
router.post('/post', createAuthor);

// Read the data
// GET all authors
router.get('/author', getAllAuthors);
// GET author by ID
router.get('/author/:id', getAuthorById);

// UPDATE author by ID
router.put('/updateauthor/:id', updateAuthorById);

// Delete an author
router.delete('/delete/:id', deleteAuthorById);

module.exports = router;