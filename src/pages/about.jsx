import React from 'react';
import logo from '../assets/logo.png';
import bookaclass from '../assets/bookaclass.png';
import { Link } from 'react-router-dom';
import aboutimg from '../assets/about_img-removebg-preview.png';
import femalebodybuild from '../assets/image-removebg-preview.png'
 function about() {
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
              
            </nav>
            
            <img src={bookaclass} alt="bookaclass" style={{width:'800px', height:'800px',marginLeft:'780px', marginTop:'-20px'}} />
            <section className='about_content'>
            <div className="about_section">
            <h1 style={{marginTop:"-800px", marginLeft:"300px", color:"#fff", fontSize:"60px"}}>Welcome <br />TO </h1>
            
            <i style={{color:'yellow',fontSize:"100px",marginLeft:"450px"}}> FITCLUB</i>
            </div>
            </section>
            <p style={{width:'800px', marginLeft:'300px'}}> At FITCLUB Gym, our mission is to inspire and empower individuals to lead healthier lives by providing the best fitness services and resources. We believe that fitness is not just about the body but also about nurturing the mind and spirit. <br/><br/> Whether you are new to fitness or a seasoned athlete, FitLife Gym is the perfect place for you. Our comprehensive range of services, from group classes to personal training, is designed to cater to your unique needs and help you reach your full potential.<br/><br/>At FIT CLUB, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul.<br/>We guarantee the highest quality equipment and training programs available, an expert staff, special amenities that are often not found in other health clubs, attentive service and truly sophisticated surroundings. <br/><br/> Our every Fitness training center is committed to being a unique Fitness training center in india.

            <br/>We believe in being different. Not merely for the sake of being dissimilar, but different by being the best in the fitness industry. We set out with one simple and honest goal in mind; to be sensitive to our memberâ€™s needs and fitness requirements. Our ideology is to provide our members with the best fitness technologies and services that no others can provide. We listen, we are sensitive to your needs, and most importantly, we thus know what you, as a gym-goer, want.

            <br/><br/>Welcome to FIT CLUB, the latest and modern fitness clubs in New Delhi India Located at Pitampura, Rajouri Garden, Patel Nagar, Vikas Puri, Janak Puri, Model Town, Dayanand Vihar, Punjabi Bagh, Malviya Nagar and Paschim Vihar.</p>

           
            <button className="btn" style={{marginLeft:'300px',marginTop:'50px'}}>Join Now</button>
            <br />
            <br />
            <hr style={{width:"1450px", marginLeft:"30px"}}/>
            <section className='about_content2'>
            <br/>
            <div className='about_content2_2'>
            <h3 style={{color:"white", fontSize:"50px", marginLeft:"600px",}}>Welcome to the family</h3>
            <iframe width="420" height="315" style={{borderRadius:"20px", marginLeft:"30px", fontFamily:"sans-serif"}}
src="https://www.youtube.com/embed/Oqw32w49KD0?si=Vb3bThKr35H1CswF">
</iframe>
<p style={{color:"white", width:"500px",marginLeft:"600px",position:"relative", marginTop:"-200px"}}>There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. <br /><br /> There is no one type. There is no one reason. There is no one way.

What we are is a diverse Blogs; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.

Crunch. No Judgments.</p>
</div>
            </section>
            
            
            
            <br />
            <br />
            <hr style={{width:"1450px", marginLeft:"30px"}}/>
            <section className='about_content3'>
            
            <img src={aboutimg} alt= "aboutimg" style={{height:"580px",width:"500px",marginLeft:"1050px"}}></img>
            <img src={femalebodybuild} alt= "femalebodybuild" style={{height:"580px",width:"600px",marginTop:"-580px"}}></img>
            <div className='container' style={{marginTop:"-500px"}}>
            <h2 style={{fontSize:"60px", color:"white", marginLeft:"550px", top:"900px"}}>Why we do? </h2>
            <h3 style={{fontSize:"40px", color:"white",marginLeft:"550px"}}>what we do?</h3>
            <br />
            <iframe width="420" height="315" style={{borderRadius:"20px", marginLeft:"550px", fontFamily:"sans-serif"}}
src="https://www.youtube.com/embed/n-ZU4hMQ5ZA?si=X8dqC85a4Ur9auj5">
</iframe>
            </div>
            
<br />
<br />
            <p style={{width:"600px", marginLeft:"550px"}}>We started modestly as one small gym in a humble basement studio in New York City’s Greenwich Village in 1989 as a welcoming place for a diverse group of people to get fit. While we believe in the power of fitness to improve lives, we also know exercise is hard work and everyone can use a little more motivation. So we’ve fused fitness and entertainment so that we can make serious exercise fun.</p>
            </section>
            <section className="service-section">
            <div className="container" style={{backgroundColor:"white",width:"400px"}}>
             
            </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
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
export default about;