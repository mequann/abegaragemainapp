//import the employee service
const employeeService = require("../services/employee.service");
//create add employee controller
const createEmployee = async (req, res, next) => {
  //check if the employee email already exist in the database
  // console.log("hi am here!")
  const emailExists = await employeeService.checIfEmployeeExists(req.body.employee_email);
  if (emailExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!",
    });
  } else {
    try {
      const employeeData = req.body;
      console.log(employeeData)
      //create employee function called from service
      const employee = await employeeService.createEmployee(employeeData);
      console.log(employee)
      //if not employee
      if (!employee) {
        res.status(404).json({
          error: " Failed to add the Employee ",
        });
      }
      //if employee
      else {
        res.status(201).json({
          message: "Employee added successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
};

//export the controller function
module.exports = {
  createEmployee,
};
