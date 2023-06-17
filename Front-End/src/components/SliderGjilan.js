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
           
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7b/8b/72/astoria-luxury-spa.jpg?w=600&h=400&s=1" width={"500"} height={"300"}></img>
        
        <img src="https://cdn.archilovers.com/projects/c_383_7ce3d4fa-d79d-4120-93fa-f9017029b1e9.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://www.kosovo-info.com/wp-content/uploads/2019/08/gjilan-centre.jpg" width={"500"} height={"300"}></img>
        <img src="https://www.kosovo-vacations.com/ressourcen/images/gjilan.jpg" width={"500"} height={"300"}></img>
        <img src="https://64.media.tumblr.com/ac39772e4aba7248a3a90addb37af5d3/tumblr_mwoimuvW3m1t0egxho1_1280.jpg" width={"500"} height={"300"}></img>
        <img src="https://davidsbeenhere.com/wp-content/uploads/2021/01/video-grilled-kosovo-food-at-restaurant-cuco-veal-chicken-cheese-gjilan-attractions-kosovo-davidsbeenhere-4-980x552.jpg" width={"500"} height={"300"}></img>
      
            </Slide>
        </div>
    );
};

export default Slider;