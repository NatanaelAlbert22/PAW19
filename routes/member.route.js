const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member.controller');

// Create a new member
router.post('/', memberController.createMember);