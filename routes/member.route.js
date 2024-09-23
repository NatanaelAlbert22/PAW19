const express = require('express');
const router = express.Router();
const {createMember, getAllMembers, getMemberById} = require('../controllers/member.controller');

// Create a new member
router.post('/post', createMember);

// Read the data
// GET all members
router.get('/readmember', getAllMembers);

// GET member by ID
router.get('/readmember/:id', getMemberById);

module.exports = router;
