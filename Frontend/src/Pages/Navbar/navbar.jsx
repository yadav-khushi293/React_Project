import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../App.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_div1">
        <div className="navbar_child1">
          <p className="hover-underline-animation left">Store Loactor</p>
          <p className="hover-underline-animation left">Help</p>
        </div>
        <div className="navbar_child2">
          Enjoy flat ₹100 off on select styles. Use code OFFRT100
        </div>
      </div>

      <div className="navbar_div2">
        <div className="navbar_child3">
          <i className="bi bi-list"></i>
          <img
            src="/Utilis/Logo_Website.webp"
            alt="Website Logo"
            className="logo_img"
          />
          <div className="navbar_child4">
            <div className="search">
              <input type="search" placeholder="What are you looking for?" />
              <i className="bi bi-search"></i>
            </div>
            <i className="bi bi-person"></i>
            <i className="bi bi-bag"></i>
            <i className="bi bi-heart"></i>
          </div>
        </div>

        <div className="navbar_child5">
          <ul className="navbar_category">
            <li className="men hover-underline-animation">
              Men
              <i className="bi bi-chevron-down"></i>
            </li>
            <li className="women hover-underline-animation">
              Women
              <i className="bi bi-chevron-down"></i>
            </li>
            <li className="accessories hover-underline-animation">
              Accessories
              <i className="bi bi-chevron-down"></i>
            </li>
            <li className="ozark hover-underline-animation">
              Ozark
              <i className="bi bi-chevron-down"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
