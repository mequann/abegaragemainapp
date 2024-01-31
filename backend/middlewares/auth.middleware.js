// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
//import employeeservice
const employeeService = require("../services/employee.service");

//function to verify the token recieved from the 
const verifiedToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      status: "failed",
      message: "token not found",
    });
  }
  //verify the token
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "failed",
        message: "invalid token",
      });
    }
    //update the req if neccessary this is as an example and can add any values that we need
    // for the next functionality and optional to the token and can also take from the token

    req.employee_email = decoded.employee_email;
    next();
  });
  

};
// function to isAdmin
const isAdmin = async(req,res,next)=>{
    console.log(req.employee_email)
    const employee_email=req.employee_email
    const employee=await  employeeService.getEmployeeByEmail(employee_email)
    // console.log(employee,'from middle')
    // console.log(employee[0].    company_role_id)
    if(employee[0].    company_role_id===3){
        next()

    }
    else{
        return res.status(401).send({
            status: "failed",
            message: "you are not an admin",
          });
    }


  }
const authMiddleWare={
    verifiedToken,
    isAdmin
}
module.exports=authMiddleWare