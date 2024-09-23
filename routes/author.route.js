const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

// Create a new author
router.post('/', authorController.createAuthor);
