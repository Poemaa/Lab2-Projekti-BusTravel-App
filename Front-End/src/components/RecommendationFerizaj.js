import React from "react";
import Slider from "./SliderFerizaj"
import {MdRestaurantMenu} from "react-icons/md"
import {AiOutlinePicture} from "react-icons/ai"

function RecommendationFerizaj()
{
    return (

        <main>

            <div className="pr1">
                <img id="fotoPr" src="https://www.skyscrapercity.com/attachments/fb_img_1600721573250-jpg.574028/" width={"950"} height={"600"}></img>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',marginLeft:'60px'}} >
               <a style={{textDecoration:'none'}}href="#at"> <button style={{borderRadius:'40px', width:'300px',textDecoration:'none'}}>Shiko Atraksionet < AiOutlinePicture size='20px' style={{marginLeft:'8px'}}></ AiOutlinePicture></button></a>
               <a style={{ width:'300px',textDecoration:'none'}}href="#pr5"><button style={{borderRadius:'40px',width:'300px',textDecoration:'none'}}>Shiko Restaurantet< MdRestaurantMenu size='20px' style={{marginLeft:'8px'}}></ MdRestaurantMenu></button></a>
                <h1 id="eksploroni">Eksploroni <br></br> Ferizajin!</h1>
                </div>
               
               
            </div>
            <h2 className="top">Top Atraksionet</h2>

            <div className="pr2" id="at">
                <p> <br></br> <br></br> 
                <h2 style ={{fontStyle: "italic"}}>Ujëvara Resort</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                <img id="fotoPr" src="https://150020446.v2.pressablecdn.com/wp-content/uploads/SEPT-NEWS-PG-12-STORY-2-PIC-1-580x613.jpg" width={"500"} height={"300"}></img>
            </div>

            <div className="pr3">
                <img id="fotoPr" src="https://www.graffitistreet.com/wp-content/uploads/2021/01/street-art-Ferizaj-Kosovo-Artist-Axel-Void-x-Helen-Bur-pc-Aruallan-1024x682.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br>
                <h2 style ={{fontStyle: "italic"}}>Ferizaj "City of murals"</h2>
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
                <h2 style ={{fontStyle: "italic"}}>Restaurant Saffran</h2>
                    Sed ut perspiciatis unde omnis iste natus error <br></br>sit 
                    voluptatem accusantium doloremque laudantium, <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>inventore veritatisv
                    eritat et quasi et erita <br></br>totam 
                    rem aperiam,eaque ipsa quae ab illo <br></br>
                    Sed ut perspiciatis unde omnis iste natus error </p>
                    <img id="fotoPr" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/6e/cb/08/saffran.jpg" width={"500"} height={"300"}></img>
            </div>
            <div id="pr4">
                <img id="fotoPr" src="https://restorante.cityonline.biz/wp-content/uploads/2021/08/67113253_1279515255550707_8531265106808406016_n.jpg" width={"500"} height={"300"}></img>
                <p> <br></br> <br></br> 
                <h2 style ={{fontStyle: "italic"}}>Cotto Brasserie & Restaurant</h2> 
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
export default <RecommendationFerizaj />;