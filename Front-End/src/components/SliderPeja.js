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
const SliderPeja = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>

            
            
            <img src="./images/rugova.jpg" width={"500"} height={"300"}></img>
            <img src="./images/radavc.jpg" width={"500"} height={"300"}></img>
            <img src="https://davidsbeenhere.com/wp-content/uploads/2021/04/top-10-things-to-see-and-do-in-peja-kosovo-davidsbeenhere-8-980x552.jpeg" width={"500"} height={"300"}></img>
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/d8/d0.jpg" width={"500"} height={"300"}></img>
            <img src="https://anes-drinit.com/wp-content/uploads/2020/08/66827495_474488519792636_2802073239851892736_o.jpg" width={"500"} height={"300"}></img>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/0a/16/0c/peja-monastery.jpg?w=500&h=-1&s=1" width={"500"} height={"300"}></img>
            
            </Slide>
        </div>
    );
};

export default SliderPeja;