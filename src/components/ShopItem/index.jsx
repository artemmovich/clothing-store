import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemToCart, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from '../../store/reducers/cartSlice';
import './index.scss';

const ShopItem = ({ product }) => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.items);
   const [isInCart, setIsInCart] = useState(cartItems.some(item => item.id === product.id));
   const currentItem = cartItems.find(item => item.id === product.id);

   const addToCartHandler = () => {
      dispatch(addItemToCart({
         id: product.id,
         title: product.title,
         price: product.price,
         image: product.images?.[0] || 'fallback-image-url.jpg',
      }));
      setIsInCart(true);
      toast.success('Item added to cart!', {
         position: "top-right",
         autoClose: 1500,
      });
   };

   const increaseQuantityHandler = () => {
      dispatch(increaseItemQuantity(product.id));
   };

   const decreaseQuantityHandler = () => {
      dispatch(decreaseItemQuantity(product.id));
   };

   const removeItemHandler = () => {
      dispatch(removeItemFromCart(product.id));
      setIsInCart(false);
   };

   return (
      <div className="item">
         <img src={product.images?.[0]} alt={product.title} className="item__image" />
         <h2 className="item__title">{product.title}</h2>
         <p className="item__price">${product.price}</p>

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
