//import route ,routes from react-dom router
import { Route, Routes } from "react-router-dom";
//import pages
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import About from "./markup/pages/About";
import Contact from "./markup/pages/Contact";
import Services from "./markup/pages/Services";
import NotFound from "./markup/pages/404";
import AddEmployees from "./markup/pages/admin/AddEmployees";
import Customers from "./markup/pages/admin/Customers";
import Employees from "./markup/pages/admin/Employess";
import Orders from "./markup/pages/admin//Orders";
import Unauthorized from "./markup/pages/Unauthorized";
//import css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";
import "./assets/template_assets/css/custom.css";
//import custom.css
import "./assets/styles/custom.css";
//import components
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";

function App() {
  return (
    <div className="App">
      {/* <h1> Abe garage main app</h1> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/*add orders route */}
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />
        {/*add customers route */}
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        {/*add employees route */}

        <Route
          path="/admin/employees"
          element={
           <Employees />}
          />
          {/* this is to impliment the authorization in an other way  at the component that is why I comenent the protected route*/}
        {/* <Route
          path="/admin/employees"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Employees />
            </PrivateAuthRoute>
          }
        /> */}

        {/*
           -Orders (/admin/orders) - Can be accessed by all employees  
           - Customers (/admin/customers) - Can be accessed by managers and admins 
          - Add employee (/admin/add-employee) - Can be accessed only by admins 
        */}
        <Route
          path="/admin/add-employees"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployees />
            </PrivateAuthRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
