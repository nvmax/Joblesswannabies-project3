import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/index'
import Categories from '../Categories/index'
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';
import { QUERY_PRODUCTS } from '../../utils/queries';
import './style.css'

const ProductList = () => {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(
            (product) => product.category._id === currentCategory
        );
    }

    return (
        <div className='product-list-grid product-list-styling'>
            <Categories />
            <div className='product-all-products-title-styling font-Poppins'>All Products</div>
            <div className='product-all-product-grid'>
                {filterProducts().map((product) => (
                    <ProductItem
                        key={product._id}
                        _id={product._id}
                        picture={product.picture}
                        name={product.name}
                        msrp={product.msrp}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    )
};

export default ProductList;