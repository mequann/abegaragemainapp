//import express
const express = require('express');
//call the router method from express to create router
const router = express.Router();
//import the install router
const installRouter = require('./install.route');
//import the emplyee routes
const employeeRouter = require('./employee.route');
//import the login route
const loginRouter = require('./login.route');

//add the employee routes to the main router
router.use(employeeRouter);

//add the install router to main router
router.use(installRouter);
//add the login routes to the main router
router.use(loginRouter);


module.exports = router;
//
 