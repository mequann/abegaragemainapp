//import lonin service
const loginService = require('../services/login.service');
//impport jwt
const jwt = require('jsonwebtoken');
//import  secrect key
const secretKey = process.env.SECRET_KEY;


//handle login function
async function login(req, res,next) {
  try {
    // console.log(secretKey)
            console.log(req.body)
            const employeeData=req.body
            //call loginservice
            const employee = await loginService.login(employeeData);
            // console.log('this is the employe data :',employee.data)
            //if employee not fuond
                 if (employee.status==='failed') {
                return res.status(403).json({
                    status:employee.status,
                    message:employee.message
                });
                // console.log(employee.message)
                
            }
            //if successfull ,send response to the client
            const payload={
                employee_id:employee.data.employee_id, 
                employee_email:employee.data.employee_email,
                company_role_id:employee.data.company_role_id,
                employee_first_name:employee.data.employee_first_name
            }
            console.log(payload)
            //sign token
            const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });
            console.log(token)
            const decodedToken = jwt.verify(token, secretKey);
console.log(decodedToken);
      const sendBack={
        employee_token:token
      };
      return res.status(200).json({
        status:'success',
        message:"Login Successful",
        data:sendBack
      })

      
          

        } catch(error) {
            console.log(error)
            
        }
}
//export function login from controller
module.exports = {
    login,
};