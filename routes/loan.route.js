const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');

// Create a new loan
router.post('/', loanController.createLoan);