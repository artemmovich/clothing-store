// pages/Rewards.js
import React, { useState } from 'react';
import './index.scss';
import LoginModal from '../../components/LoginModal';

export const Rewards = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div className="rewards">
      <div className="container">
        <h1 className="rewards__title">Rewards Program</h1>
        <p className="rewards__description">
          Join our exclusive rewards program and enjoy benefits designed just for you!
          Earn points for every purchase and redeem them for discounts, free products, and special offers.
        </p>

        <div className="rewards__tiers">
          <div className="rewards__tier">
            <h2 className="rewards__tier-title">Bronze Member</h2>
            <p className="rewards__tier-description">Earn 1 point for every $1 spent. Get exclusive access to early sales.</p>
          </div>
          <div className="rewards__tier">
            <h2 className="rewards__tier-title">Silver Member</h2>
            <p className="rewards__tier-description">Earn 2 points for every $1 spent. Free shipping on all orders.</p>
          </div>
          <div className="rewards__tier">
            <h2 className="rewards__tier-title">Gold Member</h2>
            <p className="rewards__tier-description">Earn 3 points for every $1 spent. Get a 20% discount on every order.</p>
          </div>
        </div>

        <button onClick={handleLoginClick} className="rewards__cta-button">Join Now</button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </div>
  );
};


