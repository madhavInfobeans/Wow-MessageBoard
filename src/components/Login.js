import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo-main.png";
import "../css/login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async e => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfully");
      history.push("/homepage");
    }
  };
  return (
    <>
      <div className="main-container login-bg">
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
              <form method="POST">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Infobeans email address"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <a className="float-right forgot" href="#">
                    Forgot?
                  </a>
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    placeholder="Your password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-block ButtonFirst"
                    value="Login to Intranet Portal"
                    name="login"
                    id="login"
                    onClick={loginUser}
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
    </>
  );
}

export default Login;
