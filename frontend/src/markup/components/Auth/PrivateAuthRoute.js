import React ,{useEffect,useState}from 'react'
//import Navigate hook from react-router
import { Navigate } from "react-router";
//import the employeeAuthHeader function created to handdle reading from localstorage
import employeeAuthHeader from '../../../util/auth.header';



const PrivateAuthRoute = ({roles,children}) => {
    //create isLogged , isAutherized , isChecked state
    const [isChecked,setIsChecked]=useState(false)
    const [isLogged,setIsLogged]=useState(false)
    const [isAutherized,setIsAutherized]=useState(false)
//useeffect 
useEffect(()=>{
    // retrieve the  loggedin user from the local storage
    const loggedInEmployee=employeeAuthHeader()
    loggedInEmployee.then(response=>{
    
        if(response.employee_token){
            //if here the user is loggedin
            setIsLogged(true)
        }
        if(roles && roles.length>0 && roles.includes(response.employee_role)){
            
            //if ,here the user is logged in and have the autorization to access the route
            setIsAutherized(true)

        }
        //if there the user is checked
        setIsChecked(true)
    })


},[roles])

//if checked
if(isChecked){
  //if not logged in
if(!isLogged){
    return <Navigate to="/login"/>
}
//if not authorized
if(!isAutherized){
    return <Navigate to="/unauthorized"/>
}
}

  return (
 children
  )
}

export default PrivateAuthRoute
