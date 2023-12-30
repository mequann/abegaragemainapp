//import express
const express = require('express');
//call the router mehtod from express to create the router
const router = express.Router();
//import the install controller
const installController = require('../controllers/install.controller');
//create get route to handdle the install request
router.get('/install', installController.handleInstall);
//export the router
module.exports = router;
//