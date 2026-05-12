import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const Women_Footware = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Cartapi = "https://react-project-1s4c.onrender.com/cart";

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/women",
        );
        setData(res.data);
      } catch (error) {
        console.log("✈️  error: ", error);
      }
    };

    api_calling();
  }, []);

  // Add to Cart Function
  const handleAddToCart = async (item) => {
    const cartObj = {
      id: item.id,
      title: item.title,
      img: item.img,
      price: item.price,
    };

    try {
      const res = await fetch(Cartapi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartObj),
      });

      if (res.ok) {
        localStorage.setItem("selectedProductId", item.id);
        navigate("/Cart");
      } else {
        console.log("Failed to add to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="women_footware_product">
        <div className="background_img">
          <p className="img_text">women footware</p>
        </div>

        <div className="filter_sort_div">
          <div className="filter">
            <div className="filter_child1">
              <i className="bi bi-funnel"></i>
              <p>filter</p>
            </div>
            <p>7 products</p>
          </div>

          <div className="sort">
            <p>sort by:</p>
            <div className="sort_list">
              <select defaultValue="date_old">
                <option value="featured">featured</option>
                <option value="most_relevant">most relevant</option>
                <option value="best_selling">best selling</option>
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

        <div className="men_product_div">
          {data.slice(0, 7).map((item) => (
            <div className="men_product_card" key={item.id}>
              <div className="heart_list">
                <i className="bi bi-heart"></i>
              </div>

              <div
                className="men_image"
                onClick={() => handleAddToCart(item)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>

              <div className="men_product_info">
                <p className="men_info hover-underline-animation dark">
                  {item.title}
                </p>
              </div>

              <div className="men_price">
                {/* <span className="badge">Save 77%</span> */}
                <span className="men_new_price">₹ {item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Down Navbar */}

        <div className="down_navbar">
          <div className="home">
            <i className="bi bi-house-door"></i>
            <p>home</p>
          </div>
          <div className="cart">
            <i className="bi bi-bag"></i>
            <p>cart</p>
          </div>
          <div className="find">
            <i className="bi bi-geo-alt"></i>
            <p>find a store</p>
          </div>
        </div>
      </div>
    </>
  );
};
