// pages/Contacts.js
import React from 'react';
import './index.scss';

export const Contact = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h1 className="contacts__title">Get in Touch</h1>

        <div className="contacts__info">
          <div className="contacts__info-item">
            <h2 className="contacts__info-title">Our Office</h2>
            <p className="contacts__info-detail">1234 Fashion Ave, Suite 100, New York, NY 10001</p>
          </div>

          <div className="contacts__info-item">
            <h2 className="contacts__info-title">Call Us</h2>
            <p className="contacts__info-detail">+1 (555) 123-4567</p>
          </div>

          <div className="contacts__info-item">
            <h2 className="contacts__info-title">Email Us</h2>
            <p className="contacts__info-detail">support@fashionapparel.com</p>
          </div>

          <div className="contacts__info-item">
            <h2 className="contacts__info-title">Working Hours</h2>
            <p className="contacts__info-detail">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form className="contacts__form">
          <h2 className="contacts__form-title">Send Us a Message</h2>
          <input type="text" placeholder="Your Name" className="contacts__form-input" />
          <input type="email" placeholder="Your Email" className="contacts__form-input" />
          <textarea placeholder="Your Message" className="contacts__form-textarea"></textarea>
          <button type="submit" className="contacts__form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};


