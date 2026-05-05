import React, { useEffect, useState } from "react";
import "../ProductPage/Accessories.css";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
export const Accessories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/accessories"
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    api_calling();
  }, []);

  return (
    <>
      <div className="background_img">
        <p className="woman">Accessories</p>
      </div>
      
      {/*  */}
      
     <div className="filter_sort_div">
          <div className="filter">
            <div className="filter_child1">
              <i className="bi bi-funnel"></i>
              <p>filter</p>
            </div>
            <p>20 products</p>
          </div>

          <div className="sort">
            <p>sort by:</p>
            <div className="sort_list">
              <select defaultValue="date_old">
                <option value="featured">featured</option>
                <option value="most_relevant">most relevant</option>
                <option value="best_seloptionng">best seloptionng</option>
                <option value=" a_z">alphabetically, a-z</option>
                <option value="a_z">alphabetically, z-a</option>
                <option value="price_high">price, high to low</option>
                <option value="price_low">price, low to high</option>
                <option value="date_new">date, new to old</option>
                <option value="date_old"> Date, Old To New</option>
              </select>
            </div>
          </div>
        </div>
        
     {/*  */}


   <div className="product-container">
  {data.map((item) => (
    <div className="product-card" key={item.id}>
      

      <div className="image-box">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="product-info">
        <p className="title">{item.title}</p>

        <div className="price-row">
          {/* <span className="badge">Save 70%</span> */}
          <span className="new-price">₹ {item.price}</span>
        </div>
      </div>

    </div>
  ))}
</div>

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
  );
};