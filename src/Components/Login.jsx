import React from "react";
import BackGround from "./BackGround";
import "./Login.css";

export default function Login() {
  return (
    <section>
      <BackGround />
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input type="text" required="" />
              <i>Username</i>
            </div>
            <div className="inputBox">
              <input type="password" required="" />
              <i>Password</i>
            </div>
            <div className="links">
              <p>Forgot Password</p>
              <p>Signup</p>
            </div>
            <div className="inputBox">
              <input type="submit" defaultValue="Login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
