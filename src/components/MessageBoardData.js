import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import MessageBoard from "./MessageBoard";
import "../css/messageboard.css";
import { AiOutlineRight } from "react-icons/all";
const options = {
  nav: true,
  items: 1,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
};
function MessageBoardData() {
  var [messageboard, setMessageBoard] = useState([]);

  let history = useHistory();
  if (!localStorage.token) {
    history.push("/");
  }

  const callMessageBoardPage = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:4000/messageboard",
        headers: {
          Authorization: `token ${localStorage.token}`,
        },
      });
      const data = await res.data;
      console.log(data);
      setMessageBoard(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callMessageBoardPage();
  }, []);
  return (
    <>
      <div className="container-fluid bg-home-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="home-h1 strech-home color-grey home-mesage-h1">
                Message Board
                <a href="" className="see-all">
                  See All <AiOutlineRight />
                </a>
              </h3>
            </div>
            {messageboard.length > 0 && (
              <OwlCarousel className="owl-theme" {...options}>
                {messageboard.map(function (each) {
                  console.log("each", each);
                  return <MessageBoard data={each} key={each.id} />;
                })}
              </OwlCarousel>
            )}
          </div>
        </div>
        <footer className="homepage__footer">
          &copy; Copyright 2020 InfoBeans. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default MessageBoardData;
