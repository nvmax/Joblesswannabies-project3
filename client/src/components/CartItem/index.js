import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css'
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="cart-item-div">
      <Link to={`/products/${item._id}`}>
        <img className='cart-item-image'
          src={item.picture}
          alt=""
        />
      </Link>
      <div>
        <div className='font-Poppins'>{item.name}</div>
        <div className='font-Poppins'>${item.msrp}</div>
        <div className='margin-bottom'>
          <span className='font-Poppins'>Qty: </span>
          <input
          className='font-Poppins'
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          /><br/><br/>
          <span
            className='font-Poppins remove-from-cart'
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            Remove from cart
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;