import React from 'react'
//import topBanner and BottomBanner
import TopBanner from '../components/Topbanner/TopBanner';
import BottomBanner from '../components/BottomBanner/BottomBanner';
import img3 from '../../assets/template_assets/images/resource/image-3.jpg'






const Home = () => {
  return (
    <div>
<TopBanner props={'Tune up your carthe next level'}
props1={'Home'}/>
 {/* <!-- Services Section --> */}
    <section class="services-section">
        <div class="auto-container">
            <div class="sec-title style-two">
                <h2>Our Featured Services</h2>
                <div class="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </div>
            </div>
            <div class="row">
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Performance Upgrade</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-power"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Transmission Services</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-gearbox"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Break Repair & Service</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-brake-disc"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Engine Service & Repair</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-car-engine"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Tyre & Wheels</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-tire"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Denting & Painting</h2>
                        <a href="#" class="read-more">read more  +</a>
                        <div class="icon"><span class="flaticon-spray-gun"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section class="features-section">
        <div class="auto-container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="inner-container">
                        <h2>Quality Service And <br/> Customer Satisfaction !!</h2>
                        <div class="text">We utilize the most recent symptomatic gear to ensure your vehicle is fixed or adjusted appropriately and in an opportune manner. We are an individual from Professional Auto Service, a first class execution arrange, where free assistance offices share shared objectives of being world-class car administration focuses.</div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="image"><img src={img3} alt=""/></div>
                </div>
            </div>
        </div>
    </section>
<BottomBanner/>



      </div>
  )
}

export default Home