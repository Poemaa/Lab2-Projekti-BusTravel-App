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
const SliderPrishtine = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
           
            <img src="https://www.ekonomia.info/repository/images/main/22_12_2016_478111_tmp_18225_Muzeu_Kosoves1079096483.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vjeshta_ne_prishtine.jpg" width={"500"} height={"300"}></img>
        
        <img src="https://pbs.twimg.com/media/Eh-jD4QWoAUZKUk.jpg:large" width={"500"} height={"300"}></img>
        <img src="https://www.kosovo-vacations.com/ressourcen/images/gjilan.jpg" width={"500"} height={"300"}></img>
        <img src="https://www.dukagjini.com/wp-content/uploads/2023/03/dukagjini-696x586.jpg" width={"500"} height={"300"}></img>
        <img src="https://manifesta14.org/wp-content/uploads/2022/06/21A.jpg" width={"500"} height={"300"}></img>
      
            </Slide>
        </div>
    );
};

export default SliderPrishtine;