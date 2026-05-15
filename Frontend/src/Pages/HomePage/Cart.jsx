import  { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "../HomePage/Cart.css";
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

 <div className="product-containercart">
          {data.map((item) => (

            <div className="product-cardpage" key={item.id}>
              
              {/*Image Click = Add to Cart */}
                <img src={item.img} alt={item.title} className="cartimg_div"/>

              <div className="productcart-info">
                <p className="carttitle">{item.title}</p>


                  <div className="quantity-box">
                      <button >-</button>

                      <span></span>

                      <button>+</button>
                    </div>

                <div className="cartprice-row">
                  <span className="cartnew-price">₹ {item.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      
        </>
    )
}