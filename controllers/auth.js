const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { promisify } = require('util')
const { sendMail } = require('../lib/sendmail')


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.login = (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).render('login', {
                message: 'Please Provide Email & Password'
            })
        }
        db.query('SELECT * FROM register WHERE username = ?', [username], async (error, results) => {
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('login', {
                    message: 'Invalid Entries'
                })
            } else {
                const id = results[0].id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                })
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions)
                res.status(200).redirect("/dashboard")
            }
        })
    } catch (error) {
        console.log(error)
    }
}

exports.register = (req, res) => {
    const { username, email, password, passwordConfirm } = req.body
    db.query('SELECT email FROM register WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match'
            })
        }
        let hashedPassword = await bcrypt.hash(password, 8)
        db.query('INSERT INTO register SET ?', { username: username, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                return res.render('register', {
                    message: 'User Registered'
                })
            }
        })
    })
}

exports.contact = async (req, res) => {
    await sendMail(req);
}

exports.deleteMail = async (req, res) => {
    db.query('DELETE FROM contact where id = ?', [parseInt(req.params.id)], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/mail')
        }
    })
}
exports.deleteAccount = async (req, res) => {
    db.query('DELETE FROM register where id = ?', [parseInt(req.params.id)], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/accounts')
        }
    })
}

exports.isLoggedIn = async (req, res, next) => {
    db.query('SELECT * FROM contact', function (error, result) {
        req.data = result
    })
    db.query('SELECT * FROM register', function (error, result) {
        req.details = result
    })
    if (req.cookies.jwt) {
        try {
            // verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            // check if user still exist
            db.query('SELECT * FROM register WHERE id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next()
                }
                req.user = result[0]
                return next()
            })
        } catch (error) {
            return next()
        }
    } else {
        next()
    }
}

exports.logout = (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    })
    res.status(200).redirect('/login')
}