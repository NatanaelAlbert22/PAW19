const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Create a new book
router.post('/', bookController.createBook);