import React, { useEffect, useState } from "react";
import axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const Men = () => {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2970);
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/men",
        );
        setData(res.data);
      } catch (error) {
        console.log("✈️  error: ", error);
      }
    };

    api_calling();
  }, []);

  const filterData = data.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice,
  );

  return (
    <>
      <div className="men_product">
        <div className="background_img">
          <p className="img_text">men</p>
        </div>

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
          <div className="filter_div">
            <div className="filter_price">
              <p>price</p>
              <i
                onClick={() => setExpand(!expand)}
                style={{
                  cursor: "pointer",
                  fontSize: "23px",
                  userSelect: "none",
                  WebkitTextStroke: "1px currentColor",
                }}
                className={expand ? "bi bi-dash" : "bi bi-plus"}
              ></i>
            </div>

            {expand && (
              <>
                <p className="highest_price">the highest price is ₹ 2,970</p>

                <div
                  className="range_slider"
                  style={{
                    "--min": `${(minPrice / 2970) * 100}%`,
                    "--max": `${(maxPrice / 2970) * 100}%`,
                  }}
                >
                  <input
                    type="range"
                    min="0"
                    max="2970"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                  />

                  <input
                    type="range"
                    min="0"
                    max="2970"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>

                <div className="price_inputs">
                  <div className="price_box">
                    <span>₹</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        if (value <= maxPrice) {
                          setMinPrice(value);
                        }
                      }}
                    />
                  </div>

                  <div className="price_box">
                    <span>₹</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        if (value >= minPrice) {
                          setMaxPrice(value);
                        }
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {filterData.length > 0 ? (
            <div className="men_product_child2">
              {filterData
                .slice()
                .reverse()
                .map((item) => (
                  <div className="men_product_card" key={item.id}>
                    <div className="heart_list">
                      <i className="bi bi-heart"></i>
                    </div>

                    <div className="men_image">
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
          ) : (
            <div className="no_product">
              <h2>no product found</h2>
              <p>try changing the price range</p>
              <button
                className="filter_price_button"
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(2970);
                }}
              >
                Clear All
              </button>
            </div>
          )}

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
      </div>
    </>
  );
};
