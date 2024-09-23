const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    genre: String,
    publishedDate: Date,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', // Reference to Author schema
        required: true
    },
    availableCopies: {
        type: Number,
        default: 1
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book