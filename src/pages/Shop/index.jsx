import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productsSlice';
import ShopItem from '../../components/ShopItem/index';
import './index.scss';
import LoadingSpinner from '../../components/LoadingSpinner';

export const Shop = () => {
   const dispatch = useDispatch();
   const {items,  loading} = useSelector((state) => state.products);

   useEffect(() => {
    dispatch(fetchProducts());
   }, [dispatch]);

   return (
      <div className="shop">
      <div className="container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="shop__items">
            {Array.isArray(items) && items.length > 0 ? (
              items.map((product) => (
                <ShopItem key={product.id} product={product} />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
