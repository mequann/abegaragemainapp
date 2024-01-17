import React,{useEffect,useState,createContext, useContext} from 'react'
//import the authHeader
import authHeader from '../util/auth.header';
//create the authprovider
export const AuthContext = createContext();
//create the authprovider component
//create  custom  hook to use the context
export const useAuth= ()=>{return useContext(AuthContext)}
export function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAmin] = useState(false);
    const [employee, setEmployee] = useState(null);
    const value={isLoggedIn,isAdmin,setIsAmin,setIsLoggedIn,employee,setEmployee};
   console.log(employee)

//define useEffect function  
    useEffect(() => {
        //Retrive the login user from the localstorege
        const logedInEmployee=authHeader()

        console.log(logedInEmployee)
        logedInEmployee.then(response=>{
            console.log(response)
            if(response.employee_token){
                setIsLoggedIn(true)
                
                
            }
            console.log(response.employee_role)
            console.log(response.employee_first_name)
            //3 is the emolpyee_role for admin
            if(response.employee_role===3){
                setIsAmin(true)
            }
            //if the response is not empty set the employee
            if(response){
                setEmployee(response)
            }
        })
      }, []);
return( 
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)

}
