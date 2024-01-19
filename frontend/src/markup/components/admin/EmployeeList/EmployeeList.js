import React ,{useEffect,useState}from 'react'
//import Table,Buttun from react-bootstrap
import { Table, Button } from 'react-bootstrap';
//import the useauth hook
import { useAuth } from '../../../../Context/AuthContext';
//import the employee service
import employeeService from '../../../../services/employee.service';
//import the format from date-fns to format the date properly
import { format } from 'date-fns';
const EmployeeList = () => {
    //create the employees state to store the employee data fetched
    const[employees,setEmployees]=useState([])
    //create a state to serve as a flag for error message
    const[apiError,setApiError]=useState(false)
    //state to store error message
    const [errorMessage, setErrorMessage] = useState(null);
    //to get the loggedin employee token
    const{employee}=useAuth()
    let token=null
    if(employee){
        token=employee.employee_token
    }
    useEffect(()=>{
     
            const allEmployees= employeeService.getAllEmployees(token)
            // const data=await allEmployees.json()
            allEmployees.then((response)=>{
                console.log(response)
            })

            
        
  
    },[])
  return (
    <div><h1>EmployeeList</h1></div>
  )
}

export default EmployeeList