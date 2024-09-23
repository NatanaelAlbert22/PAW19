const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member', // Reference to Member schema
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // Reference to Book schema
        required: true
    },
    loanDate: {
        type: Date,
        default: Date.now
    },
    returnDate: Date,
    status: {
        type: String,
        enum: ['borrowed', 'returned'],
        default: 'borrowed'
    }
});

const Loan = mongoose.model('Loan', loanSchema);
