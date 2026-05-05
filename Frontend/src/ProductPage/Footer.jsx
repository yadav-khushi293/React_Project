import React from "react";
import {} from '../ProductPage/Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer =()=>{



    return(
        <>
         <hr></hr>
{/* footer */}
   
   <div className="footer">

  {/* Top */}
  <div className="footer-top">
    <div className="top-item">
      <i className="bi bi-chat-dots"></i>
      <div>
        <p className="heading">Customer Service</p>
        <span>09:30 A.M. to 05:00 P.M</span>
      </div>
    </div>

    <div className="top-item">
      <i className="bi bi-telephone"></i>
      <div>
        <p className="heading">Call Us</p>
        <span>+91 7836850000</span>
      </div>
    </div>

    <div className="top-item">
      <i className="bi bi-envelope"></i>
      <div>
        <p className="heading">Get in Touch</p>
        <span>customercare@redtapeindia.com</span>
      </div>
    </div>
  </div>



  {/* Middle */}
  <div className="footer-middle">

    <div>
      <p className="heading1">Collection</p>
      <p>Men</p>
      <p>Women</p>
      <p>Accessories</p>
      <p>Ozark</p>
    </div>

    <div>
      <p className="heading1">Get Help</p>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>My Account</p>
      <p>Store Locator</p>
      <p>Store Expansion</p>
      <p>FAQs</p>
    </div>

    <div>
      <p className="heading1">Company</p>
      <p>Return & Replacing</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>

    <div>
      <p className="heading1">About Redtape</p>
      <p className="about-text">
     RedTape is known for emerging as one of the Finest Brands of Footwear and Clothing for Men, Women and Kids. It has emerged as a complete Family Fashion Destination by providing the Best International Styles and World-Class Quality through Shoes, Apparels and Accessories for all age groups. We own a Portfolio of Well-Recognized Brands:
      </p>
      <span className="read-more">Read More</span>
    </div>

  </div>

  {/* Bottom */}
  <div className="footer-bottom">
    <div className="icons">
      <i className="bi bi-facebook"></i>
      <i className="bi bi-twitter-x"></i>
      <i className="bi bi-instagram"></i>
      <i className="bi bi-youtube"></i>
    </div>
  </div>

</div>

 <p  className="center">© 2026The content of this site is copyright-protected and is the property of RedTape.</p>
{/* footer end */}
        </>
    )
}