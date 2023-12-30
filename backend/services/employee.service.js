//import the executeQuery function from db.config.js file
const conn = require('../config/db.config');

//import the bcrypt library
const bcrypt = require('bcrypt');
//A function to check if the employee exist in the database
const checIfEmployeeExists = async (email) => {
    
    const sql = 'SELECT * FROM employee WHERE employee_email = ?';
    
    const rows= await conn.executeQuery(sql, [email]);
    // console.log(rows,"kkkkk")
    if (rows.length > 0) {
        return true;
    }else
        return false;


}
//A function to create new employee
const createEmployee = async (employee) => {
   let createdEmployee={}

   try {
    // // Ensure required parameters are present
    // if ( !employee.employee_email || !employee.active_employee || !employee.employee_password ||
    //     !employee.employee_first_name || !employee.employee_last_name || !employee.employee_phone || !employee.company_role_id) {
    //     return false; // Return false or handle the error appropriately
    // }

    //generate salt and hash passsword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(employee.employee_password, salt);
    //insert the employee email  into  employee table
    const query = 'INSERT INTO employee (employee_email,active_employee) values(?,?)';
    const rows = await conn.executeQuery(query, [employee.employee_email,employee.active_employee]);
    console.log(rows)
    if (rows.affectedRows!==1) {
        throw new Error("Failed to insert employee data.");
    }
    //get the employee id from the insert
    const employee_id = rows.insertId;
    //insert the remaining data into employee_info,employee_pass ,employee_role tables
    const employeeInfoQuery = 'INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name,employee_phone) values (?, ?, ?,?)';
    const employeePassQuery = 'INSERT INTO employee_pass (employee_id, employee_password_hashed) values (?, ?)';
    const employeeRoleQuery = 'INSERT INTO employee_role (employee_id, company_role_id) values (?, ?)';

    const employeeInfoResult = await conn.executeQuery(employeeInfoQuery, [employee_id, employee.employee_first_name, employee.employee_last_name,employee.employee_phone]);
    const employeePassResult = await conn.executeQuery(employeePassQuery, [employee_id, hashedPassword]);
    const employeeRoleResult = await conn.executeQuery(employeeRoleQuery, [employee_id, employee.company_role_id]);
    

//createdemployee
    createdEmployee={
        employee_id:employee_id,
        employee_email:employee.employee_email,
        employee_first_name:employee.employee_first_name,
        employee_last_name:employee.employee_last_name,
        employee_phone:employee.employee_phone
    } 

   } 
   catch(error) {
    console.log(error.message)
   }
   console.log(createdEmployee);
   return createdEmployee
   }
//a function to get employee by email
const getEmployeeByEmail = async (employee_email) => {
//write query with inner jion  with all tables
const query = `
    SELECT * 
    FROM employee
    INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id
    INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id
    INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id
    WHERE employee.employee_email = ?
`;
    const rows = await conn.executeQuery(query, [employee_email]);
    return rows;
};


//export the functions
module.exports = {
    checIfEmployeeExists,
    createEmployee,
    getEmployeeByEmail

};
