const Dictionary = require('../models/dictionary')
const Card = require('../models/card')

const validator = require('express-validator')
const async = require('async');

//shows all dictonaries
exports.dictionaryList = function(req, res){
    Dictionary.find()
        .exec(function(err, list){
            if(err) {return next(err)}
            res.render('dictionary_list', {
                dict_list: list
            })
        })
}

//shows one dictionary
exports.dictionary = function(req, res){
    const id = req.params.id;
    async.parallel({
        dictionary: function(callback){
            Dictionary.findById(id, callback)
        },
        cards: function(callback){
            Card.find({dictionary: id}, callback)
        }
    }, function(err, results) {
        res.render('dictionary', {error: err, dictionary: results.dictionary, cards: results.cards})
    }
    )
}


//sends form for dictionary
exports.dictionaryCreateGet = function(req, res){
    res.render('dictionary_form', {
        action: "/catalog/dictionary/create"
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
            action: dict.url,
            dict: dict
        })
    })
}

//updates dictionary in DB
exports.dictionaryUpdatePost = function(req, res){
    Dictionary.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.send(`Error in updating dictionary with id: ${req.params.id}`)
        res.redirect(`/catalog/dictionary/${req.params.id}`);
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