import React from "react";
import logo from "../images/logo-main.png";
import "../css/login.css";

function Login() {
  return (
    <>
      <div className="login-bg">
        <div className="main-container">
          <nav className="nav-container">
            <span>
              <a className="logo-brand ml-2 p-2" href="#">
                <img src={logo} height="58px" width="116px" alt="Logo Here" />
              </a>
              <span className="portal">Intranet Portal</span>
            </span>
          </nav>

          <div className="login-container">
            <div className="card">
              <div className="card-body">
                <div className="logo">
                  <img src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg" />
                </div>
                <form>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Infobeans email address"
                    />
                  </div>
                  <div className="form-group">
                    <a className="float-right forgot" href="#">
                      Forgot?
                    </a>
                    <label className="form-label">Password</label>
                    <input type="password" placeholder="Your password" />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-block ButtonFirst"
                      value="Login to Intranet Portal"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-outline btn-block ButtonOutline"
                      value="Login with Google"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <footer className="footer footeremovepadding">
            &copy; Copyright 2020 InfoBeans. All Rights Reserved.
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
