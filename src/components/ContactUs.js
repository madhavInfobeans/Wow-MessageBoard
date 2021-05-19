import React from "react";
import "../css/contactus.css";

const ContactUs = () => {
  return (
    <div className="container-contact">
      <div className="contact">
        <form className="contact-form ">
          <span className="contact-form-title">Get in Touch</span>
          <div className="contact-input-field ">
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
            <input
              className="input-field"
              id="name"
              type="string"
              name="fname"
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
              name="lname"
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
              placeholder="Contact"
            />
          </div>
          <div className="contact-input-field ">
            <input
              type="textarea"
              className="input-field"
              name="message"
              placeholder="Any message..."
            />
          </div>
          <div className="contact-input-field ">
            <input className="input-field" id="file" type="file" name="file" />
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
