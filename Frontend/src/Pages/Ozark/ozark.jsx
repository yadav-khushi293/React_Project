import React, { useEffect, useState } from "react";
import axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const Ozark = () => {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2970);
  const [expand, setExpand] = useState(true);
  const [colorExpand, setColorExpand] = useState(true);
  const [sizeExpand, setSizeExpand] = useState(true);
  const [originExpand, setOriginExpand] = useState(true);
  const [color, setColor] = useState("");
  const [origin, setOrigin] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/ozark",
        );
        setData(res.data);
      } catch (error) {
        console.log("✈️  error: ", error);
      }
    };

    api_calling();
  }, []);

  const filterData = data.filter((item) => {
    const itemPrice = Number(String(item.price).replace(/,/g, ""));

    const matchPrice = itemPrice >= minPrice && itemPrice <= maxPrice;

    const matchColor = color === "" || item.color === color;

    const matchOrigin = origin === "" || item.origin === origin;

    const matchSize = size === "" || item.size === size;

    return matchPrice && matchColor && matchSize && matchOrigin;
  });

  const count = (key, value) => {
    return data.filter((item) => item[key] === value).length;
  };

  const colors = [...new Set(data.map((item) => item.color))].filter(Boolean);

  const origins = [...new Set(data.map((item) => item.origin))].filter(Boolean);

  const sizeOrder = [
    "Extra-Small",
    "Small",
    "Medium",
    "Big",
    "Extra-Big",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ];

  const sizes = [...new Set(data.map((item) => item.size))]
    .filter(Boolean)
    .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));

  const sizeShort = {
    Small: "S",
    Medium: "M",
    Big: "L",
    "Extra-Big": "XL",
    "Extra-Small": "XS",
  };

  return (
    <>
      <div className="ozark_product">
        <div className="background_img">
          <p className="img_text">ozark adventure shoes</p>
        </div>
        <div className="ozark_category">
          <div className="category_div1">
            <img src="/Utilis/Hiking.avif" alt="Hiking Image" loading="lazy" />
            <p>hiking</p>
          </div>
          <div className="category_div2">
            <img
              src="/Utilis/Trail_Running.avif"
              alt="Trail Runing Image"
              loading="lazy"
            />
            <p>trail running</p>
          </div>
          <div className="category_div3">
            <img
              src="/Utilis/Trecking.webp"
              alt="Trecking Image"
              loading="lazy"
            />
            <p>trekking</p>
          </div>
        </div>
        <div className="filter_sort_div">
          <div className="filter">
            <div className="filter_child1">
              <i className="bi bi-funnel"></i>
              <p>filter</p>
            </div>
            <p>{filterData.length} products</p>
          </div>

          <div className="sort">
            <p>sort by:</p>
            <div className="sort_list">
              <select defaultValue="best_selling">
                <option value="featured">featured</option>
                <option value="most_relevant">most relevant</option>
                <option value="best_selling">Best Selling</option>
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
          <div className="filter_main_div">
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

            <div className="filter_size">
              <div className="filter_price">
                <p>size filter</p>
                <i
                  onClick={() => setSizeExpand(!sizeExpand)}
                  style={{
                    cursor: "pointer",
                    fontSize: "23px",
                    userSelect: "none",
                    WebkitTextStroke: "1px currentColor",
                  }}
                  className={sizeExpand ? "bi bi-dash" : "bi bi-plus"}
                ></i>
              </div>

              {sizeExpand && (
                <div className="filter_options">
                  {sizes.map((item) => (
                    <label key={item} className="filter_option">
                      <div className="filter_option_child">
                        <input
                          type="checkbox"
                          checked={size === item}
                          onChange={() => setSize(size === item ? "" : item)}
                        />

                        <span className="filter_option_text">
                          {sizeShort[item] || item}
                        </span>
                      </div>

                      <p>{count("size", item)}</p>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="filter_color">
              <div className="filter_price">
                <p>color</p>
                <i
                  onClick={() => setColorExpand(!colorExpand)}
                  style={{
                    cursor: "pointer",
                    fontSize: "23px",
                    userSelect: "none",
                    WebkitTextStroke: "1px currentColor",
                  }}
                  className={colorExpand ? "bi bi-dash" : "bi bi-plus"}
                ></i>
              </div>

              {colorExpand && (
                <div className="filter_options">
                  {colors.map((item) => (
                    <label key={item} className="filter_option">
                      <div className="filter_option_child">
                        <input
                          type="checkbox"
                          checked={color === item}
                          onChange={() => setColor(color === item ? "" : item)}
                        />

                        <span className="filter_option_text">{item}</span>
                      </div>

                      <p>{count("color", item)}</p>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="filter_origin">
              <div className="filter_price">
                <p>country of origin</p>
                <i
                  onClick={() => setOriginExpand(!originExpand)}
                  style={{
                    cursor: "pointer",
                    fontSize: "23px",
                    userSelect: "none",
                    WebkitTextStroke: "1px currentColor",
                  }}
                  className={originExpand ? "bi bi-dash" : "bi bi-plus"}
                ></i>
              </div>

              {originExpand && (
                <div className="filter_options">
                  {origins.map((item) => (
                    <label key={item} className="filter_option">
                      <div className="filter_option_child">
                        <input
                          type="checkbox"
                          checked={origin === item}
                          onChange={() =>
                            setOrigin(origin === item ? "" : item)
                          }
                        />

                        <span className="filter_option_text">{item}</span>
                      </div>

                      <p>{count("origin", item)}</p>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {filterData.length > 0 ? (
            <div className="men_product_child2">
              {filterData.map((item) => (
                <div className="ozark_product_card" key={item.id}>
                  <div className="heart_list">
                    <i className="bi bi-heart"></i>
                  </div>

                  <div className="ozark_image">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>

                  <div className="ozark_product_info">
                    <p className="men_info filter_option_text dark">
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

                  setColor("");
                  setOrigin("");
                  setSize("");
                }}
              >
                Clear All
              </button>
            </div>
          )}
        </div>{" "}
        {/* closes ozark_product_div */}
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
