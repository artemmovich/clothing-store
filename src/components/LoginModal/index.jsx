import React from 'react';
import './index.scss';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="login-modal__overlay">
      <div className="login-modal__content">
        <h2 className="login-modal__title">Login</h2>
        <form className="login-modal__form">
          <div className="login-modal__form-group">
            <label htmlFor="email" className="login-modal__label">Email</label>
            <input type="email" id="email" className="login-modal__input" />
          </div>
          <div className="login-modal__form-group">
            <label htmlFor="password" className="login-modal__label">Password</label>
            <input type="password" id="password" className="login-modal__input" />
          </div>
          <button type="submit" className="login-modal__submit-button">Submit</button>
        </form>
        <button className="login-modal__close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default LoginModal;

