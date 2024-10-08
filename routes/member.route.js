const express = require('express');
const router = express.Router();
const {createMember, getAllMembers, getMemberById, updateMemberById, deleteMemberById} = require('../controllers/member.controller');

// Create a new member
router.post('/post', createMember);

// Read the data
// GET all members
router.get('/readmember', getAllMembers);

// GET member by ID
router.get('/readmember/:id', getMemberById);

// UPDATE member by ID
router.put('/updatemember/:id', updateMemberById);

// Delete a book
router.delete('/delete/:id', deleteMemberById);

module.exports = router;
