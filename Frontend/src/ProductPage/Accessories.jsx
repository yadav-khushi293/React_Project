import React, { useEffect, useState } from "react";
import "../ProductPage/Accessories.css";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

export const Accessories = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Cartapi = "https://react-project-1s4c.onrender.com/cart";

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
        navigate("/Page");
      } else {
        console.log("Failed to add to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="accessories_page">
        <div className="background_img">
          <p className="woman">Accessories</p>
        </div>

        <div className="filter_sort_div">
          <div className="filter">
            <div className="filter_child1">
              <i className="bi bi-funnel"></i>
              <p>filter</p>
            </div>
            <p>{data.length} products</p>
          </div>

          <div className="sort">
            <p>sort by:</p>
            <div className="sort_list">
              <select defaultValue="date_old">
                <option value="featured">featured</option>
                <option value="most_relevant">most relevant</option>
                <option value="best_seloptionng">best seloptionng</option>
                <option value="a_z">alphabetically, a-z</option>
                <option value="z_a">alphabetically, z-a</option>
                <option value="price_high">price, high to low</option>
                <option value="price_low">price, low to high</option>
                <option value="date_new">date, new to old</option>
                <option value="date_old">Date, Old To New</option>
              </select>
            </div>
          </div>
        </div>

        <div className="product-container">
          {data.map((item) => (
            <div className="product-card" key={item.id}>
              
              {/*Image Click = Add to Cart */}
              
              <div className="image-box" onClick={() => handleAddToCart(item)}style={{ cursor: "pointer" }}>
                <img src={item.img} alt={item.title} />
              </div>

              <div className="product-info">
                <p className="title">{item.title}</p>

                <div className="price-row">
                  <span className="new-price">₹ {item.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};