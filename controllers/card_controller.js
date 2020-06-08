const Card = require('../models/card');

const NOT_IMPLEMENTED = "NOT IMPLEMENTED";

//show list of cards, based on dictonary id field in CardSchema
exports.cardList = function(req, res) {
    Card.find({dictonary: req.params.id})
    .exec(function(err, response){
        if(err){
            res.render('index', {text: 'Database error'})
        } else {
            res.render('card_list', {data: response});
        }
    })
}

//show one card, based on dictonary id field in CardSchema and card id
exports.card = function(req, res) {
    res.render('index', {text: `${NOT_IMPLEMENTED}: card`})
}

//renders form for adding new card
exports.cardCreateGet = function(req, res){
    res.render('card_form', {
        action: `/catalog/dictonary/${req.params.id}/card/create`
    })
}

//takes data from form and add new Card to DB
exports.cardCreatePost = function(req, res){
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

//deletes Card from DB
exports.cardDeletePost = function(req, res){
    const id = req.params.card;
    Card.findByIdAndDelete(id, req.body, function(err, response){
        if(err){
            res.render('index', {text: "database error"})
        } else {
            res.redirect('/')
        }
    })
}

//renders form for updating Card
exports.cardUpdateGet = function(req, res){
    const id = req.params.card;
    Card.findById(id).exec(function(err, response){
        if(err){
            res.render('index', {text: 'database error'})
        } else {
            res.render('card_update', {action: response.action, card: response})
        }
    })
}

//updates Card
exports.cardUpdatePost = function(req, res){
    Card.findByIdAndUpdate(req.params.card, req.body, function(err, response){
        if(err){
            res.render('index', {text: "database error"})
        } else {
            res.redirect('/')
        }
    })
}

