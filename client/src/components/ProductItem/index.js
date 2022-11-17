import Image from '../../images/placeholder-1024x1024.png'
import { useStoreContext } from '../../utils/GlobalState';

import './style.css'

const ProductItem = (item) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        picture,
        msrp,
    } = item;

    return (
        <div className='product-item-card-styling'>
            <img className='product-item-card-styling' src={picture} />
            <h1 className='product-item-title-styling font-Poppins'>{name}</h1>
            <p>${msrp}</p>
        </div>
    )
};

export default ProductItem;