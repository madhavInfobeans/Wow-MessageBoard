import React from "react";
import { useHistory, NavLink } from "react-router-dom";
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
          <NavLink to="#" className="logo-brand ml-2 p-2">
            <img src={logo} height="48px" width="116px" alt="Logo Here" />
          </NavLink>
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
              <NavLink to="/homepage" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/messageboard" className="nav-link">
                Message Board
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contactus" className="nav-link">
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/displayuser" className="nav-link">
                Display User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
