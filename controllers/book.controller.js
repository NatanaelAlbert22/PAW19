const Book = require('../models/book.models');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read the data

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author');
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author');
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update book by ID
exports.updateBookById = async (req, res) =>{
    const { id } = req.params;
    const updateData = req.body;
    try {
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No update data provided' });
        }
        const updatedBook = await Book.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a book
exports.deleteBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) return res.status(404).json({ message: 'Book not found'});
        res.status(200).json({ message: "Book deleted successfully"})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

