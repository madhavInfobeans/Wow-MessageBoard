import React from "react";
import { useHistory } from "react-router-dom";
import Lnd from "../images/Lnd.png";
import "../css/messageboard.css";
function MessageBoard() {
  const history = useHistory();
  if (!sessionStorage.token) {
    history.push("/");
  }
  return (
    <>
      <div className="container-fluid bg-home-top">
        <div className="container">
          <h3 className="home-h1 strech-home color-grey home-mesage-h1">
            Message Board
            <a href="#" className="see-all">
              See All <i className="fa fa-angle-right"></i>
            </a>
          </h3>
          <div className="announcement-item row">
            <div className="image col-sm-4 col-md-2">
              <a>
                <img src={Lnd} alt="img" height="176px" width="146px" />
              </a>
            </div>
            <div className="content col-sm-8 col-md-10">
              <h3 className="heading">
                <a className="text-dark text-decoration-none fw-normal">
                  Launching the Soft-Skills L&amp;D Program
                </a>
              </h3>
              <p className="small info text-muted">
                <span className="location me-4">
                  <i className="fa fa-map-marker"></i> India
                </span>
                <span className="calendar">
                  {" "}
                  <i className="fa fa-calendar"></i> May 22, 2020 3:20 pm
                </span>
              </p>
              <p>
                The registrations for Soft-Skills L&amp;D Program now open for
                all team members. The slots are limited and entries would be
                taken on a first come first serve basis. Hurry up!
              </p>
              <div className=" d-flex justify-content-between">
                <a className="tag text-dark text-decoration-none">
                  Announcement
                </a>
                <ul className=" list-inline d-inline text-end">
                  <li className="list-inline-item me-4">
                    <a href="#" className="text-dark text-decoration-none">
                      <i className="fa fa-thumbs-up"></i>34
                    </a>
                  </li>
                  <li className="list-inline-item ms-4">
                    <a href="#" className="text-dark text-decoration-none">
                      <i className="fa fa-comment"></i>34
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
