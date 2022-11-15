import Image from '../../images/placeholder-1024x1024.png'
import './style.css'

const ProductItem = () => {

    return (
        <div className='product-item-card-styling'>
            <img className='product-item-card-styling' src={Image} />
            <h1 className='product-item-title-styling font-Poppins'>Watch Place Holder</h1>
            <p>$100</p>
        </div>
    )
};

export default ProductItem;