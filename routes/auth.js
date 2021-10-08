const express = require("express")
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/register', authController.register)
router.post('/contact', authController.contact)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/mail/:id', authController.deleteMail)
router.post('/accounts/:id', authController.deleteAccount)

module.exports = router