// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../assets/img/headerLogo.svg";
import LoginModal from '../LoginModal/index';
import headerCart from "../../assets/img/headerCart.svg";
import "./index.scss";
import { useSelector } from 'react-redux';

export const Header = () => {
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
   const handleLoginClick = () => {
      setIsLoginModalOpen(true);
   };
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const closeNav = () => {
      setMenuOpen(false);
   };
   const handleCloseModal = () => {
      setIsLoginModalOpen(false);
   };
   return (

      <header className='header'>
         <div className="container">
            <div className="header__wrapper">
               <div onClick={toggleMenu} className="header__burger">
                  <span className="header__burger-line"></span>
                  <span className="header__burger-line"></span>
                  <span className="header__burger-line"></span>
               </div>
               <div className="header__logo-container">
                  <img className='header__logo-bg' src={headerLogo} alt="Logo" />
                  <div className="header__logo-text">APPAREL</div>
               </div>
               <nav className={`header__navbar ${menuOpen ? 'header__navbar--open' : ''}`}>
                  <ul className="header__navbar-list">
                     <li onClick={closeNav} className="header__navbar-item"><Link to="/">Home</Link></li>
                     <li onClick={closeNav} className="header__navbar-item"><Link to="/shop">Shop</Link></li>
                     <li onClick={closeNav} className="header__navbar-item"><Link to="/rewards">Rewards</Link></li>
                     <li onClick={closeNav} className="header__navbar-item"><Link to="/contact">Contact</Link></li>
                  </ul>
               </nav>
               <div className="header__right-part">
                  <Link to="/cart">
                     <img onClick={closeNav} className='header__cart' src={headerCart} alt="Cart" />
                     <span className="header__cart-count">{totalQuantity}</span>
                  </Link>
                  <button onClick={handleLoginClick}>Login</button>
               </div>
            </div>
         </div>
         <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
      </header>
   );
};
