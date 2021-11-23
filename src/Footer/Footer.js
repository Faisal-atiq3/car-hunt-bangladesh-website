import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>CAR HUNT BANGLADESH</h1>
                <div className="icons-container d-flex text-center ">
                  </div>
                <p className="mt-2 ">
                  
                        18/F, Bir Uttam Qazi Nuruzzaman Sarak, <br/>West Panthapath,Dhaka 1205
                  
                </p>
                <p className="mt-1 ">
                  
                        Phone :+880 1788452685
                </p>
                <p className="mt-1 ">
                  
                Email : info@carhuntbangladesh.com
                </p>

                <p className="mt-5">
                  <small>Copyright © 2021 Car hunt bangladesh Ltd.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <h1><li className="footer-menu">Home</li></h1>
                  <li className="footer-menu">Services</li>
                  
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                
                <ul>
                  <li className="footer-menu">Products</li>
                  <li className="footer-menu">Media</li>
                  
                  <li className="footer-menu">Online Shop</li>
                  <li className="footer-menu"> Cutomer Care</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="right-footer-container">
                <h3>Contuct US</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Your Message"
                />
                <div className="mt-2">
                        <button className="btn btn-primary">Submit</button>
                </div>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                    
                  
                  
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  
                  <div>
                    <p>
                    CAR HUNT BANGLADESH Specialized is a Centre of excellence where advanced services <br /> are rendered by a group of experienced renowned professors and consultants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;