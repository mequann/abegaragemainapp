// const api_url = process.env.REACT_APP_API_URL;
const api_url='http://localhost:8000'

// a function to send post request to login
const login = async (formData) => {
    try {
        //requestOptions
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        };
        // console.log("About to send login request")
        // console.log(requestOptions.body)
        // construct the full URL
        const url = `${api_url}/api/employee/login`;
            //fetach
            const response = await fetch( `${api_url}/api/employee/login`, requestOptions);

            console.log(response);
            return response;
}
    catch(error){
        console.log(error)
    }
}
//export function login

module.exports = {
    login,
};













