import React from "react";
import "../Sign_in/Sign_in.css";

export const Sign_in =()=>{

    return(
        <>
        <p className="Create_account">Create account</p>

      <div className="signup-container">
      <form className="signup-form">
        
        <label>First name</label>
        <input type="text" placeholder="First name" />

        <label>Last name</label>
        <input type="text" placeholder="Last name" />

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <div class="outer">
        <div class="button">
          <div class="text">Create</div>
        </div>
        </div>
      </form>
    </div>

        </>
    )
}