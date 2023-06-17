import React from "react";
import Slider from "./SliderGjilan"
import {FiCoffee} from "react-icons/fi"
import {AiOutlinePicture} from "react-icons/ai"

function RecommendationGjilan()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="./images/gjilan.png" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#atB"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}} href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Kafenete  < FiCoffee size='20px' style={{marginLeft:'8px'}}></ FiCoffee></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Gjilanin!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="atB">
                <p> <br></br> <br></br> 
                <h2>Qendra e qytetit </h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://davidsbeenhere.com/wp-content/uploads/2021/04/top-5-things-you-must-see-and-do-in-gjilan-kosovo-davidsbeenhere-2-980x552.jpeg" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="https://gjstatic.blob.core.windows.net/businessdirectoryphotos/large/879c209b2f8dfbe0e0bbc978fff4842c_20160519_084934.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Parku i qytetit </h2> 
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> 
            <h2 className="top">Kafenete</h2>
            <div id="pr5">
                <p> <br></br> <br></br> 
                <h2>Planet Restaurant</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://tripalb.com/wp-content/uploads/2022/07/Resort-Planet-Gjilan-1.webp" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="https://media-cdn.tripadvisor.com/media/photo-s/1c/75/a6/7a/hani-i-mbreterve.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Hani i Mbreterve</h2> 
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
                <Slider />
            </div>
            
        </main>


    );
}
export default <RecommendationGjilan />;