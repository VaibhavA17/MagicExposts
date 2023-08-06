const express = require("express");
const authController = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/contact', authController.contact);
router.post('/newsletter', authController.newsletter);

module.exports = router;