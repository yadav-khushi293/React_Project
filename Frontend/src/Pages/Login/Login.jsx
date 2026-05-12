import React from "react";
import { NavLink } from "react-router-dom";

import "../Login/Login.css";

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <div className="gogindiv">
            <h1>Login</h1>
            <p className="subtitle">
              If you have an account with us, please log in.
            </p>
          </div>

          <label>Email</label>
          <input type="email" placeholder="Email" />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="false"  
          />

          <p className="forgot">Forgot Your Password?</p>

          
          <div className="outer">
            <div className="button">
              <div className="text">Sign_in</div>
            </div>
          </div>

          <NavLink to="/sign_in">
            <p className="create-account">Create Account</p>
          </NavLink>
        </form>
      </div>
    </>
  );
};