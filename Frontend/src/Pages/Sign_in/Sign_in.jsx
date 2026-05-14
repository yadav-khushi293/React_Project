import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Sign_in/Sign_in.css";

export const Sign_in = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
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
      alert("Invalid Password Format!");
      return;
    }

    const checkUser = await fetch(
      "https://react-project-1s4c.onrender.com/login",
    );

    const users = await checkUser.json();

    const existUser = users.find((user) => user.email === email);

    if (existUser) {
      alert("Email Already Exists!");
      return;
    }

    const userObj = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const res = await fetch("https://react-project-1s4c.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      });
      if (res.ok) {
        alert("Account Created");
      }
    } catch (error) {
      console.log("✈️  error: ", error);
    }
  };

  return (
    <>
      <div className="sign_in">
        <p className="Create_account">Create account</p>

        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSignUp}>
            <label>First name</label>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="outer">
              <div className="button">
                <button type="submit" className="text">
                  Create
                </button>
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
