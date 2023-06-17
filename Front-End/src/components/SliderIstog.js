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
const SliderIstog = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>

            <img src="./images/is12.jpg" width={"500"} height={"300"}></img>
            <img src="https://amkmk.rks-gov.net/wp-content/uploads/2022/04/5-Memoriali-i-Heronjeve-Vrelle-2-1024x768.jpg" width={"500"} height={"300"}></img>
        
            <img src="./images/istog7.jpg" width={"500"} height={"300"}></img>
           
            <img src="./images/is9.jpg" width={"500"} height={"300"}></img>
            <img src="./images/is10.jpg" width={"500"} height={"300"}></img>
            <img src="./images/is11.jpg" width={"500"} height={"300"}></img>
            
            </Slide>
        </div>
    );
};

export default SliderIstog;