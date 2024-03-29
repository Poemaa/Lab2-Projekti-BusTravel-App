import React from "react";
import Slider from "./SliderIstog"
import {MdRestaurantMenu} from "react-icons/md"
import {AiOutlinePicture} from "react-icons/ai"

function RecommendationIstog()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="./images/Istog4.jpg" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#at"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}}href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Hotelet dhe Restaurantet< MdRestaurantMenu size='20px' style={{marginLeft:'8px'}}></ MdRestaurantMenu></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Istogun!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="at">
                <p> <br></br> <br></br> 
                <h2 style ={{fontStyle: "italic"}}>Burimi i Istogut</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="./images/burimi3.png" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="./images/viewPoint2.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br>
                <h2 style ={{fontStyle: "italic"}}>View Point</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit
                    voluptatem accusantium doloremque laudantium, <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> 
            <h2 className="top">Hotelet dhe Restaurantet</h2>
            <div id="pr5">
                <p> <br></br> <br></br> 
                <h2 style ={{fontStyle: "italic"}}>Hotel&Restaurant TROJA</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                    <img id="fotoPr" src="./images/troja.jpg" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="./images/trofta.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2 style ={{fontStyle: "italic"}}>Hotel&Restaurant Trofta</h2> 
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
            <div className="sliderdiv">
            <h2 id="top2">Shijoni atraksionet tjera!</h2>
                <Slider />
            </div>
            
        </main>


    );
}
export default <RecommendationIstog />;