const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

const catalogRouter = require('./routes/catalog')

//connect to mongo
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://krl_pc:si74rtb32@cluster0-qofpe.mongodb.net/flashcards?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.redirect('/catalog');
})

app.use('/catalog', catalogRouter)

app.get('*', function(req, res){
    res.send('Page not found');
})

app.listen(3000);