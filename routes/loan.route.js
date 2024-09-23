const express = require('express');
const router = express.Router();
const {createLoan,getAllLoans,getLoanById} = require('../controllers/loan.controller');

// Create a new loan
router.post('/post', createLoan);

// Read the data
// GET all loans
router.get('/readloan', getAllLoans);

// GET loan by ID
router.get('/readloan/:id', getLoanById);

module.exports = router;