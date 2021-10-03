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
router.get('/mail', authController.isLoggedIn,  (req, res) =>{
    
    if(req.user){
        res.render('mail.ejs', {
            user: req.user,
            data: req.data
        })
    }else{
        res.redirect('/login')
    }
    
})
router.get('/contact',(req, res) =>{
    res.render('contact')
})
router.get('/accounts', authController.isLoggedIn, (req, res) =>{
    if(req.user){
        res.render('accounts.ejs',{
            details: req.details
        })
        
    }else{
        res.redirect('/login')
    }
})
router.get('/readmail', authController.isLoggedIn, (req, res) =>{
    if(req.user){
        res.render('readmail',{
            data: req.data
        })
        
    }else{
        res.redirect('/login')
    }
})

module.exports = router