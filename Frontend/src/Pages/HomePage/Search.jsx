import React, { useEffect, useState } from "react";
import axios from "axios";

import { Navbar } from "../Navbar/navbar";
import { Footer } from "../../ProductPage/Footer";

import "../../App.css";

export const Search = () => {
  const [data, setData] = useState([]);

  const searchValue = localStorage.getItem("search") || "";

  useEffect(() => {
    const apiCalling = async () => {
      try {
        const [men, women, accessories, ozark] = await Promise.all([
          axios.get("https://react-project-1s4c.onrender.com/men"),
          axios.get("https://react-project-1s4c.onrender.com/women"),
          axios.get("https://react-project-1s4c.onrender.com/accessories"),
          axios.get("https://react-project-1s4c.onrender.com/ozark"),
        ]);

        const allProducts = [
          ...men.data,
          ...women.data,
          ...accessories.data,
          ...ozark.data,
        ];

        setData(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    apiCalling();
  }, []);

  const searchData = data.filter((item) => {
    return (
      item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.color?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.origin?.toLowerCase().includes(searchValue.toLowerCase()) ||
      String(item.price).includes(searchValue)
    );
  });

  return (
    <>
      <Navbar />

      <div className="search_page">
        <div className="search_heading">
          <h2>Search Results For {searchValue}</h2>

          <p>{searchData.length} Products Found</p>
        </div>

        <div className="search_products">
          {searchData.length > 0 ? (
            searchData.map((item) => (
              <div className="men_product_card" key={item.id}>
                <div className="heart_list">
                  <i className="bi bi-heart"></i>
                </div>

                <div className="men_image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>

                <div className="men_product_info">
                  <p className="men_info">{item.title}</p>

                  <p className="men_new_price">₹ {item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no_product">
              <h2>No Product Found</h2>

              <p>Try another keyword</p>
            </div>
          )}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};
