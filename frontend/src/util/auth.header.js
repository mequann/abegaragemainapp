//function to read data from local stirage
const employeeAuthHeader=async()=>{
    const employee=await JSON.parse(localStorage.getItem('employee'))
    // console.log(employee)
    // console.log(employee.employee_token)
    //if emlopyee and employee_token
    if(employee && employee.employee_token){
        const decodedToken= await decodeTokenPayload(employee.employee_token)
        employee.employee_first_name=decodedToken.employee_first_name;
        // console.log(employee.employee_first_name)
        employee.employee_role=decodedToken.employee_role;
        // console.log()
        employee.employee_id=decodedToken.employee_id;
        employee.employee_email=decodedToken.employee_email
        return employee
 }
    else{
      console.log("i can't in if")
        return {}
    }

}
// Function to decode the payload from the token
// The purpose of this code is to take a JWT token, extract its payload, decode it from Base64Url encoding, and then convert the decoded payload into a JavaScript object for further use and manipulation
const decodeTokenPayload = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  };
  





export default employeeAuthHeader

