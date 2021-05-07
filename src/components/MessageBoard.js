import React from "react";
import Lnd from "../images/Lnd.png";
import "../css/messageboard.css";
function MessageBoard() {
  return (
    <>
      <div className="container-fluid bg-home-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="home-h1 strech-home color-grey home-mesage-h1">
                Message Board
                <a href="#" className="see-all">
                  See All <i className="fa fa-angle-right"></i>
                </a>
              </h3>
            </div>
            {/* Announcement-item starts here */}
            <div className="announcement-item">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="0"
              >
                {/* <!-- Carousel indicators --> */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                {/* <!-- Wrapper for carousel items --> */}

                <div className="carousel-inner">
                  {/* <!-- First carousel contents starts here --> */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="image">
                          <a href="#">
                            <img
                              src={Lnd}
                              height="144px"
                              width="196px"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-8 content">
                        <h3 className="heading">
                          <a href="#">
                            Launching the Soft-Skills L&amp;D Program
                          </a>
                        </h3>
                        <p className="small info">
                          <span className="location">
                            <i className="fa fa-map-marker"></i> India
                          </span>
                          <span className="calendar">
                            <i className="fa fa-calendar"></i> May 22, 2020 3:20
                            pm
                          </span>
                        </p>
                        <p>
                          The registrations for Soft-Skills L&amp;D Program now
                          open for all team members. The slots are limited and
                          entries would be taken on a first come first serve
                          basis. Hurry up!
                        </p>
                        <div className="tag-and-actions">
                          <a href="" className="tag">
                            Announcement
                          </a>
                          <ul className="social-actions">
                            <li>
                              <a href="#">
                                <i className="fa fa-thumbs-up"></i>34
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comment"></i>34
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- First carousel contents ends here --> */}
                  {/* <!-- Seconds carousel contents starts here --> */}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="image">
                          <a href="#">
                            <img
                              src={Lnd}
                              height="144px"
                              width="196px"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-8 content">
                        <h3 className="heading">
                          <a href="#">
                            Launching the Soft-Skills L&amp;D Program
                          </a>
                        </h3>
                        <p className="small info">
                          <span className="location">
                            <i className="fa fa-map-marker"></i> India
                          </span>
                          <span className="calendar">
                            <i className="fa fa-calendar"></i> May 22, 2020 3:20
                            pm
                          </span>
                        </p>
                        <p>
                          The registrations for Soft-Skills L&amp;D Program now
                          open for all team members. The slots are limited and
                          entries would be taken on a first come first serve
                          basis. Hurry up!
                        </p>
                        <div className="tag-and-actions">
                          <a href="" className="tag">
                            Announcement
                          </a>
                          <ul className="social-actions">
                            <li>
                              <a href="#">
                                <i className="fa fa-thumbs-up"></i>34
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comment"></i>34
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Second carousel contents ends here --> */}
                </div>
                {/* <!-- Carousel controls --> */}
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-chevron-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- announcement-item ends here --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
