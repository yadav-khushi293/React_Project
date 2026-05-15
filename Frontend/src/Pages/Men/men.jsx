import React, { useEffect, useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Api } from "../../Api/Api";

import "../../App.css";

const api_calling = async () => {
  const res = await Api("/men");
  return res;
};

export const Men = () => {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [expand, setExpand] = useState(true);
  const [colorExpand, setColorExpand] = useState(true);
  const [sizeExpand, setSizeExpand] = useState(true);
  const [originExpand, setOeiginExpand] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  const [sort, setSort] = useState("date_old");
  const [color, setColor] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [size, setSize] = useState([]);

  useEffect(() => {
    api_calling()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter Function Logic
  const highestPrice = Math.max(
    ...data.map((item) => Number(String(item.price).replace(/,/g, "")), 0),
  );

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  const filterData = data.filter((item) => {
    const itemPrice = Number(String(item.price).replace(/,/g, ""));

    const matchPrice = itemPrice >= minPrice && itemPrice <= maxPrice;

    const matchColor = color.length === 0 || color.includes(item.color);

    const matchOrigin = origin.length === 0 || origin.includes(item.origin);

    const matchSize = size.length === 0 || size.includes(item.size);

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

  const handleColor = (value) => {
    if (color.includes(value)) {
      setColor(color.filter((item) => item !== value));
    } else {
      setColor([...color, value]);
    }
  };

  const handleOrigin = (value) => {
    if (origin.includes(value)) {
      setOrigin(origin.filter((item) => item !== value));
    } else {
      setOrigin([...origin, value]);
    }
  };

  const handleSize = (value) => {
    if (size.includes(value)) {
      setSize(size.filter((item) => item !== value));
    } else {
      setSize([...size, value]);
    }
  };

  // Sorting Function Logic

  const sortedData = [...filterData];

  if (sort === "price_low") {
    sortedData.sort((a, b) => {
      const priceA = Number(String(a.price).replace(/,/g, ""));

      const priceB = Number(String(b.price).replace(/,/g, ""));

      return priceA - priceB;
    });
  } else if (sort === "price_high") {
    sortedData.sort((a, b) => {
      const priceA = Number(String(a.price).replace(/,/g, ""));

      const priceB = Number(String(b.price).replace(/,/g, ""));

      return priceB - priceA;
    });
  } else if (sort === "a_z") {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "z_a") {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "date_new") {
    sortedData.reverse();
  } else if (sort === "best_selling") {
    sortedData.sort((a, b) => b.sold - a.sold);
  } else if (sort === "featured") {
    sortedData.sort((a, b) => b.featured - a.featured);
  }

  return (
    <>
      <div className="men_product">
        <div className="background_img">
          <p className="img_text">men</p>
        </div>

        <div className="filter_sort_div">
          <div className="filter">
            <div
              className="filter_child1"
              onClick={() => setShowFilter(!showFilter)}
            >
              <i className="bi bi-funnel"></i>
              <p>filter</p>
            </div>
            <p>
              {filterData.length} of {data.length} products
            </p>
          </div>

          <div className="sort">
            <p>sort by:</p>
            <div className="sort_list">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">featured</option>
                <option value="most_relevant">most relevant</option>
                <option value="best_selling">best selling</option>
                <option value="a_z">alphabetically, a-z</option>
                <option value="z_a">alphabetically, z-a</option>
                <option value="price_high">price, high to low</option>
                <option value="price_low">price, low to high</option>
                <option value="date_new">date, new to old</option>
                <option value="date_old"> Date, Old To New</option>
              </select>
            </div>
          </div>
        </div>

        <div className="men_product_div">
          <div
            className="filter_main_div"
            style={{ display: showFilter ? "block" : "none" }}
          >
            <div className="active_filters">
              {color.map((item) => (
                <button
                  className="active_filter_btn"
                  key={item}
                  onClick={() => setColor(color.filter((el) => el !== item))}
                >
                  {item} <i class="bi bi-x"></i>
                </button>
              ))}

              {origin.map((item) => (
                <button
                  className="active_filter_btn"
                  key={item}
                  onClick={() => setOrigin(origin.filter((el) => el !== item))}
                >
                  {item} <i class="bi bi-x"></i>
                </button>
              ))}

              {size.map((item) => (
                <button
                  className="active_filter_btn"
                  key={item}
                  onClick={() => setSize(size.filter((el) => el !== item))}
                >
                  {item} <i class="bi bi-x"></i>
                </button>
              ))}
            </div>

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
                  <p className="highest_price">
                    the highest price is ₹{" "}
                    {highestPrice.toLocaleString("en-IN")}
                  </p>

                  <div
                    className="range_slider"
                    style={{
                      "--min": `${(minPrice / highestPrice) * 100}%`,
                      "--max": `${(maxPrice / highestPrice) * 100}%`,
                    }}
                  >
                    <input
                      type="range"
                      min="0"
                      max={highestPrice}
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />

                    <input
                      type="range"
                      min="0"
                      max={highestPrice}
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
                          checked={size.includes(item)}
                          onChange={() => handleSize(item)}
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
                          checked={color.includes(item)}
                          onChange={() => handleColor(item)}
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
                  onClick={() => setOeiginExpand(!originExpand)}
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
                          checked={origin.includes(item)}
                          onChange={() => handleOrigin(item)}
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

          {sortedData.length > 0 ? (
            <div
              className="men_product_child2"
              style={{ width: showFilter ? "75%" : "100%" }}
            >
              {sortedData.map((item) => (
                <div className="men_product_card" key={item.id}>
                  <div className="heart_list">
                    <i className="bi bi-heart"></i>
                  </div>

                  <div className="men_image" style={{ cursor: "pointer" }}>
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>

                  <div className="men_product_info">
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
                  setMaxPrice(highestPrice);

                  setColor([]);
                  setOrigin([]);
                  setSize([]);
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
