import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemToCart, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from '../../store/reducers/cartSlice';
import './index.scss';

const ShopItem = ({ product }) => {
   const dispatch = useDispatch();
   const { items } = useSelector((state) => state.cart);

   const { id, title, price, image } = product;
   const currentItem = items.find(({ id: itemId }) => itemId === id);

   const addToCartHandler = () => {
      dispatch(addItemToCart({
         id,
         title,
         price,
         image: image || 'fallback-image-url.jpg',
      }));

      toast.success('Item added to cart!', {
         position: "top-right",
         autoClose: 1500,
      });
   };

   const increaseQuantityHandler = () => dispatch(increaseItemQuantity(product.id));

   const decreaseQuantityHandler = () => {
      dispatch(decreaseItemQuantity(id));
   };

   const removeItemHandler = () => {
      dispatch(removeItemFromCart(id));

   };
   const isInCart = items.some(item => item.id === product.id)
   return (
      <div className="item">
         <img src={image} alt={title} className="item__image" />
         <h2 className="item__title">{title}</h2>
         <p className="item__price">${price}</p>

         {isInCart ? (
            <div className="item__quantity-controls">
               <button onClick={decreaseQuantityHandler} disabled={currentItem?.quantity === 1}>-</button>
               <span>{currentItem?.quantity}</span>
               <button onClick={increaseQuantityHandler}>+</button>
               <button onClick={removeItemHandler}>Remove</button>
            </div>
         ) : (
            <button className="item__button" onClick={addToCartHandler}>Add to Cart</button>
         )}
      </div>

   );
};

export default ShopItem;
