const express = require('express');
const router = express.Router();

const card_controller = require('../controllers/card_controller')
const dictonary_controller = require('../controllers/dictonary_controller')

//home page
router.get('/', dictonary_controller.dictonaryList);

//DICTONARY ROUTES

//dict create get
router.get('/dictonary/create', dictonary_controller.dictonaryCreateGet);

//dict create post
router.post('/dictonary/create', dictonary_controller.dictonaryCreatePost);

//dict update get
router.get('/dictonary/update/:id', dictonary_controller.dictonaryUpdateGet);

//dict update post
router.post('/dictonary/update/:id', dictonary_controller.dictonaryUpdatePost);

//dict delete get
// router.get('/dictonary/delete/:id', dictonary_controller.dictonary_delete_get);

//dict delete post
router.post('/dictonary/delete/:id', dictonary_controller.dictonaryDeletePost);

//show one dict get
router.get('/dictonary/:id', dictonary_controller.dictonary);

//CARD ROUTES

router.get('/dictonary/:id/card/create', card_controller.cardCreateGet);

router.post('/dictonary/:id/card/create', card_controller.cardCreatePost);

router.get('/dictonary/:id/card/:card/update', card_controller.cardUpdateGet);

router.post('/dictonary/:id/card/:card/update', card_controller.cardUpdatePost);


router.post('/dictonary/:id/card/:card/delete', card_controller.cardDeletePost);

//all cards from dictonary
router.get('/dictonary/:id/card_list', card_controller.cardList);

router.get('/card/:id', card_controller.card);

module.exports = router