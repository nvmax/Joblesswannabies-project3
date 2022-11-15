import { useQuery } from '@apollo/client';
import Image from '../images/placeholder-1024x1024.png'

const Home = () => {

//This is all gonna get reduced to a map loop when the backend is setup to send data
    return (
        <div className='home-grid home-styling'>
            <div className='home-title-styling font-Poppins'>Running</div>
            <div className='home-category-grid'>
            <div className='home-item-card-styling'>
                    <img className='home-item-card-styling' src={Image}/>
                    <h1 className='home-item-title-styling font-Poppins'>Watch Place Holder</h1>
                    <p>$100</p>
                </div>
                <div className='home-item-card-styling'>
                    <img className='home-item-card-styling' src={Image}/>
                    <h1 className='home-item-title-styling font-Poppins'>Watch Place Holder</h1>
                    <p>$100</p>
                </div>
                <div className='home-item-card-styling'>
                    <img className='home-item-card-styling' src={Image}/>
                    <h1 className='home-item-title-styling font-Poppins'>Watch Place Holder</h1>
                    <p>$100</p>
                </div>
                <div className='home-item-card-styling'>
                    <img className='home-item-card-styling' src={Image}/>
                    <h1 className='home-item-title-styling font-Poppins'>Watch Place Holder</h1>
                    <p>$100</p>
                </div>
                <div className='font-Poppins home-see-all-button'>See All...</div>
            </div>
        </div>
    )
};

export default Home;