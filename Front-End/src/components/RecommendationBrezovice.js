import React from "react";
import Slider from "./SliderBrezo"
import {FiCoffee} from "react-icons/fi"
import {AiOutlinePicture} from "react-icons/ai"

function RecommendationBrezovice()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="./images/Brezovica.jpg" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#atB"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}} href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Restorantet  < FiCoffee size='20px' style={{marginLeft:'8px'}}></ FiCoffee></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Brezovicen!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="atB">
                <p> <br></br> <br></br> 
                <h2>Teleferiku </h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Brezovica3.JPG" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="https://www.ekapija.com/thumbs/skijanje_1_200715_tw1024.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Klasat e Skijimit per te gjitha moshat </h2> 
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
            <br></br> <br></br> <br></br> <br></br> 
            <h2 className="top">Restorantet</h2>
            <div id="pr5">
                <p> <br></br> <br></br> 
                <h2>Brezovica Hotel & Restaurant</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/297021696.jpg?k=138682126a48f08d38f873e3c9e126c3e96f25c62c172a5ba734312a89140dc8&o=&hp=1" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="https://pine-hotel-brezovice.booked.net/data/Photos/OriginalPhoto/7676/767632/767632054/Pine-Hotel-Brezovice-Exterior.JPEG" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2>Pine Hotel & Restaurant</h2> 
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
export default <RecommendationBrezovice />;