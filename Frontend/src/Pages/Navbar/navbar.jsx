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
          <i class="bi bi-list"></i>
          <img
            src="/Utilis/Logo_Website.webp"
            alt="Website Logo"
            className="logo_img"
          />
          <div className="navbar_child4">
            <div className="search">
              <input type="search" placeholder="What are you looking for?" />
              <i class="bi bi-search"></i>
            </div>
            <i class="bi bi-person"></i>
            <i class="bi bi-bag"></i>
            <i class="bi bi-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
