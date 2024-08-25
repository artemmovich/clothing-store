// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } from '../../store/reducers/cartSlice';
import './index.scss';
import EmptyCart from "../../assets/img/EmptyCart.jpg";

export const Cart = () => {
   const cartItems = useSelector((state) => state.cart.items);
   const totalPrice = useSelector((state) => state.cart.totalPrice);
   const dispatch = useDispatch();
   
   const increaseQuantityHandler = (id) => {
      dispatch(increaseItemQuantity(id));
   };

   const decreaseQuantityHandler = (id) => {
      dispatch(decreaseItemQuantity(id));
   };

   const removeItemHandler = (id) => {
      dispatch(removeItemFromCart(id));
   };

   const clearCartHandler = () => {
      dispatch(clearCart());
   };

  

   return (
      <div className="cart">
         <div className="container">
            <h2 className='cart__title'>Your Cart</h2>
            {cartItems.length === 0 ? (
               <div className='cart__empty'>
                  <p>Your cart is empty.</p>
                  <img className='cart__image' src={EmptyCart} alt="Empty Cart" />
                  <p>Add something to make me happy :)</p>
               </div>
            ) : (
               <div>
                  <div className="cart__items-container">
                     <ul className="cart__items">
                        {cartItems.map((item) => {
                           

                           return (
                              <li key={item.id} className="cart__item">
                                 <img src={item.image} alt={item.title} className="cart__item-image" />
                                 <div className="cart__item-details">
                                    <h3 className="cart__item-title">{item.title}</h3>
                                    <div className="cart__item-quantity">
                                       <button onClick={() => decreaseQuantityHandler(item.id)}>-</button>
                                       <span>{item.quantity}</span>
                                       <button onClick={() => increaseQuantityHandler(item.id)}>+</button>
                                    </div>
                                    <p className="cart__item-price">${item.totalPrice.toFixed(2)}</p>
                                    <button className="cart__item-remove" onClick={() => removeItemHandler(item.id)}>
                                       Remove
                                    </button>
                                 </div>
                              </li>
                           );
                        })}
                     </ul>

                     <div className="cart__total">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        <button className="cart__clear" onClick={clearCartHandler}>Clear Cart</button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};
