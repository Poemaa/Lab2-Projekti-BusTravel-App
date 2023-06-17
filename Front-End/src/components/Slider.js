import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
const Slider = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
           
            <img src="https://fastly.4sqi.net/img/general/600x600/203147200_tELHDx2fPU5vQk-donApmLRv6vLn92HGlkGoSAqjJIE.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://fastly.4sqi.net/img/general/600x600/89339830_Yqqc29o079b_9gKBXozKW4EhYQdGv7RD9fZWW6KYIcQ.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/d3/4a/3a/fellas-coffee-kitchen.jpg" width={"500"} height={"300"}></img>
        <img src="https://i0.wp.com/www.awaywithmaja.com/wp-content/uploads/2019/09/fullsizeoutput_7a6f.jpeg?fit=5152%2C3864&ssl=1" width={"500"} height={"300"}></img>
        <img src="https://wander-lush.org/wp-content/uploads/2019/05/Emily-Lush-Prizren-2.jpg" width={"500"} height={"300"}></img>
        <img src="https://dokufest.com/images/uploads/_resampled/KINO_LUNAR_-_tughan_an%C4%B1t11.jpg" width={"500"} height={"300"}></img>
      
            </Slide>
        </div>
    );
};

export default Slider;