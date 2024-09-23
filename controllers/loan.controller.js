const Loan = require('../models/loan.models');

// Create a new loan
exports.createLoan = async (req, res) => {
    try {
        const loan = new Loan(req.body);
        await loan.save();
        res.status(201).json(loan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};