const express = require('express');
const path = require('path');
const app = express();

const catalogRouter = require('./routes/catalog')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.redirect('/catalog');
})

app.use('/catalog', catalogRouter)

app.get('*', function(req, res){
    res.send('Page not found');
})

app.listen(3000);