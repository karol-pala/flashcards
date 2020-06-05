const express = require('express');
const router = express.Router();

const card_controller = require('../controllers/cardController')
const dictonary_controller = require('../controllers/dictonaryController')

//home page
router.get('/', dictonary_controller.dictonary_list);

//DICTONARY ROUTES

//dict create get
router.get('/dictonary/create', dictonary_controller.dictonary_create_get);

//dict create post
router.post('/dictonary/create', dictonary_controller.dictonary_create_post);

//dict update get
router.get('/dictonary/update/:id', dictonary_controller.dictonary_update_get);

//dict update post
router.post('/dictonary/update/:id', dictonary_controller.dictonary_update_post);

//dict delete get
router.get('/dictonary/delete/:id', dictonary_controller.dictonary_delete_get);

//dict delete post
router.post('/dictonary/delete/:id', dictonary_controller.dictonary_delete_post);

//show one dict get
router.get('/dictonary/:id', dictonary_controller.dictonary);

//CARD ROUTES

router.get('/card/create', card_controller.card_create_get);

router.post('/card/create', card_controller.card_create_post);

router.get('/card/udpate/:id', card_controller.card_update_get);

router.post('/card/update/:id', card_controller.card_update_post);

router.get('/card/delete/:id', card_controller.card_delete_get);

router.post('/card/delete/:id', card_controller.card_delete_post);

router.get('/cards', card_controller.card_list);

router.get('/card/:id', card_controller.card);

module.exports = router