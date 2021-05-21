import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/contactus.css";
import axios from "axios";

const ContactUs = () => {
  const history = useHistory();
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
      window.alert("Invalid Registration");
    } else {
      window.alert("Contact form submitted");
    }
  };
  return (
    <div className="container-contact">
      <div className="contact">
        <form
          className="contact-form"
          method="POST"
          encType="multipart/form-data"
          onSubmit={PostData}
        >
          <span className="contact-form-title">Get in Touch</span>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
            <input
              className="input-field"
              id="fname"
              type="string"
              name="firstname"
              value={inputData.firstname}
              onChange={handleInputs}
              placeholder="Your FirstName"
            />
          </div>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
            <input
              className="input-field"
              id="name"
              type="textInput"
              name="lastname"
              value={inputData.lastname}
              onChange={handleInputs}
              placeholder="Your LastName"
            />
          </div>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="far fa-envelope"></i>
            </label>
            <input
              className="input-field"
              type="textInput"
              name="email"
              value={inputData.email}
              onChange={handleInputs}
              placeholder=" Enter Email"
            />
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
          </div>
          <div className="contact-input-field ">
            <input
              type="textarea"
              className="input-field"
              name="message"
              value={inputData.message}
              onChange={handleInputs}
              placeholder="Any message..."
            />
          </div>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="file"
              onChange={handleFiles}
              type="file"
              name="attachment"
            />
          </div>
          <div className="contact-form-btn">
            <input type="submit" className="form-btn" value="Send Email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
