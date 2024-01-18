
const api_url = "http://localhost:8000";
// const api_url = process.env.REACT_APP_API_URL;

// a function to send post request to create new employee
const createEmployee = async (formData,lloggedEmployeeToken) => {
  try {
    console.log(formData);
    //requestOptions
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'x-access-token':lloggedEmployeeToken
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

//export createEmploye
const employeeService = {
  createEmployee,
};
export default employeeService;
