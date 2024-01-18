import React, { useState } from "react";
//import the employeeService
import employeeService from "../../../../services/employee.service";
//import useauth hook
import { useAuth } from "../../../../Context/AuthContext";

const AddEmployeeForm = () => {
  //usestate hook to hold values of input fields employee_email,employee_first_name,employee_password,active_employee,company_role_id
  const [employee_email, setEmployeeEmail] = useState("");
  const [employee_first_name, setEmployeeFirstName] = useState("");
  const [employee_last_name, setEmployeeLastName] = useState("");
  const [employee_phone, setEmployeePhone] = useState("");
  const [employee_password, setEmployeePassword] = useState("");
  const [active_employee, setActiveEmployee] = useState(1);
  const [company_role_id, setCompanyRoleId] = useState(1);
  //usestate Errors ,success,serverEroor
  const [EmailErr, SetEmaillError] = useState("");
  const [FirstNameRequired, SetFirstNameRequired] = useState("");
  const [PasswordErr, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  // console.log(employee_first_name);
  // console.log(company_role_id)
  //variable to hold the user's token
  let loggedEmployeeToken=''
  //destructure the useauth hook and get the token
  const { employee } = useAuth();
  if(employee&&employee.employee_token){
    loggedEmployeeToken=employee.employee_token
  }

  //function to handdleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //client side validation flag
      let valid = true;
      //if employee_first_name empty
      if (!employee_first_name) {
        SetFirstNameRequired("Employee first name is required");
        valid = false;
      } else {
        SetFirstNameRequired("");
      }

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
      //if employee_password empty or less than 6
      if (!employee_password || employee_password.length < 6) {
        setPasswordError(
          "Employee password must be at least 6 characters long"
        );
        valid = false;
      } else {
        setPasswordError("");
      }
      //if the form is not valid don't submit
      if (!valid) {
        return;
      }
      // formData to be sent to server
      const formData = {
        employee_email,
        employee_first_name,
        employee_last_name,
        employee_phone,
        employee_password,
        active_employee,
        company_role_id,
      };
      //pass the formData to service
      const newEmployee = await employeeService.createEmployee(formData,loggedEmployeeToken);
      // console.log(newEmployee)
      const data = await newEmployee.json();
      console.log(data);
      if (data.error) {
        setServerError(data.error);
      } else {
        setSuccess(true);
        setServerError("");
        //redirect to  the employee pages after 2 seconds
        //for just now redirect to home page
        // setTimeout(() => {
        //   // window.location.href='/admin/employees'

        //   // window.location.href = "/";
        // }, 2000);
      }
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setServerError(resMessage);
    }
  };

  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Add a new employee</h2>
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
                          type="text"
                          name="employee_first_name"
                          value={employee_first_name}
                          placeholder="Employee first name"
                          onChange={(event) =>
                            setEmployeeFirstName(event.target.value)
                          }
                         
                        />
                         {FirstNameRequired&&(<div className="validation-error" role="alert">{FirstNameRequired}</div>)}
                      
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          value={employee_last_name}
                          onChange={(event) =>
                            setEmployeeLastName(event.target.value)
                          }
                          name="employee_last_name"
                          placeholder="Employee last name"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          value={employee_phone}
                          onChange={(event) =>
                            setEmployeePhone(event.target.value)
                          }
                          name="employee_phone"
                          placeholder="Employee phone (555-555-5555)"
                          required
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
                          required
                        >
                          <option value="1">Employee</option>
                          <option value="2">Manager</option>
                          <option value="3">Admin</option>
                        </select>
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
                          <span>Add employee</span>
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
  );
};

export default AddEmployeeForm;
