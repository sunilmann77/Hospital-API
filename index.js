const express = require('express');
const app = express();
const ejs = require('ejs');

const path = require('path');


const port = 8000;
const db = require('./config/mongoose')

//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy')


app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})
