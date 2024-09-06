
import React from 'react';
import logo from '../assets/logo.png';
import headerImage from '../assets/header.png';  // Assuming header.png is a different image
import class1 from '../assets/class1.jpg';
import class2 from '../assets/class2.jpg';
import join from '../assets/join.jpg';
import member from '../assets/member.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';

import { Link } from 'react-router-dom';

const home=() => {
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
            <section className="section__container header__container">
              <div className="header__content">
                <span className="bg__blur"></span>
                <span className="bg__blur header__blur"></span>
                <h4>BEST FITNESS IN THE TOWN</h4>
                <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
                <p>
                  Unleash your potential and embark on a journey towards a stronger,
                  fitter, and more confident you. Sign up for Make Your Body Shape now
                  and witness the incredible transformation your body is capable of!
                </p>
                <button className="btn">Get Started</button>
              </div>
              <div className="header__image">
                <img src={headerImage} alt="header" />
              </div>
            </section>
      
            <section className="section__container explore__container">
              <div className="explore__header">
                <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
                <div className="explore__nav">
                  <span><i className="ri-arrow-left-line"></i></span>
                  <span><i className="ri-arrow-right-line"></i></span>
                </div>
              </div>
              <div className="explore__grid">
                <div className="explore__card">
                  <span><i className="ri-boxing-fill"></i></span>
                  <h4>Strength</h4>
                  <p>
                    Embrace the essence of strength as we delve into its various
                    dimensions: physical, mental, and emotional.
                  </p>
                  <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
                </div>
                <div className="explore__card">
                  <span><i className="ri-heart-pulse-fill"></i></span>
                  <h4>Physical Fitness</h4>
                  <p>
                    It encompasses a range of activities that improve health, strength,
                    flexibility, and overall well-being.
                  </p>
                  <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
                </div>
                <div className="explore__card">
                  <span><i className="ri-run-line"></i></span>
                  <h4>Fat Loss</h4>
                  <p>
                    Through a combination of workout routines and expert guidance, we will
                    empower you to reach your goals.
                  </p>
                  <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
                </div>
                <div className="explore__card">
                  <span><i className="ri-shopping-basket-fill"></i></span>
                  <h4>Weight Gain</h4>
                  <p>
                    Designed for individuals, our program offers an effective approach
                    to gaining weight in a sustainable manner.
                  </p>
                  <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </section>
      
            <section className="section__container class__container">
              <div className="class__image">
                <span className="bg__blur"></span>
                <img src={class1} alt="class1" className="class__img-1" />
                <img src={class2} alt="class2" className="class__img-2" />
              </div>
              <div className="class__content">
                <h2 className="section__header">THE CLASS YOU WILL GET HERE</h2>
                <p>
                  Led by our team of expert and motivational instructors, The class You
                  Will Get Here is a high-energy, results-driven session that combines
                  a perfect blend of cardio, strength training, and functional
                  exercises. Each class is carefully curated to keep you engaged and
                  challenged, ensuring you never hit a plateau in your fitness
                  endeavors.
                </p>
                <Link to ="/BookAclass">
                <button className="btn"  >Book A Class</button>
                </Link>
                
              </div>
            </section>
      
            <section className="section__container join__container">
              <h2 className="section__header">WHY JOIN US?</h2>
              <p className="section__subheader">
                Our diverse membership base creates a friendly and supportive
                atmosphere, where you can make friends and stay motivated.
              </p>
              <div className="join__image">
                <img src={join} alt="join" />
                <div className="join__grid">
                  <div className="join__card">
                    <span><i className="ri-user-star-fill"></i></span>
                    <div className="join__card__content">
                      <h4>Personal Trainer</h4>
                      <p>Unlock your potential with our expert Personal Trainers.</p>
                    </div>
                  </div>
                  <div className="join__card">
                    <span><i className="ri-vidicon-fill"></i></span>
                    <div className="join__card__content">
                      <h4>Practice Sessions</h4>
                      <p>Elevate your fitness with practice sessions.</p>
                    </div>
                  </div>
                  <div className="join__card">
                    <span><i className="ri-building-line"></i></span>
                    <div className="join__card__content">
                      <h4>Good Management</h4>
                      <p>Supportive management, for your fitness success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section__container price__container">
              <h2 className="section__header">OUR PRICING PLAN</h2>
              <p className="section__subheader">
                Our pricing plan comes with various membership tiers, each tailored to
                cater to different preferences and fitness aspirations.
              </p>
              <div className="price__grid">
                <div className="price__card">
                  <div className="price__card__content">
                    <h4>Basic Plan</h4>
                    <h3>$16</h3>
                    <p><i className="ri-checkbox-circle-line"></i> Smart workout plan</p>
                    <p><i className="ri-checkbox-circle-line"></i> At home workouts</p>
                  </div>
                  <button className="btn price__btn">Get Started</button>
                </div>
                <div className="price__card price__card--highlighted">
                  <div className="price__card__content">
                    <h4>Premium Plan</h4>
                    <h3>$35</h3>
                    <p><i className="ri-checkbox-circle-line"></i> Full access to all features</p>
                    <p><i className="ri-checkbox-circle-line"></i> Personalized training plan</p>
                  </div>
                  <button className="btn price__btn">Get Started</button>
                </div>
                <div className="price__card">
                  <div className="price__card__content">
                    <h4>Advanced Plan</h4>
                    <h3>$80</h3>
                    <p><i className="ri-checkbox-circle-line"></i> One-on-one coaching</p>
                    <p><i className="ri-checkbox-circle-line"></i> Monthly body composition reports</p>
                  </div>
                  <button className="btn price__btn">Get Started</button>
                </div>
              </div>
            </section>
      
            <section className="section__container member__container">
              <div className="member__content">
                <h2 className="section__header">BECOME A MEMBER</h2>
                <p>
                  Join our vibrant fitness Blogs today and unlock a world of
                  opportunities to transform your body, mind, and spirit. Whether you
                  are a beginner or a seasoned athlete, we offer tailored memberships
                  to suit your needs.
                </p>
                <br/>
                <br/>
                <button className="btn">Join Now</button>
              </div>
              <br/>
              <div className="member__image">
                <img src={member} alt="member"style={{height:'400px', width:'400px', borderRadius:'20px'}} />
                <img src={member2} alt="member2"style={{height:'400px', width:'400px', borderRadius:'20px',marginLeft:'450px', marginTop:'-400px'}} />
                <img src={member3} alt="member3"style={{height:'400px', width:'350px', borderRadius:'20px',marginLeft:'900px', marginTop:'-400px'}} />
                <span className="bg__blur"></span>
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
    <div className="footer__bar">
      Copyright © 2023 Web Design Mastery. All rights reserved.
    </div>
          </div>

    )  
    
};
export default home;