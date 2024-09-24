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

// Read the data
// Get all loan
exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('member book');
        res.json(loans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get loan by ID
exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id).populate('member book');
        if (!loan) return res.status(404).json({ message: 'Loan not found' });
        res.json(loan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update loan by ID
exports.updateLoanById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No update data provided' });
        }
        const updatedLoan = await Loan.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        if (!updatedLoan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.json(updatedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a loan
exports.deleteLoanById = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await Loan.findByIdAndDelete(id);
        if (!loan) return res.status(404).json({ message: 'Loan not found'});
        res.status(200).json({ message: "Loan deleted successfully"})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
