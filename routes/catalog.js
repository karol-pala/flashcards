const express = require('express');
const router = express.Router();

const CardController = require('../controllers/card_controller')
const DictionaryController = require('../controllers/dictionary_controller')

//home page
router.get('/', DictionaryController.dictionaryList);


//DICTONARY ROUTES

//dict create get
router.get('/dictionary/create', DictionaryController.dictionaryCreateGet);

//dict create post
router.post('/dictionary/create', DictionaryController.dictionaryCreatePost);

//dict update get
router.get('/dictionary/:id/update', DictionaryController.dictionaryUpdateGet);

//dict update post
router.post('/dictionary/:id/update', DictionaryController.dictionaryUpdatePost);

//dict delete post
router.post('/dictionary/:id/delete', DictionaryController.dictionaryDeletePost);

//show one dict get
router.get('/dictionary/:id', DictionaryController.dictionary);


//CARD ROUTES

//card create get
router.get('/dictionary/:id/card/create', CardController.cardCreateGet);

//card create post
router.post('/dictionary/:id/card/create', CardController.cardCreatePost);

//card update get
router.get('/dictionary/:id/card/:card/update', CardController.cardUpdateGet);

//card update post
router.post('/dictionary/:id/card/:card/update', CardController.cardUpdatePost);

//card delete
router.post('/dictionary/:id/card/:card/delete', CardController.cardDeletePost);

//one card
router.get('/card/:id', CardController.card);


module.exports = router