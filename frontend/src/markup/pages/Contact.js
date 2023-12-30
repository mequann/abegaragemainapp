import React from "react";

const Contact = () => {
  return (
    <div>
      {/* <!--Contact Section--> */}
      <div className="contact-section p-0  m-0">
        <div className="auto-container">
          <div className="contact-title col-lg-6">
            <h2>Drop us message</h2>
            <div className="text">
              Praising pain was born and I will give you a complete account of
              the system, and{" "}
            </div>
          </div>
          <div className="row clearfix">
            <div className="map-section custom-pading">
              <div className="contact-map">
              <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.6588910964867!2d38.74644407737859!3d9.043587452859292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8fe5a0d6bcc3%3A0xe2f9b720f5391a63!2sKingston%20Hotel!5e0!3m2!1sen!2set!4v1703856344822!5m2!1sen!2set"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
              </div>
            </div>

            {/* <!--Info Column--> */}
            <div className="info-column col-lg-6 m-0 p-0 custom-pading">
              <div className="inner-column">
                <h4>Our Address</h4>
                <div className="text">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service.
                </div>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    <span>Address:</span> 54B, Tailstoi Town 5238 MT, La city,
                    IA 5224
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>email:</span> contact@buildtruck.com
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <span>phone:</span> 1800 456 7890 / 1254 897 3654
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Contact Section--> */}

      <section className="cta-section">
        <div className="auto-container">
            <div className="wrapper-box">
                <div className="left-column">
                    <h3>Schedule Your Appointment Today</h3>
                    <div className="text">Your Automotive Repair & Maintenance Service Specialist</div>
                </div>
                <div className="right-column">
                    <div className="phone">1800.456.7890</div>
                    <div className="btn"><a href="#" className="theme-btn btn-style-one"><span>Contact Us</span><i className="flaticon-right"></i></a></div>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
};

export default Contact;
