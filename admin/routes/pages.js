const express = require("express")
const authController = require("../controllers/auth")

const router = express.Router()

router.get('/',(req, res) =>{
    res.render('index')
})
router.get('/login',(req, res) =>{
    res.render('login')
})
router.get('/register',(req, res) =>{
    res.render('register')
})
router.get('/mail',(req, res) =>{
    res.render('mail')
})
router.get('/contact',(req, res) =>{
    res.render('contact')
})
router.get('/readmail', authController.isLoggedIn, (req, res) =>{
    
    res.render('readmail')
})

module.exports = router