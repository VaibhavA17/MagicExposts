const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { MagicExportConstants } = require("./constants/constants");

dotenv.config({ path: './.env' })

const app = express();

const publicDirectory = path.join(__dirname, './assets');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages.routes'));
app.use('/auth', require('./routes/auth.routes'));

app.listen(process.env.PORT || 3000, function () {
console.log(`
You can now view ${MagicExportConstants.appName} in the browser.

Local:            http://localhost:${process.env.PORT || 3000}
On Your Network:  http://192.168.29.237:${process.env.PORT || 3000}

Note that this is a ${process.env.NODE_ENV} mode.
`)
});

