import React from "react";
import "../Login/Login.css"

export const Login = () => {
  return (
    <>

    <div className="login-container">
      <form className="login-form">
        
        <div className="gogindiv">
        <h1>Login</h1>
        <p className="subtitle">If you have an account with us, please log in.</p>
       </div>

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <p className="forgot">Forgot Your Password?</p>

        <div class="outer">
        <div class="button">
          <div class="text">Sign_in</div>
        </div>
        </div>

        <p className="create-account">Create Account</p>

      </form>
    </div>
    
    </>
  );
};