const Card = require('../models/card');

const NOT_IMPLEMENTED = "NOT IMPLEMENTED";


exports.card_list = function(req, res) {
    res.render('index', {text: `${NOT_IMPLEMENTED}: card list`})
}

exports.card = function(req, res) {
    res.render('index', {text: `${NOT_IMPLEMENTED}: card`})
}

exports.card_create_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card create get`})
}

exports.card_create_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card create post`})
}

exports.card_delete_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card delete get`})
}

exports.card_delete_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card delete post`})
}

exports.card_update_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card update get`})
}

exports.card_update_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: card update post`});
}

