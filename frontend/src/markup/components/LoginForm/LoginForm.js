import React, { useContext, useEffect, useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
//import loginservice
import loginService from "../../../services/login.service";
//import usecontext
import { AuthContext } from './../../../Context/AuthContext';

const LoginForm = () => {
  //create state
  const [employee_email, setEmployeeEmail] = useState("");
  const [employee_password, setEmployeePassword] = useState("");
  const [serverError, setServerError] = useState("");
  const [EmailErr, SetEmaillError] = useState("");
  const [PasswordErr, setPasswordError] = useState("");
  const Navigate=useNavigate()
  const location = useLocation();
  const [response,setResponse]=useState('')
  const {isLoggedIn,isAdmin,employee}=useContext(AuthContext)
  console.log(isLoggedIn,isAdmin,employee)
  //create function to handdle the login
  const handdlelogIn = async (event) => {
   
    try {
      event.preventDefault();
      //client side validation flag
      let valid = true;
      //if employee_email empty
      if(!employee_email){
        SetEmaillError("Employee email is required");
        valid = false;
      }
      else if(!employee_email.includes("@")){
        SetEmaillError("Invalid email format");
        valid = false;
      }
      else{
        const regex = /^\S+@\S+\.\S+$/;
        if(!regex.test(employee_email)){
          SetEmaillError("Invalid email format");
          valid = false;
        }
        else{
          SetEmaillError("");
        }
      }
      //password validatuion
      if(!employee_password||employee_password.length<6){
        setPasswordError('please enter valid password')
        valid = false
      }

      if(!valid){
        return
      }
      //create the formdata
      const formData={
        employee_email: employee_email,
        employee_password: employee_password,
      }
      //call the loginservice
      const emlopyeeLogedIn = await loginService.login(formData);
      const response= await emlopyeeLogedIn.json()
      console.log(response)
      //check the status of the response
      if(response.status==='success'){
        if(response.data.employee_token) {
          console.log(response.data)
          localStorage.setItem('employee',JSON.stringify(response.data))
          
        }
        console.log(location)
        if(isAdmin) {
          Navigate('/admin/add-employees')
          
        }
        
       else if(location.pathname==='/login'){
          window.location.replace('/')
        }
         
        else{
          window.location.reload()
        }
        
      }
      else
      {
        setServerError(response.message)
      }
      //set the respnse
      //if the employee is logedin
      if(isLoggedIn){
        setResponse(`Hello well come ${employee}`)
      }
      else{
        setResponse((serverError && <div className="validation-error" role="alert"> {serverError}</div> ))
      }
      
    }
    catch (error) {
      console.log(error);
    }
    
  };
  //define useeffect
  useEffect(() => {
    handdlelogIn();
  }, [employee]);

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login to your account</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handdlelogIn}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                    {response}
                      <input
                        type="email"
                        name="employee_email"
                        placeholder="Email"
                        onChange={e=>setEmployeeEmail(e.target.value)}
                      />

                      {EmailErr&&<div className="validation-error" role="alert">{EmailErr}</div>}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        placeholder="Password"
                        onChange={e=>setEmployeePassword(e.target.value)}
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
  );
};

export default LoginForm;
