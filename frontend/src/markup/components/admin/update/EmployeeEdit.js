import React, { useEffect, useState } from 'react';
//import the useauth hook
import { useAuth } from '../../../../Context/AuthContext';
import { useNavigate } from 'react-router';
import employeeService from '../../../../services/employee.service';
const EmployeeEdit = () => {
  const [fname,setFname]=useState([])
  const [lname,setLname]=useState([])
  // const [email,setEmail]=useState([])
  const [phone,setPhone]=useState([])
  // const [password,setPassword]=useState('')
  const [role,setRole]=useState('')
  const [active,setActive]=useState('')
  const [isActive, setIsActive] = useState(false);
  const[isUpdate,setIsUpdate]=useState(false)
  const Nanigate=useNavigate()

    const {employee}=useAuth()
// console.log(employee?.employee_first_name)
// console.log(employee?.employee_email)
 // Function to handle checkbox change
//  const handleCheckboxChange = () => {
//   setIsActive(!isActive);
// };
useEffect(()=>{
  const allEmployees=employeeService.getAllEmployees()

},[])
const handleUdate=(id) =>{
// e.preventDefualt()
  if(id===employee.employee_id){
    const data={
      employee_first_name:fname,
      employee_last_name:lname,
      // employee_email:email,
      employee_phone:phone,
      // employee_password:password,
      company_role_id:role,
      active_employee:isActive
        
    }

    const updateDValue={
      
      
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'

    },
    body:JSON.stringify(data)
      
    }
    const api_url=`http://localhost:8000/api/employee/${id}`
    const res=fetch(api_url,updateDValue)
    res.then(res=>console.log(res))
setIsUpdate(true)

    }
if(isUpdate){
  Nanigate('/admin/employees')
}
    }

  

    

  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
          <span>  <h2>Update {employee?.employee_first_name}</h2></span>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
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
                        onChange={e=>setFname([...fname,e.target.value])}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          value={lname}
                          name="employee_last_name"
                          placeholder="Employee last name"
                        onChange={e=>setLname([e.target.value])}
                     
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          value={phone}
                          name="employee_phone"
                          placeholder="Employee phone (555-555-5555)"
                        onChange={e=>setPhone([e.target.value])}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <select
                          name="employee_role"
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
        
)
}

export default EmployeeEdit;