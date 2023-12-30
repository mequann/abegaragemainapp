//import express
const express = require('express');
//call the router method from express to create router
const router = express.Router();
//import the login controller
const loginController = require('../controllers/login.controller');
//create post route
router.post('/api/employee/login', loginController.login);

module.exports = router;