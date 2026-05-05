import React, { useEffect, useState } from "react";
import "../ProductPage/ProdectPages.css";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
export const ProdectPages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/women"
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
      <div className="product_page">
        <div className="background_img">
          <p className="woman">Woman</p>
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
      </div>
    </>
  );
};