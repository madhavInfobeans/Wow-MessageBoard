import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/contactus.css";
import axios from "axios";
import "../js/contactFormValidation";

const ContactUs = () => {
  const history = useHistory();
  if (!localStorage.token) {
    history.push("/");
  }
  const [inputData, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [file, setFile] = useState("");

  const handleFiles = e => {
    setFile(e.target.files[0]);
  };

  let name, value;
  const handleInputs = e => {
    name = e.target.name;
    value = e.target.value;
    setContact({ ...inputData, [name]: value });
  };

  const { firstname, lastname, email, mobile, message } = inputData;

  const PostData = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("message", message);
    formData.append("attachment", file);

    const res = await axios.post("http://localhost:4000/contact", formData);
    const data = await res.data;
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("Form not submitted");
    } else {
      document.querySelector(".form__okay").click();
      document.querySelector(".form__okay").disabled = true;
    }
  };
  const backHome = () => {
    history.push("/displayuser");
  };
  return (
    <div className="container-contact">
      <div className="contact">
        <form
          className="contact-form"
          method="POST"
          encType="multipart/form-data"
          onSubmit={PostData}
          id="contactForm"
        >
          <span className="contact-form-title">Get in Touch</span>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
            <input
              className="input-field"
              id="firstname"
              type="string"
              name="firstname"
              value={inputData.firstname}
              onChange={handleInputs}
              placeholder="Your FirstName"
            />
            <span class="ml-2" id="fnameMsg"></span>
          </div>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
            <input
              className="input-field"
              id="lastname"
              type="textInput"
              name="lastname"
              value={inputData.lastname}
              onChange={handleInputs}
              placeholder="Your LastName"
            />
            <span class="ml-2" id="lnameMsg"></span>
          </div>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="far fa-envelope"></i>
            </label>
            <input
              className="input-field"
              type="textInput"
              name="email"
              id="emailId"
              value={inputData.email}
              onChange={handleInputs}
              placeholder=" Enter Email"
            />
            <span class="ml-2" id="emailMsg"></span>
          </div>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-mobile"></i>
            </label>
            <input
              className="input-field"
              id="mobile"
              type="textInput"
              name="mobile"
              value={inputData.mobile}
              onChange={handleInputs}
              placeholder="Contact"
            />
            <span class="ml-2" id="mobileMsg"></span>
          </div>
          <div className="contact-input-field ">
            <input
              type="textarea"
              className="input-field"
              id="message"
              name="message"
              value={inputData.message}
              onChange={handleInputs}
              placeholder="Any message..."
            />
            <span class="ml-2" id="messageMsg"></span>
          </div>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="attachment"
              onChange={handleFiles}
              type="file"
              name="attachment"
            />
            <span class="ml-2" id="attachmentMsg"></span>
          </div>
          <div className="contact-form-btn">
            <input type="submit" className="form-btn" value="Send Email" />
          </div>
        </form>
      </div>

      {/* Display Modal Popup on contact Submit successfully */}

      <button
        className="btn btn-primary form__okay"
        data-toggle="modal"
        data-target="#myModal"
      ></button>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Form Submitted Successfully</h4>
              <button onClick={backHome} className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                Your query has successfully been submitted! Kindly check your
                registered email for confirmation.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                onClick={backHome}
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
