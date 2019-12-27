// Check if we're running in production enviroment
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

// Load modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Require indexRouter & authorRouter
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/author');

// Set view engine and layouts
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Use indexRouter 
app.use('/', indexRouter);
app.use('/authors', authorRouter);

// Setup connection to db or mongodb://localhost/mybrary
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
// Check connection
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to mongoose!'));

// Start server
app.listen(process.env.PORT || 3000, console.log('Server started!'));
