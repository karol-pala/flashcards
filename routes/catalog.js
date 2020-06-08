const express = require('express');
const router = express.Router();

const CardController = require('../controllers/card_controller')
const DictonaryController = require('../controllers/dictonary_controller')

//home page
router.get('/', DictonaryController.dictonaryList);


//DICTONARY ROUTES

//dict create get
router.get('/dictonary/create', DictonaryController.dictonaryCreateGet);

//dict create post
router.post('/dictonary/create', DictonaryController.dictonaryCreatePost);

//dict update get
router.get('/dictonary/update/:id', DictonaryController.dictonaryUpdateGet);

//dict update post
router.post('/dictonary/update/:id', DictonaryController.dictonaryUpdatePost);

//dict delete post
router.post('/dictonary/delete/:id', DictonaryController.dictonaryDeletePost);

//show one dict get
router.get('/dictonary/:id', DictonaryController.dictonary);


//CARD ROUTES

//card create get
router.get('/dictonary/:id/card/create', CardController.cardCreateGet);

//card create post
router.post('/dictonary/:id/card/create', CardController.cardCreatePost);

//card update get
router.get('/dictonary/:id/card/:card/update', CardController.cardUpdateGet);

//card update post
router.post('/dictonary/:id/card/:card/update', CardController.cardUpdatePost);

//card delete
router.post('/dictonary/:id/card/:card/delete', CardController.cardDeletePost);

//all cards from dictonary
router.get('/dictonary/:id/card_list', CardController.cardList);

//one card
router.get('/card/:id', CardController.card);


module.exports = router