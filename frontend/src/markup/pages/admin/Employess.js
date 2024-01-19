import React from 'react'
//import the useauth hook
import { useAuth } from './../../../Context/AuthContext';
//import the loginform
import LoginForm from '../../components/admin/LoginForm/LoginForm';
//import adminMenu
import AdminMenu from '../../components/admin/AdminMenu/AdminMenu';
//import employeelist
import EmployeeList from '../../components/admin/EmployeeList/EmployeeList'

const Employess = () => {
  const {isLoggedIn,isAdmin} = useAuth();
  if(isLoggedIn){
    if(isAdmin)
    {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">

                <AdminMenu />

              </div>
              <div className="col-md-9 admin-right-sied">

                <EmployeeList />

              </div>
            </div>

          </div>
      
        </div>
      )}
    else{
      return (
        <div><h1>you are not authorized</h1></div>
      )
    }
  }
  else{
    return (
      <LoginForm/>
    )
  }


}

export default Employess