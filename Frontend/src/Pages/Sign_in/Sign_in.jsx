import React from "react";
import { NavLink } from "react-router-dom";

import "../Sign_in/Sign_in.css";

export const Sign_in = () => {
  return (
    <>
      <div className="sign_in">
        <p className="Create_account">Create account</p>

        <div className="signup-container">
          <form className="signup-form">
            <label>First name</label>
            <input type="text" placeholder="First name" required/>

            <label>Last name</label>
            <input type="text" placeholder="Last name" required/>

            <label>Email</label>
            <input type="email" placeholder="Email" required/>

            <label>Password</label>
            <input type="password" placeholder="Password" required/>

            <div class="outer">
              <div class="button">
                <div class="text">Create</div>
              </div>
            </div>

            <NavLink to="/login">
              <p className="login_account">Sign In</p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};