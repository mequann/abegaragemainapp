//import express
const express = require('express');
//import router from express
const router = express.Router();
//import employee controller
const employeeController = require('../controllers/employee.controller');
//create post route
router.post('/api/employee', employeeController.createEmployee);
//create get request route to get employees
router.get('/api/employees', employeeController.getEmployees);
//get request to for single imployee
router.get('/api/employee/:id', employeeController.getSingleEmployee);
//route to update employee
router.put('/api/employee/:update_id', employeeController.updateEmployee);
//route to delete employee
// router.delete('/api/employee/:id', employeeController.deleteEmployee);

module.exports = router;
   