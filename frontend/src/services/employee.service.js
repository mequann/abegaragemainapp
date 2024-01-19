
const api_url = "http://localhost:8000";
// const api_url = process.env.REACT_APP_API_URL;

// a function to send post request to create new employee
const createEmployee = async (formData,loggedEmployeeToken) => {
  try {
    console.log(formData);
    //requestOptions
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'x-access-token':loggedEmployeeToken
     },
      body: JSON.stringify(formData)
    };
    // construct the full URL
    const url = `${api_url}/api/employee`;
    console.log(url);
    // console.log(requestOptions)

    //response
    //http://localhost:8000/api/employee
    const response = await fetch( `${api_url}/api/employee`, requestOptions);

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject("Failed to create employee. Please try again.");
    // throw error;
  }
};
//function to request to get all employees
const getAllEmployees=async(token)=>{
  const requestOptions={
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'x-access-token':token
    }
  }
  const response=await fetch(`${api_url}/api/employees`,requestOptions)
  return response
}

//export createEmploye
const employeeService = {
  createEmployee,
  getAllEmployees
};
export default employeeService;
