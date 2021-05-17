import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo-main.png";
import "../css/login.css";
import "../js/loginValidation";
import $ from "jquery";

const Login = () => {
  const history = useHistory();
  if (localStorage.email) {
    history.push("/homepage");
  }

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const login = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!validateEmail(email)) {
      document.querySelector(".error_email").style.display = "block";
    } else {
      axios
        .post("http://localhost:4000/login", {
          email: email,
          password: password,
        })
        .then(
          response => {
            if (response.data.token) {
              localStorage.token = response.data.token;
              history.push("/homepage");
            } else {
              alert("Invalid credentials");
            }
          },
          error => {
            console.log(error);
          }
        );
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
              <form method="POST" onSubmit={login} id="loginForm">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Infobeans email address"
                  />
                  <p class="ml-2" id="emailMsg"></p>
                </div>
                <div className="form-group">
                  <a className="float-right forgot" href="#">
                    Forgot?
                  </a>
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    name="password"
                  />
                  <p class="ml-0" id="passwordMsg"></p>
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
