import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/messageboard.css";
function MessageBoard() {
  const [userData, setUserData] = useState({});
  let history = useHistory();
  if (!localStorage.token) {
    history.push("/");
  }

  const callMessageBoardPage = async () => {
    try {
      const res = await fetch("http://localhost:4000/messageboard", {
        method: "GET",
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
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
          <h3 className="home-h1 strech-home color-grey home-mesage-h1">
            Message Board
            <a href="#" className="see-all">
              See All <i className="fa fa-angle-right"></i>
            </a>
          </h3>
          <form method="GET" encType="multipart/form-data">
            <div className="announcement-item row">
              <div className="image col-sm-4 col-md-2">
                <a>
                  <img
                    src={userData.image}
                    alt="img"
                    height="176px"
                    width="146px"
                  />
                </a>
              </div>
              <div className="content col-sm-8 col-md-10">
                <h3 className="heading">
                  <a className="text-dark text-decoration-none fw-normal">
                    {userData.title}
                  </a>
                </h3>
                <p className="small info text-muted">
                  <span className="location">
                    <i className="fa fa-map-marker"></i> India
                  </span>
                  <span className="calendar ml-3">
                    <i className="fa fa-calendar"></i> May 22, 2020 3:20 pm
                  </span>
                </p>
                <p>{userData.description}</p>
                <div className=" d-flex justify-content-between">
                  <a className="tag text-dark text-decoration-none">
                    {userData.announcement}
                  </a>
                  <ul className=" list-inline d-inline text-end">
                    <li className="list-inline-item me-4">
                      <a href="#" className="text-dark text-decoration-none">
                        <i className="fa fa-thumbs-up"></i>
                        {userData.likes}
                      </a>
                    </li>
                    <li className="list-inline-item ms-4">
                      <a href="#" className="text-dark text-decoration-none">
                        <i className="fa fa-comment"></i>
                        {userData.comments}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
