import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo-main.png";
import "../css/login.css";

const user = {
  email: "madhav@gmail.com",
  password: "test@123",
};
const Login = () => {
  const history = useHistory();
  if (sessionStorage.token) {
    history.push("/");
  }
  const login = e => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email === user.email && password === user.password) {
      sessionStorage.setItem("token", email);
      history.push("/homepage");
    } else {
    }
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  // const handleLogout = () => {
  //   setUser({});
  //   setEmail("");
  //   setPassword("");
  //   localStorage.clear();
  // };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const user = { email, password };
  //   const response = await axios.post("http://localhost:4000/login", user);
  // };
  // setUser(response.data);
  // localStorage.setItem("user", JSON.stringify(response.data));

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
              <form method="POST" onSubmit={login}>
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
                  <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                  />
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
    </>
  );
};

export default Login;
