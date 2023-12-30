//import express
const express = require('express');
//import router from express
const router = express.Router();
//import employee controller
const employeeController = require('../controllers/employee.controller');
//create post route
router.post('/api/employee', employeeController.createEmployee);

module.exports = router;
