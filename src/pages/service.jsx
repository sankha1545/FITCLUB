import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import service1 from '../assets/service.png'
import '../style.css'
import '../App.css';
import service0 from '../assets/service (1).jpg'
import service2 from '../assets/service (2).jpg'
import service3 from '../assets/service (3).jpg'
import service4 from '../assets/service (4).jpg'

 function service() {
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
            <hr style={{width:"1450px", marginLeft:"30px"}}/>
            <br />
            <div className='header' style={{}}>
            <br />
           

            <h1 style={{fontSize:"100px", color:"white",marginLeft:"150px"}}>No Pain</h1>
            <h3 style={{fontSize:"80px", color:"gold",marginLeft:"300px"}}>No Gain</h3>
            <span style={{color:"#f9ac54",marginLeft:"150px"}}><b>"</b> Push harder than yesterday if you want a different tomorrow <b>"</b></span>
            <br />
            <br />
            <p style={{color:"white",width:"450px",marginLeft:"155px"}}>Every journey begins with a single step, and the journey to a stronger, healthier you is no different. Whether you’re just starting out or a seasoned gym-goer, embracing fitness is about more than just physical transformation—it’s a testament to your determination, discipline, and desire to become the best version of yourself.</p>
            </div>
            <div className='service-img' style={{}}>
            <img src={service1} alt="service1" style={{height:"650px",width:"600px",marginLeft:"650px",marginTop:"-450px"}} />
            </div>
            <section className="swiper mySwiper">

<div className="swiper-wrapper">

  <div className="card swiper-slide">
    <div className="card__image">
    <img src={service2} alt="service2" />
    </div>

    <div className="card__content">
      <span className="card__title">Zumba</span>
      <span className="card__name">Vanessa Martinez</span>
      <p className="card__text">At FITCLUB, we're dedicated to helping you achieve your fitness goals while having fun. We offer a variety of classNamees to suit all fitness levels and preferences.</p>
      <button className="card__btn">View More</button>
      <p className="text"></p>
    </div>
  </div>

  <div className="card swiper-slide">
    <div className="card__image">
    <img src={service0} alt="service0" />
    </div>

    <div className="card__content">
      <span className="card__title">Yoga</span>
      <span className="card__name">Sarah Bowen</span>
      <p className="card__text">At FITCLUB, we are committed to helping you achieve a balanced and healthy lifestyle. Our gym offers a wide range of fitness classNamees.</p>
      <button className="card__btn">View More</button>
    </div>
  </div>

  <div className="card swiper-slide">
    <div className="card__image">
      <img src={service3} alt="service3" />
    </div>

    <div className="card__content">
      <span className="card__title">Personal Training</span>
      <span className="card__name">David Murphy</span>
      <p className="card__text">At FITCLUB, we believe in personalized fitness journeys that cater to your unique needs and goals.</p>
      <button className="card__btn">View More</button>
    </div>
  </div>

  <div className="card swiper-slide">
    <div className="card__image">
    <img src={service4} alt="service4" />
    </div>

    <div className="card__content">
      <span className="card__title">Group fitness class</span>
      <span className="card__name">Kelsey West</span>
      <p className="card__text">At FITCLUB, we are dedicated to providing diverse and dynamic fitness options to help you achieve your health and wellness goals. </p>
      <button className="card__btn">View More</button>
    </div>
  </div>

</div>
</section>
          








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

        </div>
    )
}
export default service;