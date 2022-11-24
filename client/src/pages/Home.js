import ProductList from '../components/ProductList';
import Running from '../images/blog_thumbnail_trail-running-tips_1200x800-1024x683.jpg.png'
import Golfing from '../images/ocean_club_golf_3273_0.png'
import Health from '../images/heart-zone-training-3432619-2378-472a3028e21b4337b57e014fa5d5a2ad.png'
import Aviation from '../images/aviation.png'
import Diving from '../images/Feature-dive-watch.png'
import { useEffect } from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {

    const windowWidth = window.innerWidth;
    console.log(windowWidth)

    if (windowWidth >= 1469) {
        return (
            <div className='text-align-center home-main-div'>
                <div className='first-section-grid'>
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutLeft' animateIn="animate__fadeInLeft">
                        <div className='home-img'>
                            <img
                                src={Running}
                                alt='trail runner'
                            />
                        </div>
                    </AnimationOnScroll >
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutRight' animateIn="animate__fadeInRight">
                        <div>
                            <h1 className='font-Poppins'>Running Watch</h1>
                            <p className='font-Poppins-light'>Running watches can help you track a multitude of things so you only have to focus on running and can learn and track yourself later. Check out our selection of running watches.</p>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className='first-section-grid '>
                    <AnimationOnScroll duration='1.5' animateOut='animate__fadeOutLeft' animateIn="animate__fadeInLeft">
                        <div>
                            <h1 className='font-Poppins'>Golfing Watch</h1>
                            <p className='font-Poppins-light'>Golf watches are a great way to track your way around the green. check out our selection of golf watches.</p>
                        </div>
                    </AnimationOnScroll >
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutRight' animateIn="animate__fadeInRight">
                        <img
                            src={Golfing}
                            alt='trail runner'
                        />
                    </AnimationOnScroll >
                </div>
                <div className='first-section-grid '>
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutLeft' animateIn="animate__fadeInLeft">
                        <img
                            src={Health}
                            alt='trail runner'
                        />
                    </AnimationOnScroll >
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutRight' animateIn="animate__fadeInRight">
                        <div>
                            <h1 className='font-Poppins'>Health Watch</h1>
                            <p className='font-Poppins-light'>Need help tracking your steps, heart rate, and sleep? Our selection of health watches is unmatched and can track everything you need.</p>
                        </div>
                    </AnimationOnScroll >
                </div>
                <div className='first-section-grid '>
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutLeft' animateIn="animate__fadeInLeft">
                        <div>
                            <h1 className='font-Poppins'>Aviation Watch</h1>
                            <p className='font-Poppins-light'>For all the pilots, aviation watches can help you both on the ground and in the sky. We offer a great selection with many different elements so you can handpick what you need in a watch.</p>
                        </div>
                    </AnimationOnScroll >
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutRight' animateIn="animate__fadeInRight">
                        <img
                            src={Aviation}
                            alt='trail runner'
                        />
                    </AnimationOnScroll >
                </div>
                <div className='first-section-grid '>
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutLeft' animateIn="animate__fadeInLeft">
                        <img
                            src={Diving}
                            alt='trail runner'
                        />
                    </AnimationOnScroll >
                    <AnimationOnScroll duration='2' animateOut='animate__fadeOutRight' animateIn="animate__fadeInRight">
                        <div>
                            <h1 className='font-Poppins'>Diving Watch</h1>
                            <p className='font-Poppins-light'>For both amateur and advanced divers our diving watches can help you navigate the waters. With special technology these can stand water pressure and keep you safe on your dives.</p>
                        </div>
                    </AnimationOnScroll >

                </div>
            </div>
        )
    }
    return (
        <div className='text-align-center home-main-div '>
            <div className='mobile-homepage-grid'>
                <div>
                    <div >
                        <img
                            className='home-img-moblie'
                            src={Running}
                            alt='trail runner'
                        />
                    </div>
                </div >
                <AnimationOnScroll duration='2' offset={1} animateIn="animate__zoomIn">
                    <div>
                        <h1 className='font-Poppins'>Running Watch</h1>
                        <p className='font-Poppins-light'>Running watches can help you track a multitude of things so you only have to focus on running and can learn and track yourself later. Check out our selection of running watches.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className='mobile-homepage-grid'>
                <div>
                    <div >
                        <img
                            className='home-img-moblie'
                            src={Golfing}
                            alt='trail runner'
                        />
                    </div>
                </div >
                <AnimationOnScroll duration='2' offset={1} animateIn="animate__zoomIn">
                    <div>
                        <h1 className='font-Poppins'>Golfing Watch</h1>
                        <p className='font-Poppins-light'>Golf watches are a great way to track your way around the green. check out our selection of golf watches.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className='mobile-homepage-grid'>
                <div>
                    <div >
                        <img
                            className='home-img-moblie'
                            src={Health}
                            alt='trail runner'
                        />
                    </div>
                </div >
                <AnimationOnScroll duration='2' offset={1} animateIn="animate__zoomIn">
                    <div>
                        <h1 className='font-Poppins'>Health Watch</h1>
                        <p className='font-Poppins-light'>Need help tracking your steps, heart rate, and sleep? Our selection of health watches is unmatched and can track everything you need.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className='mobile-homepage-grid'>
                <div>
                    <div >
                        <img
                            className='home-img-moblie'
                            src={Aviation}
                            alt='trail runner'
                        />
                    </div>
                </div >
                <AnimationOnScroll duration='2' offset={1} animateIn="animate__zoomIn">
                    <div>
                        <h1 className='font-Poppins'>Aviation Watch</h1>
                        <p className='font-Poppins-light'>For all the pilots, aviation watches can help you both on the ground and in the sky. We offer a great selection with many different elements so you can handpick what you need in a watch.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className='mobile-homepage-grid'>
                <div>
                    <div >
                        <img
                            className='home-img-moblie'
                            src={Diving}
                            alt='trail runner'
                        />
                    </div>
                </div >
                <AnimationOnScroll duration='2' offset={1} animateIn="animate__zoomIn">
                    <div>
                        <h1 className='font-Poppins'>Diving Watch</h1>
                        <p className='font-Poppins-light'>For both amateur and advanced divers our diving watches can help you navigate the waters. With special technology these can stand water pressure and keep you safe on your dives.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )



};

export default Home;