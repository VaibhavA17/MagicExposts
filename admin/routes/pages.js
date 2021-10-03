const express = require("express")
const authController = require("../controllers/auth")

const router = express.Router()

router.get('/', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render('index')
    } else {
        res.redirect('/login')
    }
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render('register')
    } else {
        res.render('login')
    }
})
router.post('/register', authController.register)
router.get('/mail', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render('mail.ejs', {
            user: req.user,
            data: req.data
        })
    } else {
        res.redirect('/login')
    }
})
router.get('/accounts', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render('accounts.ejs', {
            details: req.details
        })
    } else {
        res.redirect('/login')
    }
})
router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router