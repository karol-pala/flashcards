const Dictonary = require('../models/dictonary')

const NOT_IMPLEMENTED = "NOT IMPLEMENTED"

exports.dictonary_list = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary list`})
}

exports.dictonary = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: one dictonary`})
}

exports.dictonary_create_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary create get`})
}

exports.dictonary_create_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary create post`})
}

exports.dictonary_update_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary update get`})
}

exports.dictonary_update_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary update post`})
}

exports.dictonary_delete_get = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dictonary delete get`})
}

exports.dictonary_delete_post = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: dixtonary delete post`})
}