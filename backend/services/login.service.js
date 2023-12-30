//import the excuteQuery functiion from db.config.js file
 const conn = require('../config/db.config');
 //import bcryt module to compare password
 const bcrypt = require('bcrypt');
 //import the employee.service to get employee by email
 const employeService=require('./employee.service')



 // A login function to handle login process
 async function login(employeeData) {
    try {
        //define object to be returned
        let returnedData = {}
        //get employee by email
        const employee = await employeService.getEmployeeByEmail(employeeData.employee_email);
        if (employee.length===0) {
          returnedData={
            status:'failed',
            message:"Employee doesnot Exist"
          }
          return returnedData
        }
        //compare password
        const passwordMatch = await bcrypt.compare(employeeData.employee_password, employee[0].employee_password_hashed);
        if (!passwordMatch) {
            returnedData={
                status:'failed',
                message:"Password doesnot match"
            }
            return returnedData
        }
        //if password match
        else{
        returnedData={
            status:'success',
        data:employee[0],
         
        }
        return returnedData
    }
        //generate token

    } catch(error) {
        console.log(error)
        
    }
     }

     //export the function

     module.exports = {
         login
     }
 