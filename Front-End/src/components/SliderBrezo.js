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
           
            <img src="https://img.itinari.com/activity/images/original/562b766d-c984-4395-9a11-8d3791e7dccb-13631635_1160682387286748_8852333066088511281_n.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=3cc02d72c288e0132f37703c592b1c80" width={"500"} height={"300"}></img>
        
        <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/0d/80/b7/e1.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/fd/03/53/part-from-ski-resort.jpg" width={"500"} height={"300"}></img>
        <img src="https://pine-hotel-brezovice.booked.net/data/Photos/OriginalPhoto/7676/767627/767627848/Pine-Hotel-Brezovice-Exterior.JPEG" width={"500"} height={"300"}></img>
        <img src="https://kalemitravel.com/wp-content/uploads/2016/11/Photo_of_Brezovica.jpg" width={"500"} height={"300"}></img>
        <img src="https://zenith.travel/uploads/a42cbf95e8dfe01dd5f9ad744ae7935da17376ff36ccfba04a7d9d8388c5ec05.jpg" width={"500"} height={"300"}></img>
      
            </Slide>
        </div>
    );
};

export default Slider;