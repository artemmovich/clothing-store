import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } from '../../store/reducers/cartSlice';
import './index.scss';
import EmptyCart from "../../assets/img/emptyCart.jpg";

export const Cart = () => {
   const { items: cartItems, totalPrice } = useSelector(({ cart }) => cart);
   const dispatch = useDispatch();

   const formatPrice = (price) => {
      return typeof price === 'number' ? price.toFixed(2) : '0.00';
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
               <div className="cart__items-container">
                  <ul className="cart__items">
                     {cartItems.map(({ id, image, title, quantity, totalPrice }) => (
                        <li key={id} className="cart__item">
                           <img src={image} alt={title} className="cart__item-image" />
                           <div className="cart__item-details">
                              <h3 className="cart__item-title">{title}</h3>
                              <div className="cart__item-quantity">
                                 <button onClick={() => dispatch(decreaseItemQuantity(id))} disabled={quantity === 1}>-</button>
                                 <span>{quantity}</span>
                                 <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
                              </div>
                              <p className="cart__item-price">${formatPrice(totalPrice)}</p>
                              <button className="cart__item-remove" onClick={() => dispatch(removeItemFromCart(id))}>
                                 Remove
                              </button>
                           </div>
                        </li>
                     ))}
                  </ul>

                  <div className="cart__total">
                     <h3>Total: ${formatPrice(totalPrice)}</h3>
                     <button className="cart__clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};
