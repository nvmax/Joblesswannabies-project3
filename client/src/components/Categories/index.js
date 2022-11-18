import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './style.css'

function Categories() {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleChange = (value) => {
        console.log(value.target.value)
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: value.target.value,
        });
    };

    

    return (
        <div >
            <div className='product-category-title-styling font-Poppins'>Categories</div>
            <select  onChange = {handleChange} >
                <option className='product-category-styling font-Poppins' value=''>All Products</option>
                {categories.map((category) => (
                    <option
                        value={category._id}
                        className='product-category-styling font-Poppins'>{category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Categories;