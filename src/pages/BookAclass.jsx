import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const BookAclass = () => {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
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
      <br/>
      
      <section className="book_section">
      <form action="#">
            <div className="form first" style={{marginLeft:"500px", backgroundColor:"transparent",width:"450px",height:"750px",padding:"20px",borderRadius:'30px',borderColor:"white" ,boxShadow:" 10px 10px 10px grey",borderWidth:"2.5em"}}>
                <div className="details personal" style={{marginLeft:"10px"}}>
                    <span className="title" ><h1 style={{marginLeft:"100px" , color:"white"}}><b>Personal Details</b></h1></span>
                    <br />
                    <br />
                    <div className="fields"  >
                        <div className="input-field" >
                           <label htmlFor ="name" style={{color:"white"}}>Name
                           <br />
                           <br />
                            <input type="text" placeholder=" Enter your name" required style={{boxSizing:"border-box",width:"385px",height:"40px",border:"none",borderRadius:"10px",borderColor:"grey"}}/>
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="input-field" style={{color:"white"}}>
                        <label htmlFor ="name"> Date of Birth
                        <br />
                        <br />
                            <input type="date" placeholder=" Enter birth date" required style={{boxSizing:"border-box",width:"385px",height:"40px",borderRadius:"10px",border:"none"}}/>
                        </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="input-field" style={{color:"white"}}>
                        <label htmlFor ="name"> E-Mail
                        <br />
                           <br />
                          <input type="email" placeholder=" Enter your email" required style={{width:"385px",height:"40px",borderRadius:"10px",boxShadow:"black",border:"none"}} />
                          <i className='bx bxs-envelope'></i>
                          </label>
                      </div>
                      <br/>
                        
                        <br/>
                        <div className="input-field" style={{color:"white"}}>
                        <label htmlFor ="name"> Phone-Number
                        <br />
                        <br />
                         <input type="tel" placeholder="Enter mobile number" required style={{boxSizing:"border-box",width:"385px",height:"40px",borderRadius:"10px",borderColor:"grey",border:"none"}}/>
                        </label>
                        </div>
                        <br />
                        <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label htmlFor="coding" style={{color:"white"}}>I have agreed to the <Link to ="">Terms & Conditions</Link></label>
  </div>
  <br />
  <div className="submit-btn" >
  <input type="submit" value="Send Request" style={{width:"100px",borderRadius:"50px",cursor:"pointer",height:"35px",backgroundColor:"#f9ac54",border:"none",color:"white"}}/>
  </div>
                        </div>
                        </div>
                        </div>
                        </form>

      </section>
      <br />
      <hr className="custom-hr" />
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
};

export default BookAclass;
