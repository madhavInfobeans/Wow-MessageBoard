import React from "react";
import "../css/contactus.css";

const ContactUs = () => {
  return (
    <div className="container-contact">
      <div className="contact">
        <form className="contact-form ">
          <span className="contact-form-title">Get in Touch</span>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="name"
              type="text"
              name="fname"
              placeholder="Your FirstName"
            />
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
          </div>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="name"
              type="text"
              name="lname"
              placeholder="Your LastName"
            />
            <label className="input-label">
              <i className="fas fa-user"></i>
            </label>
          </div>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="email"
              type="text"
              name="email"
              placeholder=" Enter Email"
            />
            <label className="input-label">
              <i className="far fa-envelope"></i>
            </label>
          </div>
          <div className="contact-input-field ">
            <input
              className="input-field"
              id="mobile"
              type="text"
              name="mobile"
              placeholder="Contact"
            />
            <label className="input-label">
              <i className="fas fa-mobile"></i>
            </label>
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
