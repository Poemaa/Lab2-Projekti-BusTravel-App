import React from "react";
import Slider from "./Slider"
import {FiCoffee} from "react-icons/fi"
import {AiOutlinePicture} from "react-icons/ai"

function RecommendationPrizren()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="./images/Prizren.jpg" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#at"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}}href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Kafenete  < FiCoffee size='20px' style={{marginLeft:'8px'}}></ FiCoffee></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Prizrenin!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="at">
                <p> <br></br> <br></br> 
                <h2>Shatervani-Prizren </h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="./images/shadervan.jpg" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="./images/kalaja.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br>
                    <h2>Kalaja e Prizrenit </h2>
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
                <h2>CioccolatiItaliani</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://horecanews.it/wp-content/uploads/2018/10/Augusto-Contract-CioccolatItaliani.png" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="./images/che.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Che Bar - Prizren </h2> 
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
export default <RecommendationPrizren />;