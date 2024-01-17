import React from 'react'
//import the useauth hook
import { useAuth } from './../../../Context/AuthContext';
//import the loginform
import LoginForm from './../../components/admin/LoginForm/LoginForm';

const Employess = () => {
  const {isLoggedIn,isAdmin} = useAuth();
  if(isLoggedIn){
    if(isAdmin)
    {
      return (
        <div><h1>Employess</h1></div>
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