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



function App() {
  return (
    <div className="App">
      {/* <h1> Abe garage main app</h1> */}
      <Header />
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/admin/add-employees" element={<AddEmployees/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
