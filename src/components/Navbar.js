import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo-main.png";
import "../css/navbar.css";

function Navbar() {
  let history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar nav-container">
        <span>
          <a href="#" className="logo-brand ml-2 p-2">
            <img src={logo} height="48px" width="116px" alt="Logo Here" />
          </a>
          <span className="portal">Intranet Portal</span>
        </span>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Message Board
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Tides
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Applauds
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Jobs
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Admin
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  Account Setting
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item" onClick={logout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
