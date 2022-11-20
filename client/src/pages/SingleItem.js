import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function SingleItem() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {

    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }

    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }

    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="single-item-grid">
          <div className='text-align-right '>
            <img
            className='item-image'
              src={currentProduct.picture}
              alt={currentProduct.name}
            />
          </div>
          <div className=''>
            <h2 className='text-align-center text-size-main-title font-Poppins'>{currentProduct.name}</h2>
            <p className='text-align-center text-size-main font-Poppins-light'>{currentProduct.description}</p>
            <p className='text-align-center text-size-main font-Poppins-light'>${currentProduct.msrp}</p>
            <h3 className='text-align-center font-Poppins'>Technical Specifications</h3>
            <p className='text-align-center font-Poppins-light'>Size: {currentProduct.size}</p>
            <p className='text-align-center font-Poppins-light'>Display Size: {currentProduct.displaysize}</p>
            <p className='text-align-center font-Poppins-light'>Display Resolution: {currentProduct.displayresolution}</p>
            <p className='text-align-center font-Poppins-light'>Weight: {currentProduct.weight}</p>
            <p className='text-align-center font-Poppins-light'>Water Rating: {currentProduct.waterrating}</p>
            <p className='text-align-center font-Poppins-light'>Color Display: {currentProduct.colordisplay}</p>
            <p className='text-align-center font-Poppins-light'>Release Date: {currentProduct.releasedate}</p>
          </div>
        </div>
      ) : null}
      {loading ? <div></div> : null}
    </>
  );
}

export default SingleItem;