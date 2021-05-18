import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/messageboard.css";
import Lnd from "../images/Lnd.png";
import {
  FaRegComment,
  FiThumbsUp,
  FiCalendar,
  FaMapMarkerAlt,
} from "react-icons/all";

function MessageBoard(props) {
  return (
    <>
      <div className="announcement-item">
        <div className="image mr-3">
          <a href="">
            <img
              src={props.data.image}
              alt="img"
              height="176px"
              width="196px"
            />
          </a>
        </div>
        <div className="content">
          <h3 className="heading">
            <a href="">{props.data.title}</a>
          </h3>
          <p className="small info">
            <span className="location">
              <FaMapMarkerAlt /> India
            </span>
            <span className="calendar ml-3">
              <FiCalendar /> May 22, 2020 3:20 pm
            </span>
          </p>
          <p>{props.data.description}</p>
          <div className="tag-and-actions">
            <a href="" className="tag">
              {props.data.announcement}
            </a>
            <ul className="social-actions">
              <li className="like-active-icon mr-3">
                <a href="#">
                  <FiThumbsUp />
                  {props.data.likes}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRegComment />
                  {props.data.comments}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
