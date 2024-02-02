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
import { useLocation, useNavigate } from 'react-router-dom';


const EmployeeList = () => {
    //create the employees state to store the employee data fetched
    const[employees,setEmployees]=useState([])
    //create a state to serve as a flag for error message
    const[apiError,setApiError]=useState(false)
    //state to store error message
    const [errorMessage, setErrorMessage] = useState(null);
    const[editedId,setEditedId]=useState('')
    const[deletedId,setDeletedId]=useState('')
    const Navigate=useNavigate()
    const location =useLocation()
    //to get the loggedin employee token
    const{employee}=useAuth()

// ********************************************
//***************************************** */
const [fname,setFname]=useState('')
const [lname,setLname]=useState('')
// const [email,setEmail]=useState([])
const [phone,setPhone]=useState('')
// const [password,setPassword]=useState('')
const [company_role_id, setCompanyRoleId] = useState(1);
const [active,setActive]=useState('')
const [isActive, setIsActive] = useState(false);
const[isUpdate,setIsUpdate]=useState(false)
const [date,setDate]=useState('')
//******************* ******* */
//********************************* */


// console.log(company_role_id)
// console.log(fname)


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
      setEditedId(id)
      setDate(()=>Date.now())
      // Navigate('/admin/edit')
      console.log(id)
    }
//************************* */
//********************************* */
const handleUdate=() =>{
  // e.preventDefualt()
    // if(id===employee.employee_id){
      const data={
        employee_first_name:fname,
        employee_last_name:lname,
        // employee_email:email,
        employee_phone:phone,
        // employee_password:password,
        company_role_id:company_role_id,
        active_employee:isActive,
        added_date:date
          
      }
  
      const updateDValue={
        method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
  
      },
      body:JSON.stringify(data)
        
      }
      const api_url=`http://localhost:8000/api/employee/${editedId}`
      const res=fetch(api_url,updateDValue)
      res.then(res=>console.log(res))
  // setIsUpdate(true)
// Navigate('/admin/employees')
      }



    //function to handle the trash icons clicked
    const handleTrashClick=(id)=>{
      setDeletedId(id)
      const updateDValue={
        method:'delete',
      
      }
      const api_url=`http://localhost:8000/api/employee/${deletedId}`
  //  location.reload()

      const res=fetch(api_url,updateDValue)
  // Update state after the employee is deleted
  setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.employee_id !== deletedId));
  
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
                    employee.employee_id===editedId?(
                      <div>
                        <section className="">
                          <div className="">
                            <div className=''>
                            <span>  <h2>Update {employee?.employee_first_name}</h2></span>
                            </div>
                            <div >
                              <div className="form-column col-lg-12 mx-5 pl-5">
                                <div className="inner-column">
                                  <div className="contact-form">
                                    <form  onSubmit={handleUdate}>
                                      <div className="row clearfix">
                                        <div className="form-group col-md-12">
                                         <h3>Employee Email :{employee?.employee_email}</h3>
                                        </div>
                                        <div className="form-group col-md-12">
                                          <input
                                            type="text"
                                            name="employee_first_name"
                                            value={fname}
                                            placeholder="Employee first name"
                                          onChange={e=>setFname(e.target.value)}
                                          />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <input
                                            type="text"
                                            value={lname}
                                            name="employee_last_name"
                                            placeholder="Employee last name"
                                          onChange={e=>setLname(e.target.value)}
                                       
                                          />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <input
                                            type="text"
                                            value={phone}
                                            name="employee_phone"
                                            placeholder="Employee phone (555-555-5555)"
                                          onChange={e=>setPhone(e.target.value)}
                                          />
                                        </div>
                                        <div className="form-group col-md-12">
                        <select
                          name="employee_role"
                          value={company_role_id}
                          onChange={(event) =>
                            setCompanyRoleId(event.target.value)
                          }
                          className="custom-select-box"
                      
                        >
                          <option value="1">Employee</option>
                          <option value="2">Manager</option>
                          <option value="3">Admin</option>
                        </select>
                      </div>
                                        <div className="form-group col-md-12">
                                        <label>
                                       <input
                                          type="checkbox"
                                            checked={isActive}
                                        onChange={()=>setIsActive(!isActive)}
                                               />
                                               Active
                                             <h2>Status: {isActive ? 'yes' : 'no'}</h2>
                                              </label>
                  
                                          
                                        </div>
                                        <div className="form-group col-md-12">
                                          <button
                                            className="theme-btn btn-style-one"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                          >
                                            <span>Update</span>
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                          
                  ):
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
                         <Button variant='secondary' size='sm' className='m-2' onClick={()=>handleTrashClick(employee.employee_id)}>
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