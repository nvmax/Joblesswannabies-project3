import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import {ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';


const Cart = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function navigateToCart() {
    navigate('/cart');
  }

    return (
      <div>
        <i className="fas fa-shopping-cart nav-icon-style" onClick={navigateToCart}></i>
        <span class="badge">{state.cart.length}</span>
      </div>
    );
};

export default Cart;