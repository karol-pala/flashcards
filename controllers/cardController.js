const Card = require('../models/card');
const Dictonary = require('../models/dictonary')

const NOT_IMPLEMENTED = "NOT IMPLEMENTED";


exports.card_list = function(req, res) {
    Card.find({dictonary: req.params.id})
    .exec(function(err, response){
        if(err){
            res.render('index', {text: 'Database error'})
        } else {
            res.render('cards', {data: response});
        }
    })
}

exports.card = function(req, res) {
    res.render('index', {text: `${NOT_IMPLEMENTED}: card`})
}

exports.card_create_get = function(req, res){
    res.render('card_form', {
        action: `/catalog/dictonary/${req.params.id}/card/create`
    })
}

exports.card_create_post = function(req, res){
    const cardInfo = req.body;
    let newCard;
    if(!cardInfo.firstSide || !cardInfo.secondSide){
        res.render('index', {text: "Wrong data"});
    } else {
        newCard = new Card({
            dictonary: req.params.id,
            firstSide: cardInfo.firstSide,
            secondSide: cardInfo.secondSide
        })
    }
    newCard.save('err', function(err, Card){
        if(err){
            res.render('index', {text: 'Database error'})
        } else {
            res.redirect('/')
        }
    })
}


exports.card_delete_post = function(req, res){
    const id = req.params.card;
    Card.findByIdAndDelete(id, req.body, function(err, response){
        if(err){
            res.render('index', {text: "database error"})
        } else {
            res.redirect('/')
        }
    })
}

exports.card_update_get = function(req, res){
    const id = req.params.card;
    Card.findById(id).exec(function(err, response){
        if(err){
            res.render('index', {text: 'database error'})
        } else {
            res.render('card_update', {action: response.action, card: response})
        }
    })
}

exports.card_update_post = function(req, res){
    Card.findByIdAndUpdate(req.params.card, req.body, function(err, response){
        if(err){
            res.render('index', {text: "database error"})
        } else {
            res.redirect('/')
        }
    })
}

