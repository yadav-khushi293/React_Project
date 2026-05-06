import  { useEffect, useState } from "react";
import React from "react";
import "../Cartpage/Cart.css";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Cart =()=>{

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/cart"
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    api_calling();
  }, []);


    return(
        <>

 <div className="product-container">
          {data.map((item) => (
            <div className="product-card" key={item.id}>
              
              {/*Image Click = Add to Cart */}
                <img src={item.img} alt={item.title} />

              <div className="product-info">
                <p className="title">{item.title}</p>

                <div className="price-row">
                  <span className="new-price">₹ {item.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>



        {/*  */}
        <div className="parents">
          <div className="Description">Description</div>  

          <div className="pragraph">Embrace sophistication with Red Tape Derby formal shoes for men in black, designed for both style and comfort. These formal shoes feature a premium leather upper that delivers a smooth, polished finish, ideal for office wear and formal occasions. The soft fabric lining offers a gentle touch, while the high-density foam insole ensures excellent cushioning and support for extended wear. The TPR sole enhances durability, flexibility, and reliable traction for confident steps. Featuring a classic low-cut Derby design, these shoes are finished with a round toe and flat heel for all-day comfort and style.</div>

          <p className="Features">Features</p>

         <div class="card">
           <ul>
      <li><strong>Leather Upper:</strong> Premium finish for an elegant formal appearance.</li>
      <li><strong>Fabric Lining:</strong> Soft lining for comfortable wear all day.</li>
      <li><strong>High Density Foam Insole:</strong> Provides superior cushioning and support.</li>
      <li><strong>TPR Sole:</strong> Offers durability and flexibility with a reliable grip.</li>
      <li><strong>Derby Design:</strong> Classic lace-up style for versatile formal occasions.</li>
      <li><strong>Heel:</strong> Ensures stability and comfort for confident movements.</li>
    </ul>
  </div>
  {/*  */}

        <p className="Features">Product Specification</p>

         <div class="card1">
           <ul>
      <li><strong>Material:</strong>  Sole – TPR | Upper – Leather | Lining – Fabric | Insole – High Density Foam</li>
      <li><strong>Design:</strong> Low-cut Derby shoe style perfect for formal occasions</li>
      <li><strong>Heel:</strong>Flat heel for balanced comfort and support</li>
      <li><strong>Fit:</strong> Lace-up closure for a secure and adjustable fit</li>
      <li><strong>Utility:</strong>Ideal for office wear, formal events, and business attire</li>
      <li><strong>Country of Origin:</strong> India</li>
      <li>Manufacturer/Packer/Importer Details: REDTAPE LIMITED, Plot No - 08, Sector 90, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301</li>
    </ul>
  </div>
           
        </div>
        </>
    )
}