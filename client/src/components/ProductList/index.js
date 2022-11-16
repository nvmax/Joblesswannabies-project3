import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem/index'
import './style.css'

const ProductList = () => {

    return (
        <div className='product-list-grid product-list-styling'>
            <div className='product-category-title-styling font-Poppins'>Running</div>
            <div className='product-category-grid'>
                    <ProductItem />
                <div className='font-Poppins product-list-see-all-button'>See All...</div>
            </div>
        </div>
    )
};

export default ProductList;