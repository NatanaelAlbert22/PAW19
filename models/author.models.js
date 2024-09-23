const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: String,
    nationality: String,
    dateOfBirth: Date,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book' // Reference to the Book schema
    }]
});

const Author = mongoose.model('Author', authorSchema);
