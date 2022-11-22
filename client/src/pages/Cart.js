import React, { useEffect } from 'react';
import CartItem from '../components/CartItem/index';
import { useStoreContext } from '../utils/GlobalState';
import Auth from '../utils/auth';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import {  ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CartPage = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);
    
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.msrp * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds },
        });
    }

    return (
        <div className='text-align-center cart-page-main-div'>
            <h2 className='font-Poppins'>Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div className="flex-row space-between">
                        <strong className='font-Poppins'>Total: ${calculateTotal()}</strong>

                        {Auth.loggedIn() ? (
                            <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span className='font-Poppins'>(Log in to check out)</span>
                        )}
                    </div>
                </div>
            ) : (
                <h3 className='font-Poppins'>
                    Theres nothing in your cart!
                </h3>
            )}
        </div>
    );
};

export default CartPage;