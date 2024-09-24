const express = require('express');
const router = express.Router();
const {createLoan,getAllLoans,getLoanById, deleteLoanById} = require('../controllers/loan.controller');

// Create a new loan
router.post('/post', createLoan);

// Read the data
// GET all loans
router.get('/readloan', getAllLoans);

// GET loan by ID
router.get('/readloan/:id', getLoanById);

// Delete a book
router.delete('/delete/:id', deleteLoanById);

module.exports = router;