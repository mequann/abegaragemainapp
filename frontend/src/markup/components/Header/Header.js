import React, { useContext } from "react";
//import logo from asset/images/custom
import logo from "../../../assets/images/custom/logo.png";
//import loginservice
import loginService from "../../../services/login.service";
//import the context
import { AuthContext } from "../../../Context/AuthContext"; //it is optional and can use  the function that we create in the provider useauth
//impoprt the use auth custom hook
// import { useAuth } from './../../../Context/AuthContext';
//import link from react-router-dom
import { Link } from "react-router-dom";

const Header = () => {
  //import the context values
  const { isLoggedIn, setIsLoggedIn, employee } = useContext(AuthContext);

  console.log(employee);
  // console.log(useAuth())
  // console.log(AuthContext)
  // console.log(isLoggedIn)
  //function to handdle the logot event
  const logOut = () => {
    //call the logout function from login service
    loginService.logOut();
    //set the isloged state false
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* <!-- Main Header --> */}
      <header className="main-header header-style-one">
        {/* <!-- Header Top --> */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              {isLoggedIn ? (
                <div className="right-column">
                  <div className="phone-number pr-5">
                    {" "}
                    <strong>Welcome {employee?.employee_first_name}</strong>
                  </div>
                </div>
              ) : (
                <div className="right-column">
                  <div className="phone-number">
                    Schedule Your Appontment Today :{" "}
                    <strong>1800 456 7890</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!-- Header Upper --> */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/* <!--Logo--> */}
              <div className="logo-box">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="right-column">
                {/* <!--Nav Box--> */}
                <div className="nav-outer">
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div className="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>

                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <a href="/">Home</a>
                        </li>
                        <li className="dropdown">
                          <a href="/about">About Us</a>
                        </li>
                        <li className="dropdown">
                          <a href="/services">Services</a>
                        </li>

                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                {isLoggedIn?(<div className="link-btn">
                  <Link to="/"
                    className="theme-btn btn-style-one"
                    onClick={logOut}
                  >
                  logOut
                  </Link>
                </div>):(<div className="link-btn">
                  <Link to="/login"
                    className="theme-btn btn-style-one"
                  
                  >
                   login
                  
                  </Link>
                </div>)}
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!-- Sticky Header  --> */}
        <div className="sticky-header">
          {/* <!-- Header Upper --> */}
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                {/* <!--Logo--> */}
                <div className="logo-box">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/custom/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="right-column">
                  {/* <!--Nav Box--> */}
                  <div className="nav-outer">
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div className="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar.png" alt="" />
                    </div>

                    {/* <!-- Main Menu --> */}
                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <a href="#" className="theme-btn btn-style-one">
                      lonin{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Header Upper--> */}
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo-two.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
            {/* <!--Social Links--> */}
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
      {/* <!-- End Main Header --> */}
    </div>
  );
};

export default Header;
