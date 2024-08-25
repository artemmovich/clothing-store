// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { Shop } from './pages/Shop/index';
import { Rewards } from './pages/Rewards/index';
import { Contact } from './pages/Contact/index';
import { Cart } from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
