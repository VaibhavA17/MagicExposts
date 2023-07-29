const express = require("express")

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/contact', (req, res) => {
    res.render('contact')
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/products', (req, res) => {
    res.render('our-product')
})
router.get('/relief', (req, res) => {
    res.render('portfolio-reliefs')
})
router.get('/home-furnishing', (req, res) => {
    res.render('portfolio-home')
})
router.get('/home-furnishing/blankets', (req, res) => {
    res.render('home-blankets')
})
router.get('/home-furnishing/mink', (req, res) => {
    res.render('homeproducts/h11')
})
router.get('/home-furnishing/fleece', (req, res) => {
    res.render('homeproducts/h12')
})
router.get('/home-furnishing/pouf', (req, res) => {
    res.render('homeproducts/h2')
})
router.get('/home-furnishing/throw', (req, res) => {
    res.render('homeproducts/h3')
})
router.get('/home-furnishing/pillow', (req, res) => {
    res.render('homeproducts/h4')
})
router.get('/home-furnishing/comforter', (req, res) => {
    res.render('homeproducts/h5')
})
router.get('/home-furnishing/bath-mat', (req, res) => {
    res.render('homeproducts/h6')
})
router.get('/home-furnishing/darrie', (req, res) => {
    res.render('homeproducts/h7')
})
router.get('/home-furnishing/hand-woven-carpet', (req, res) => {
    res.render('homeproducts/h8')
})
router.get('/home-furnishing/tufted-carpet', (req, res) => {
    res.render('homeproducts/h9')
})
router.get('/relief/blankets', (req, res) => {
    res.render('relief-blankets')
})
router.get('/relief/low-thermal', (req, res) => {
    res.render('reliefproducts/r11')
})
router.get('/relief/high-thermal', (req, res) => {
    res.render('reliefproducts/r12')
})
router.get('/relief/high-thermal', (req, res) => {
    res.render('reliefproducts/r13')
})
router.get('/relief/multipurpose-mat', (req, res) => {
    res.render('reliefproducts/r2')
})
router.get('/relief/sleeping-mat', (req, res) => {
    res.render('reliefproducts/r3')
})
router.get('/relief/sports-kit', (req, res) => {
    res.render('reliefproducts/r4')
})
router.get('/relief/dignity-kit', (req, res) => {
    res.render('reliefproducts/r5')
})
router.get('/relief/hygiene-kit', (req, res) => {
    res.render('reliefproducts/r6')
})
router.get('/relief/education-kit', (req, res) => {
    res.render('reliefproducts/r7')
})
router.get('/relief/bags', (req, res) => {
    res.render('reliefproducts/r8')
})
router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router