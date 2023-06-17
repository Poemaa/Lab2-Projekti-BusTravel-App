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
const SliderFerizaj = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>

            <img src="https://media.licdn.com/dms/image/C4E12AQFtbB7oNjOyxw/article-inline_image-shrink_1500_2232/0/1520191284928?e=1691625600&v=beta&t=HZu9oArUWJjZtdTE03kmatLYSFT8WjT0dZqHKPZxizg" width={"500"} height={"300"}></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Ngjyrat_e_qytetit_Ferizaj.jpg" width={"500"} height={"300"}></img>
        
            <img src="./images/ferizaj1.jpg" width={"500"} height={"300"}></img>
           
            <img src="./images/ferizaj2.jpg" width={"500"} height={"300"}></img>
            <img src="https://rvamag.com/wp-content/uploads/2023/01/63b9e02a7f962.image_-scaled.jpg" width={"500"} height={"300"}></img>
            <img src="https://s1.thingpic.com/images/AM/w2JjuPsBpWfYD7cdHKcu4cK8.jpeg" width={"500"} height={"300"}></img>
            
            </Slide>
        </div>
    );
};

export default SliderFerizaj;