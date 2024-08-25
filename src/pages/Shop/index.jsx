// pages/Shop.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productsSlice';
import ShopItem from '../../components/ShopItem/index';
import './index.scss';
import LoadingSpinner from '../../components/LoadingSpinner';

export const Shop = () => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products.items);
   const status = useSelector((state) => state.products.status);
   const error = useSelector((state) => state.products.error);
   const loading = useSelector((state) => state.products.loading);

   useEffect(() => {
      if (status === 'idle') {
         dispatch(fetchProducts());
      }
   }, [status, dispatch]);

   if (status === 'loading') {
      return <div>Loading...</div>;
   }

   if (status === 'failed') {
      return <div>Error: {error}</div>;
   }

   return (
      <div className="shop">
      <div className="container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="shop__items">
            {products.map((product) => (
              <ShopItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



