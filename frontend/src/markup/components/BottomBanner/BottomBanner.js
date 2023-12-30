import React, { useEffect, useState } from 'react'
//import banner1
import banner1 from '../../../assets/images/custom/banner/banner1.jpg'
//import vban2
import vban2 from '../../../assets/images/custom/misc/vban2.jpg'


import {ParallaxProvider, Parallax} from 'react-scroll-parallax';



const BottomBanner = () => {
  const [offsetY,setOffestY]=useState(0)
  const handdlescroll=()=>setOffestY(window.pageYOffset)
  useEffect(()=>{
      window.addEventListener('scroll',handdlescroll)
      return ()=>window.removeEventListener('scroll',handdlescroll)
  },[])
  return (
    <ParallaxProvider>
    <div>   
       <section className="why-choose-us">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="sec-title style-two">
            <h2>Why Choose Us</h2>
            <div className="text">
              Bring to the table win-win survival strategies to ensure
              proactive domination. At the end of the day, going forward,
              a new normal that has evolved from generation heading
              towards.
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-mechanic"></span>
            </div>
            <h4>Certified Expert Mechanics</h4>
          </div>
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-wrench"></span>
            </div>
            <h4>Fast And Quality Service</h4>
          </div>
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-price-tag-1"></span>
            </div>
            <h4>Best Prices in Town</h4>
          </div>
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-trophy"></span>
            </div>
            <h4>Awarded Workshop</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="sec-title style-two">
            <h2>Addtional Services</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="image">
                <img src={vban2} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <ul className="list">
                <li>General Auto Repair & Maintenance</li>
                <li>Transmission Repair & Replacement</li>
                <li>Tire Repair and Replacement</li>
                <li>State Emissions Inspection</li>
                <li>Break Job / Break Services</li>
                <li>Electrical Diagnostics</li>
                <li>Fuel System Repairs</li>
                <li>Starting and Charging Repair</li>
                <li>Steering and Suspension Work</li>
                <li>Emission Repair Facility</li>
                <li>Wheel Alignment</li>
                <li>Computer Diagaonstic Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="video-section">
  {/* <Parallax y={[30, -30]}> */}
        <div data-parallax='{"y": 50}' class="sec-bg" style={{backgroundImage: `url(${banner1})`,
        transform: `translateY(${offsetY *( 0.0123)}px)`}}></div>
        {/* </Parallax> */}
        <div class="auto-container">
            <h5>Working since 1992</h5>
            <h2>We are leader <br/> in Car Mechanical Work</h2>
            <div class="video-box">
                <div class="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="overlay-link lightbox-image video-fancybox ripple"><i class="flaticon-play"></i></a></div>
                <div class="text">Watch intro video <br/> about us</div>
            </div>
        </div>
    </section>
    <section class="cta-section">
        <div class="auto-container">
            <div class="wrapper-box">
                <div class="left-column">
                    <h3>Schedule Your Appointment Today</h3>
                    <div class="text">Your Automotive Repair & Maintenance Service Specialist</div>
                </div>
                <div class="right-column">
                    <div class="phone">1800.456.7890</div>
                    <div class="btn"><a href="#" class="theme-btn btn-style-one"><span>Appointment</span><i class="flaticon-right"></i></a></div>
                </div>
            </div>
        </div>
    </section>

    </div>
    </ParallaxProvider>
  )
}

export default BottomBanner