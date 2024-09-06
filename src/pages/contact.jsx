import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../App.css';
import Contact from '../assets/contact.jpg';
import '../load.css'

function Program() {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <ul className="nav__links">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/service">Service</Link></li>
          <li className="link"><Link to="/about">About</Link></li>
          <li className="link"><Link to="/blogs">Blogs</Link></li>
          <li className="link"><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="btn">Join Now</button>
      </nav>

      <section className="contact_section">
        <div className="contact-img">
          <img src={Contact} alt="Contact" style={{ height: "500px", width: "1500px", borderRadius: "30px", marginLeft: "10px", border: "5px solid #fff" }} />
        </div>
        <div className='container'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.673023024588!2d87.86479504588037!3d23.23696356313453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8494f21c47a01%3A0x62ec5dd7e73b8062!2sDYNAMO%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1725613801742!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{  borderRadius:"30px",border: "5px solid white",marginTop:"50px",marginLeft:"10px"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>
          
        <br/>
        <div className="contact-details" style={{float:"right", width: "33.33%",
  padding: "5px",marginTop:"-450px",marginRight:"350px"}}>
  <h1 style={{color:"white", fontSize:"50px",marginLeft:"50px"}}>Contact Us</h1>
  <br />
        <ul style={{color:"white"}}>
          
          <li>
              <i className ="fas fa-map"></i>
              <p><b>Address</b> : 4,No Ichlabad , P.O. Srepalli , Burdwan-713103</p>
          </li>
          <br />
          <br />
          <li>
              <i className="fas fa-envelope"></i>
              <p><b>E-mail</b> : sankhasubhradas1@gmail.com</p>
          </li>
          <br />
          <br />
          <li>
              <i className="fas fa-phone-alt"></i>
              <p><b>Phone Number</b> : +91 8597786209</p>
          </li>
          <br />
          <br />
          <li>
              <i className="fas fa-clock"></i>
              <p><b>Timings</b> : Monday - Saturday ( 9:00 a.m - 9:00 p.m)</p>
          </li>
      </ul>
    </div>
    
        </div>
      </section>
      <br />
      <br />

      <hr style={{ width: "1450px", marginLeft: "30px" }} />
      <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
          <div className="footer__logo"><img src={logo} alt="logo" /></div>
          <p>
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer together!
          </p>
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">Business</a>
          <a href="#">Franchise</a>
          <a href="#">Partnership</a>
          <a href="#">Network</a>
        </div>
        <div className="footer__col">
          <h4>About Us</h4>
          <a href="#">Blogs</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">BMI Calculator</a>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
     
    </div>
    
  );
}

export default Program;
