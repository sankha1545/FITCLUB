import React from 'react';
import logo from '../assets/logo.png';
import bannerImg from '../assets/bannerImg.png';
import { Link } from 'react-router-dom';
import bgimg from '../assets/bg-img.jpg';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog2.jpg'

import '../App.css'
 function Blogs() {
    return (
        <div>
              <nav>
              <div className="nav__logo">
                <a href="#"><img src={logo} alt="logo" /></a>
              </div>
              <ul className="nav__links">
              <li className="link" ><Link to ='/'>Home</Link></li>
                <li className="link"><Link to ='/service'>Service</Link></li>
                <li className="link"><Link to ='/about'>About</Link></li>
                <li className="link"><Link to ='/Blogs'>Blogs</Link></li>
                <li className="link" ><Link to ='/contact'>Contact</Link></li>
              </ul>
              <button className="btn">Join Now</button>
            </nav>
            <section className="banner">
              <div className='banner-1'>
              <img src={bannerImg} alt="bannerImg" />
              </div>
              <hr />
              <hr />
            </section>
            <br />
            <section className="blogs_section">
             
             <h2 style={{color:"white", fontFamily:"cursive", fontSize:"35px",marginLeft:"680px"}}>B l o g s</h2>
             <br />
             <div className="blog_section1" style={{display:"block"}} >
             <img src={bgimg} alt="bgimg" style={{width:"450px",marginLeft:"20px",height:"300px",borderRadius:"30px",float:'left'}} /> 
             <br />
             <h3 style={{color:"gold",marginLeft:"500px",fontSize:"25px",fontFamily:"sans-serif"}}>Energize, Recover, Repeat: Expert Tips on Pre & Post Workout Meal Nutrition </h3>
             <br/>
             <p style={{color:"white",fontStyle:"oblique",marginLeft:"500px",width:"700px"}} >
             When it comes to achieving fitness goals, the right nutrition can make all the difference. Whether you're aiming to build muscle, increase endurance, or simply stay healthy, what you eat before and after your workout plays a crucial role in your performance and recovery. Here’s a guide to help you fuel your body effectively. <br /><br />While pre and post-workout nutrition are important, overall diet consistency matters too. Ensure you're eating balanced meals throughout the day, rich in whole foods, lean proteins, healthy fats, and plenty of vegetables. This foundation supports your body’s needs, enhances performance, and speeds up recovery.
             </p>
             </div>
             <br />
             <br />
             <div className="blog_section1" style={{display:"block"}} >
             <img src={blog1} alt="blog1" style={{width:"450px",marginLeft:"20px",height:"300px",borderRadius:"30px",float:'left'}} /> 
             <br />
             <h3 style={{color:"gold",marginLeft:"500px",fontSize:"25px",fontFamily:"sans-serif"}}>The Benefits of Stretching: Preventing Injuries and Enhancing Flexibility  </h3>
             <br/>
             <p style={{color:"white",fontStyle:"oblique",marginLeft:"500px",width:"700px"}} >
             A well-structured full-body workout routine is one of the most effective ways to build strength, enhance endurance, and maintain overall fitness. However, the order in which you perform your exercises can significantly impact the effectiveness of your workout. Here’s a guide to the ideal sequence for a full-body workout that ensures you get the most out of your time at the gym.<br /><br />The key to an effective full-body workout is following a logical sequence: warm-up, compound movements, isolation exercises, core work, cool-down, and recovery. 
             </p>
             </div>
             <br />
             <br />
            <br />
             
             <div className="blog_section1" style={{display:"block"}} >
             <img src={blog2} alt="blog2" style={{width:"450px",marginLeft:"20px",height:"300px",borderRadius:"30px",float:'left'}} /> 
             <br />
             <h3 style={{color:"gold",marginLeft:"500px",fontSize:"25px",fontFamily:"sans-serif"}}>The Ideal Sequence for a Full-Body Workout Routine </h3>
             <br/>
             <p style={{color:"white",fontStyle:"oblique",marginLeft:"500px",width:"700px"}} >
             When it comes to achieving fitness goals, the right nutrition can make all the difference. Whether you're aiming to build muscle, increase endurance, or simply stay healthy, what you eat before and after your workout plays a crucial role in your performance and recovery. Here’s a guide to help you fuel your body effectively. <br /><br />While pre and post-workout nutrition are important, overall diet consistency matters too. Ensure you're eating balanced meals throughout the day, rich in whole foods, lean proteins, healthy fats, and plenty of vegetables. This foundation supports your body’s needs, enhances performance, and speeds up recovery.
             </p>
             </div>
            </section>
            <br />
            <hr style={{width:"1450px", marginLeft:"30px"}}/>
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
    )
}
export default Blogs;