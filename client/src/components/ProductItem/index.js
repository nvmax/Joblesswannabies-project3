import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import './style.css'

const ProductItem = (item) => {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    name,
    picture,
    msrp,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className='product-item-card-styling font-item-list'>
      <Link className="product-item-link-styling" to={`/products/${_id}`}><img className='product-image-styling' src={picture} />
        <h1 className='product-item-title-styling font-item-list'>{name}</h1>
      </Link>
      <div className="product-item-price-styling">
        <span className="font-item-list price-color">${msrp}</span>
      </div>
      <div className="product-item-addCart-div-styling">
        <button className="add-cart-btn font-item-list" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  )
};

export default ProductItem;