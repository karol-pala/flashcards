const Dictionary = require('../models/dictionary')
const Card = require('../models/card')

const validator = require('express-validator')

//shows all dictonaries
exports.dictionaryList = function(req, res){
    Dictionary.find()
        .exec(function(err, list){
            if(err) {return next(err)}
            res.render('dictionary_list', {
                title: "Dictonaries",
                dict_list: list
            })
        })
}

//shows one dictionary
exports.dictionary = function(req, res){
    const id = req.params.id;
    Dictionary.findById(id).exec(function(err, response){
        if(err){
            res.render('index', {text: 'Databse error'})
        } else {
            res.render('dictionary', {
                dict: response
            })
        }
    })
}


//sends form for dictionary
exports.dictionaryCreateGet = function(req, res){
    res.render('dictionary_form', {
        action: "/catalog/dictionary/create", 
        method: "POST",
        text: "create dictionary",
        inputs: ['name', 'author', 'description']
    })
}


//posts new dictionary to database
exports.dictionaryCreatePost = function(req, res){
    const dictInfo = req.body;
    let newDict;
    if(!dictInfo.name || !dictInfo.author || !dictInfo.description){
        res.render('index', {text: "Error! Wrong data"})
    } else {
        newDict = new Dictionary({
            name: dictInfo.name,
            author: dictInfo.author,
            description: dictInfo.description
        })
    }
    newDict.save('err', function(err, Dictionary){
        if(err){
            res.render('index', {text: 'Database error'});
        } else {
            res.redirect('/');
        }
    })
}

//renders form for updating dictionary
exports.dictionaryUpdateGet = function(req, res){
    const id = req.params.id;
    Dictionary.findById(id).exec(function(err, dict){
        if(err) return next(err);
        res.render('dictionary_update', {
            text: 'update form',
            action: dict.url,
            method: "POST",
            dict: dict
        })
    })
}

//updates dictionary in DB
exports.dictionaryUpdatePost = function(req, res){
    Dictionary.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.send(`Error in updating dictionary with id: ${req.params.id}`)
        res.redirect('/');
    })
}

//deletes dictionary from DB
exports.dictionaryDeletePost = function(req, res){
    const id = req.params.id;
    Dictionary.findByIdAndDelete(id, function(err){
        if(err){
            res.render('index', {text: 'Database error'})
        }
    })
    Card.deleteMany({dictionary: id}, function(err){
        if(err){
            res.render('index', {text: 'database error'})
        } else {
            res.redirect('/');
        }
    })
}