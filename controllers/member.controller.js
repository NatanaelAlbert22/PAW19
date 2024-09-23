const Member = require('../models/member.models');

// Create a new member
exports.createMember = async (req, res) => {
    try {
        const member = new Member(req.body);
        await member.save();
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read the data
// Get all members
exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find().populate('borrowedBooks');
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get member by ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id).populate('borrowedBooks');
        if (!member) return res.status(404).json({ message: 'Member not found' });
        res.json(member);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

