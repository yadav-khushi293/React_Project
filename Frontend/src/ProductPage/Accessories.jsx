import React, { useEffect, useState } from "react";

import { Api } from "../Api/Api";
import "../ProductPage/Accessories.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const api_calling = async () => {
  const res = await Api("/accessories");
  return res;
};

export const Accessories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api_calling()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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

              <div className="image-box" style={{ cursor: "pointer" }}>
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
