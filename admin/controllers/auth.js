const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { promisify } = require('util')


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
            console.log(results)
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('login', {
                    message: 'Invalid Entries'
                })
            } else {
                const id = results[0].id

                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                })
                console.log(token)

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions)
                res.status(200).redirect("/")
            }
        })

    } catch (error) {
        console.log(error)

    }
}

exports.register = (req, res) => {
    console.log(req.body)

    const { username, email, password, passwordConfirm } = req.body

    db.query('SELECT email FROM register WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
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
        console.log(hashedPassword);

        db.query('INSERT INTO register SET ?', { username: username, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results);

                return res.render('register', {
                    message: 'User Registered'
                })
            }
        })
    })
}

exports.contact = (req, res) => {
    console.log(req.body)

    const { name, email, number, message } = req.body

    db.query('INSERT INTO contact SET ?', { name: name, email: email, message: message, number: number }, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            console.log(results);

            return res.render('contact', {
                message: 'Message Send'
            })
        }
    })
}

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt)
        try {
            // verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            console.log(decoded);
            // check if user still exist
            db.query('SELECT * FROM register WHERE id = ?', [decoded.id], (error, result))
            console.log(result);
            
        } catch (error) {

        }
    next()

}