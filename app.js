const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

dotenv.config({ path: './.env' })

const app = express()

const publicDirectory = path.join(__dirname, './assets')
app.use(express.static(publicDirectory))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.set('view engine', 'hbs')

app.use('/', require('./routes/pages'))

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server started on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
});

