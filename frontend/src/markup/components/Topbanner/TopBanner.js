import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import banner1 from '../../../assets/images/custom/banner/banner1.jpg';
import tire from '../../../assets/images/custom/misc/tire.png';
import vban1 from '../../../assets/images/custom/misc/vban1.jpg';
import vban2 from '../../../assets/images/custom/misc/vban2.jpg';

const TopBanner = ({props,props1}) => {
    const [offsetY,setOffestY]=useState(0)
    const handdlescroll=()=>setOffestY(window.pageYOffset)
    useEffect(()=>{
        window.addEventListener('scroll',handdlescroll)
        return ()=>window.removeEventListener('scroll',handdlescroll)
    },[])
  return (
    <ParallaxProvider>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: `url(${banner1})` }}>
        <div className="auto-container">
          <h2>{props}</h2>
          <ul className="page-breadcrumb">
            <li><a href="index.html">home</a></li>
            <li>{props1}</li>
          </ul>
        </div>
        <Parallax x={[200]}>
          <h1>Car Repairing</h1>
        </Parallax>
      </section>

      {/* About Section Three */}
      <section className="about-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                <h2>We are highly skilled mechanics <br /> for your car repair</h2>
                <div className="text">
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <p>Capitalize on low hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User-generated content in real-time will have multiple.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image"><img src={tire} alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-box">
                <img src={vban1} alt="" />
                <img src={vban2} alt="" />
                <div className="year-experience" 
                style={{
              transform: `translateY(${offsetY *( 0.123)}px)`, // Adjust the multiplier as needed
             position: 'absolute'
               }}><strong>17</strong> years <br /> Experience </div>
              </div>
            </div>
            <div className="col-lg-7 pl-lg-5">
              <div className="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div className="text">
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <p>Capitalize on low hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
                </div>
                <div className="link-btn mt-40"><a href="about.html" className="theme-btn btn-style-one style-two"><span>About Us <i className="flaticon-right"></i></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default TopBanner;