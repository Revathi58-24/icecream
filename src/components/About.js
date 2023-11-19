import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';

const About = () => {
  return (
    <>
      <Navbar/>
      <div >
        <div className="table-responsive">
        <img
        src="https://img.freepik.com/premium-photo/scoop-pistachio-ice-cream-with-pistachios-isolated-with-moon-white-background_534373-8854.jpg?w=740"
        alt="about"
        style={{ width: '1370px', height: '800px' , margin: '0', padding: '0'}}
      />
      <div className="overlay" style={{ position: 'absolute', top: '75%', left: '35%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <h1 style={{fontFamily:'sans-serif',fontSize:'50px',textAlign:'center'}}><b>OUR STORY</b></h1>
      <br/>
      <p style={{fontSize:'20px'}}><b>The Classic Treats story began in 2002 when industry veterans having<br/> 20-25 years of experiencein the Ice Cream Industry decided to quit <br/>their MNC jobsand nurture a brand with their passion.<br/> They saw a market opportunity which no one else did. <br/>
      They believed that flavors had feelings and <br/>that taste buds can party.
     <br/>And so began the Classic Treats journey <br/>in a modest 2000 square foot factory. <br/>But fueled by the founder’s passion and expertise,<br/> Classic Treats quickly evolved to become <br/>one of the top Ice Cream brands in India.
    </b></p>
      </div>
      <br/>
          <br/><br/><br/>
          <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="https://images.pexels.com/photos/1772114/pexels-photo-1772114.jpeg?auto=compress&cs=tinysrgb&w=600" style={{borderRadius:'28px'}}alt='p1' width="300px" height="420px"/>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div>
            <h1 >INFRASTRUCTURE</h1>
            <p><b>Classic Treats manufactures and supplies 150+ products across a<br/>
              variety of cups, cones, sticks, tubs and other novelties,<br/> with over 30 flavours.
              All made in ultra-modern<br/> facilities built to international standards.<br/>
              The company has state-of-the-art manufacturing<br/>
              facilities and distribution hub in Karnataka,<br/>
              spread over 2 lakh square feet and has a production<br/>
              capacity of 1.4 lakh litres per day. The company also<br/>
              has one of the largest candy and cone making <br/>capacity in India.
              The entire manufacturing process is <br/>ISO compliant (ISO-22000- 2018 (FSMS)).
              The facilities are<br/> supervised every day by an expert team<br/>
              of Dairy Technologists, Food Technologists and Microbiologists.</b></p>
           </div></div>
    </div><br/><br/>
          <div className="row">
        <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <div>
            <h1 >VALUES</h1>
            <p><b>At Dairy Day, our fundamental values can be summarized in <br/>
            one word – ‘Goodness’. Goodness in our products, goodness<br/>
             towards our customers, and goodness in the way we deal with <br/>
             all stakeholders – from our factory team to office team<br/>
             to distributors, dealers and business associates.</b></p>
           </div></div>
        <div className="col-lg-5">
            <img src="https://cdn.pixabay.com/photo/2022/05/22/13/36/raspberries-7213407_960_720.jpg" style={{borderRadius:'28px'}}alt='p1' width="300px" height="420px"/>
        </div>
    </div><br/><br/><br/>
          <center>
            <table className="bg-image" border="1px" width="700" height="400">
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <h1 style={{fontFamily:'sans-serif',fontSize:'30px',textAlign:'center'}}><b>GROWING BY THE DAY</b></h1>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'center',fontSize:'18px' }}>
                   <p><b>Classic Treats takes pride in enjoying a very <br/>special place in the hearts of millions
                    of<br/> Ice Cream lovers. Today, Classic Treats <br/>is available across most of the cities and towns<br/>
                    in South India and supplies its products through<br/> a network of more than 30,000+ retailers.<br/>
                    The brand is also sought after in modern<br/> trade, five star and luxury hotels.
                    </b> </p>    </td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
          </center>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
