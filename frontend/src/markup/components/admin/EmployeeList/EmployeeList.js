import React ,{useEffect,useState}from 'react'
//import Table,Buttun from react-bootstrap
import { Table, Button } from 'react-bootstrap';
//import the useauth hook
import { useAuth } from '../../../../Context/AuthContext';
//import the employee service
import employeeService from '../../../../services/employee.service';
//import the format from date-fns to format the date properly
import { format } from 'date-fns';
//import bstrashfill bs pencilfill
import {BsTrashFill,BsPencilFill} from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const EmployeeList = () => {
    //create the employees state to store the employee data fetched
    const[employees,setEmployees]=useState([])
    //create a state to serve as a flag for error message
    const[apiError,setApiError]=useState(false)
    //state to store error message
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate=useNavigate()
    //to get the loggedin employee token
    const{employee}=useAuth()
    // console.log(employee)
    let token=null
    if(employee){
        token=employee.employee_token
    }
    useEffect(()=>{
     
 
      // fetchData()
      const allEmployees=employeeService.getAllEmployees(token)
      // console.log(allEmployees)
            
            // const data=await allEmployees.json()
            allEmployees.then((response)=>{
             
              if(!response.ok){
                // console.log(response)
                console.log(response.status)
                setApiError(true)
              
              if(response.status===401){
                setErrorMessage('please login agian!')
              }
              if(response.status===403){
                setErrorMessage('you are not authorized!')
              }
          else{
            setErrorMessage('please try a gain later')
          }
        }
        return response.json()
        })
        .then(data=>{
          if(data.data.length!==0)
          {setEmployees(data.data)}
        })
        .catch(error=>{
          console.log(error)
    
        })

            
        
  
    },[])
    //function to handle the pencil icons clicked
    const handlePencilClick=(id)=>{
      Navigate('/admin/edit')
      console.log(id)
    }
    //function to handle the trash icons clicked
    const handleTrashClick=(id)=>{
      console.log(id)
    }
//handleFilter function

  return (
   <>
   {
       apiError?(
        <section className='contact-section'>
          <div className="auto-container">
          <div className="conttact-title">
            <h2>{errorMessage}</h2>
            </div>  
          </div>
        </section>
       ):(
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
          <h2>Employees</h2>
          
          
            </div>
         
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Active</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added Date</th>
                  <th>Role</th>
                  <th>Edit/Delet</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  employees.map((employee)=>(
                    <tr key={employee.employee_id}>
                      <td>{employee.employee_Active?'Yes':'No'}</td>
                      <td>{employee.employee_first_name}</td>
                      <td>{employee.employee_last_name}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.employee_phone}</td>
                      <td>{format(new Date(employee.added_date), 'MM -dd -yyyy | kk:mm')}</td>
                      <td>{employee.company_role_id}</td>
                      <td>
                        <div className="edit-delet-icons">
                          {/* <span> */}
                         <Button variant='secondary' size='sm' className='m-2'>
                         <BsTrashFill/>
                         </Button>
                     <Button size='sm' className='m-2' onClick={()=>handlePencilClick(employee.employee_id)}>
                     <BsPencilFill/>
                     </Button>

                          {/* </span> */}
                        </div>
                      </td>

                    </tr>
                    
                  ))
                }
              </tbody>

            </Table>
          </div>
        </section>
       )
   }
   </>
  )
}

export default EmployeeList