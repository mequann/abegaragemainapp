import React, { useState,useNavigate } from 'react'
//import login service
import loginService from "../../../../services/login.service";
//import uselocation hook
import { useLocation } from 'react-router-dom';


const LoginForm = () => {
    const [employee_email, setEmployeeEmail] = useState("");
    const [employee_password, setEmployeePassword] = useState("");
    const [serverError, setServerError] = useState("");
    const [EmailErr, SetEmaillError] = useState("");
    const [PasswordErr, setPasswordError] = useState("");
    const location = useLocation();
    const Navigate=useNavigate()

    const handleSubmit =  (event) => {
        event.preventDefault();
    
          //client side validation flag
          let valid = true;
          //if employee_email empty
          if (!employee_email) {
            SetEmaillError("Employee email is required");
            valid = false;
          } else if (!employee_email.includes("@")) {
            SetEmaillError("Invalid email format");
            valid = false;
          } else {
            const regex = /^\S+@\S+\.\S+$/;
            if (!regex.test(employee_email)) {
              SetEmaillError("Invalid email format");
              valid = false;
            } else {
              SetEmaillError("");
            }
        }
        //validate password
        if (!employee_password) {
          setPasswordError("Password is required");
          valid = false;
        }
        else if(employee_password.length<6){
          setPasswordError("Password must be at least 6 characters long")
          valid=false
        }
        else
        {
          setPasswordError('')
        }
        if (!valid) {
          return;
        }
        //if valid
        //call  loginservice
        const formData={
            employee_email,
            employee_password
        }
        const employee=loginService.login(formData)
        employee.then((response)=>response.json())
        .then((response)=>{
            console.log(response)
          if(response.success==='success'){
            //save the user on localstorage
          if(response.data.employee_token) {
            console.log(response.data)
            localStorage.setItem('employe', JSON.stringify(response.data))
  
          }
            // Navigate('/admin')
            console.log(location)
            if(location.path==='/login') {
                window.location.replace('/')
                
            }
            else{
                // Navigate('/admin')
                window.location.reload()
            }
          

            }
            //show error message
          else{
            setServerError(response.message)
          }
         
        })
        .catch((error)=>{
          console.log(error)
          setServerError('An error has occured. please try later again')
        })
   
       
        


    }

    
  return (
    <div>
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && (
                        <div className="validation-error" role="alert">
                          {serverError}
                        </div>
                      )}

                      <input
                        type="email"
                        name="employee_email"
                        value={employee_email}
                        placeholder="Employee email"
                        onChange={(event) =>
                          setEmployeeEmail(event.target.value)
                        }
                        required
                      />
                      {EmailErr && (<div className="validation-error" role="alert">
                          {EmailErr}
                        </div>
                      )}
                    </div>
                      <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={employee_password}
                        onChange={(event) =>
                          setEmployeePassword(event.target.value)
                        }
                        placeholder="Employee password"
                        required
                      />
                       {PasswordErr&&<div className="validation-error" role="alert">{PasswordErr}</div>}
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Login</span>
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

export default LoginForm

