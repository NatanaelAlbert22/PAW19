const Author = require('../models/author.models');

// Create a new author
exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read the data


// Get all authors
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find().populate('books');
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).populate('books');
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE an author by ID
exports.updateAuthorById = async (req,res) => {
    const {id} = req.params;
    const updateData = req.body;
    try{
        const updatedAuthor = await Author.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        if (!updateAuthor) {
            return res.status(404).json({message: 'Author not found'});
        }
        res.json(updateAuthor);
    } catch(error){
        res.status(400).json({message: error.message});
    }
};

// Delete an author
exports.deleteAuthorById = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByIdAndDelete(id);
        if (!author) return res.status(404).json({ message: 'Author not found'});
        res.status(200).json({ message: "Author deleted successfully"})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



