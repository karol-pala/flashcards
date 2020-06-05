const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.redirect('/catalog');
})

app.get('*', function(req, res){
    res.send('Page not found');
})

app.listen(3000);