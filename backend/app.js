//import invironment variable
require("dotenv").config();
//import cors
const cors = require("cors");
//import express
const express = require("express");
//import route
const router = require("./routes");
//import the sanitize module
const sanitizer = require("sanitize");

//create app server
const app = express();
//add express.json to the application
app.use(express.json());
//add express.urlencoded to the application
app.use(express.urlencoded({ extended: true }));
//add the sanitizer to the express middleware
app.use(sanitizer.middleware);
//setup the cors option to allow request from our frontend

const options = {
  origin: process.env.FRONT_ENDURL,
  optionSuccessStatus: 200,
};
//add cors
// app.use(cors(options));   this is not working will be fixed latter
app.use(cors());

//create a varaible to hold port number
const PORT = process.env.PORT;
//add routes to the application as middleware
app.use(router);

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//export the webserver
module.exports = app;

