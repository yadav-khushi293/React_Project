import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Login/Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please Fill All Fields!");
      return;
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.(com|in|net|org)$/i;

    if (!emailReg.test(email)) {
      alert("Enter Valid Email !");
      return;
    }

    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordReg.test(password)) {
      alert(" Invalid Password Fromat!");
      return;
    }

    try {
      const res = await fetch("https://react-project-1s4c.onrender.com/login");

      const users = await res.json();

      const matchUser = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (matchUser) {
        localStorage.setItem("user", JSON.stringify(matchUser));
        alert("Login Successful");
      } else {
        alert("Invalid Email Or Password! Please Try Again");
      }
    } catch (error) {
      console.log("✈️  error: ", error);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="gogindiv">
            <h1>Login</h1>
            <p className="subtitle">
              If you have an account with us, please log in.
            </p>
          </div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="false"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="forgot">Forgot Your Password?</p>
          <div className="outer">
            <div className="button">
              <button className="text" type="submit">
                Sign_in
              </button>
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
