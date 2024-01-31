//import the employee service
const employeeService = require("../services/employee.service");
//create add employee controller
const createEmployee = async (req, res, next) => {
  //check if the employee email already exist in the database
  // console.log("hi am here!")
  const emailExists = await employeeService.checIfEmployeeExists(
    req.body.employee_email
  );
  if (emailExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!",
    });
  } else {
    try {
      const employeeData = req.body;
      console.log(employeeData);
      //create employee function called from service
      const employee = await employeeService.createEmployee(employeeData);
      console.log(employee);
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
//create getEmploye controller
const getEmployees = async (req, res, next) => {
  try {
    const employees = await employeeService.getEmployees();
    // console.log(employees,'from get employees')
    //if there is employees
    if (employees) {
      res.status(200).json({
        message: "Employees fetched successfully",
        status:"success",
        data: employees,
      });
      //else
    } else { 
      res.status(404).json({
        error: "No employees found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//write a function to getsingle employee
const getSingleEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    console.log(employeeId)
    const employee = await employeeService.getSingleEmployee(employeeId);
    console.log(employee)
    //if employee found
    if (employee) {
      res.status(200).json({
        message: "Employee fetched successfully",
        data: employee,
      });
    } else {
      res.status(404).json({
        error: "Employee not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//function to update employee
const updateEmployee = async (req, res, next) => {
  try {
    const employeeId = req.params.update_id;
    const employeeData = req.body;
    console.log(employeeData,'pppp')
    const employee = await employeeService.updateEmployee(
      employeeId,
      employeeData
    );
    if (employee) {
      res.status(200).json({
        message: "Employee updated successfully",
        data: employee,
      });
    } else {
      res.status(404).json({
        error: "Employee not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: "Something went wrong! from update",
    })
  }
}

//export the controller function
module.exports = {
  createEmployee,
  getEmployees,
  getSingleEmployee,
  updateEmployee,
  
};
