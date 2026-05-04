import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">
            <img
              src="/Utilis/Logo_Website.webp"
              alt="Website Logo"
              className="logo_img"
              loading="lazy"
            />
          </NavLink>
          <div className="navbar_child4">
            <div className="search">
              <input type="search" placeholder="What are you looking for?" />
              <i className="bi bi-search"></i>
            </div>
            <div className="icons">
              <i className="bi bi-person"></i>
              <i className="bi bi-bag"></i>
              <i className="bi bi-heart"></i>
            </div>
          </div>
        </div>

        {/* Phone */}

        <div className="phone_navbar_div2">
          <div className="navbar_child3">
            <div className="phone_navbar">
              <i className="bi bi-list"></i>
              <NavLink to="/">
                <img
                  src="/Utilis/Logo_Website.webp"
                  alt="Website Logo"
                  className="logo_img"
                  loading="lazy"
                />
              </NavLink>
            </div>
            <div className="icons">
              <i className="bi bi-person"></i>
              <i className="bi bi-bag"></i>
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <div className="search">
            <input type="search" placeholder="What are you looking for?" />
            <i className="bi bi-search"></i>
          </div>
        </div>

        <div className="navbar_child5">
          <ul className="navbar_category">
            <li className="men hover-underline-animation">
              <NavLink to="/men">
                Men
                <i className="bi bi-chevron-down"></i>
              </NavLink>
            </li>
            <li className="women hover-underline-animation">
              <NavLink to="/products">
                Women
                <i className="bi bi-chevron-down"></i>
              </NavLink>
            </li>
            <li className="accessories hover-underline-animation">
              <NavLink to="/">
                Accessories
                <i className="bi bi-chevron-down"></i>
              </NavLink>
            </li>
            <li className="ozark hover-underline-animation">
              <NavLink to="/ozark">
                Ozark
                <i className="bi bi-chevron-down"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
