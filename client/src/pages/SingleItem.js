import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

function SingleItem() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;
  let itemInCart =
    typeof cart.find((cartItem) => cartItem._id === id) !== "undefined";
  const [inCart, setInCart] = useState(itemInCart);

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id, inCart]);

  const addToCart = () => {
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", {
        ...currentProduct,
        purchaseQuantity: 1,
      });
    }
    setInCart(true);
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });

    setInCart(false);
  };

  console.log(currentProduct);
  const releaseDate = new Date(currentProduct.releasedate);
  console.log(typeof currentProduct.releasedate);

  return (
    <div className="single-page-main-div">
      <Link className="font-Poppins back-to-browsing" to="/browse">
        ← Back to Browsing{" "}
      </Link>
      {currentProduct && cart ? (
        <div className="single-item-grid">
          <div className="text-align-right ">
            <img
              className="single-item-image"
              src={currentProduct.picture}
              alt={currentProduct.name}
            />
          </div>
          <div className="text-align-center">
            <h2 className="text-size-main-title font-Poppins">
              {currentProduct.name}
            </h2>
            <p className="text-size-main font-Poppins-light">
              {currentProduct.description}
            </p>
            <p className="text-size-main font-Poppins-light">
              ${currentProduct.msrp}
            </p>
            <h3 className="font-Poppins">Technical Specifications</h3>
            <p className="font-Poppins-light">Size: {currentProduct.size}</p>
            <p className="font-Poppins-light">
              Display Size: {currentProduct.displaysize}
            </p>
            <p className="font-Poppins-light">
              Display Resolution: {currentProduct.displayresolution}
            </p>
            <p className="font-Poppins-light">
              Weight: {currentProduct.weight}
            </p>
            <p className="font-Poppins-light">
              Water Rating: {currentProduct.waterrating}
            </p>
            <p className="font-Poppins-light">
              Color Display: {currentProduct.colordisplay}
            </p>
            <p className="font-Poppins-light">
              Release Date: {currentProduct.releasedate};
            </p>
            <button
              className="btn-single-page-size btn-single-page-style font-Poppins-light"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className="font-Poppins-light btn-single-page-style"
              disabled={!inCart}
              onClick={removeFromCart}
              style={{ visibility: inCart ? "visible" : "hidden" }}
            >
              Remove All from Cart
            </button>
          </div>
        </div>
      ) : null}
      {loading ? <div></div> : null}
    </div>
  );
}

export default SingleItem;
