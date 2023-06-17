import React from "react";
import Slider from "./Slider"
import {FiCoffee} from "react-icons/fi"
import {AiOutlinePicture} from "react-icons/ai"
import SliderPrishtine from "./SliderPrishtine";

function RecommendationPrishtine()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="https://prishtinainsight.com/wp-content/uploads/2022/08/IMG-8230.jpg" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#at"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}}href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Kafenete  < FiCoffee size='20px' style={{marginLeft:'8px'}}></ FiCoffee></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Prishtinen!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="at">
                <p> <br></br> <br></br> 
                <h2>NewBorn-Prishtine </h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="./images/Prishtina.jpg" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="https://manifesta14.org/wp-content/uploads/2022/06/4A.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br>
                    <h2>Biblioteka Kombetare </h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit
                    voluptatem accusantium doloremque laudantium, <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> 
            <h2 id="top">Kafenete</h2>
            <div id="pr5">
                <p> <br></br> <br></br> 
                <h2>Soma Book Station</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://images.squarespace-cdn.com/content/v1/54c2c5d8e4b09cfa786023e4/1565326960419-O4YS864HCZKFWRH0I4GL/chrissihernandez-kosovo+%2847%29copy3000.jpg?format=1500w" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="https://lh3.googleusercontent.com/p/AF1QipOg6frGB8kCZZ_vCYzvEk2L_R_9JsiWHuRKwbsd=s1600-w640" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Tirona </h2> 
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
            <div className="sliderdiv">
            <h2 id="top2">Shijoni atraksionet e tjera</h2>
                <SliderPrishtine/>
            </div>
            
        </main>


    );
}
export default <RecommendationPrishtine />;