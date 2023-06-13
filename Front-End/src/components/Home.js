import React from "react";
import {HiOutlineTicket} from "react-icons/hi"
import {FaBus} from "react-icons/fa"
import {TiWeatherPartlySunny} from "react-icons/ti"

function Home() {
  return (
      <div className="home-content">
        <div className="home-one">
        <div id="homeText" style={{marginRight:'150px', backgroundColor:"rgba(211,211,211,0.6)", borderRadius:'30px', width:'540px', height:'320px', padding:'10px', boxShadow: '10px 10px darkgrey' }}>
       <p>
       Destinacionet m&euml; t&euml; mira n&euml; Kosov&euml; !
       </p>
       <p style={{fontWeight:'bold',padding:'10px', fontSize:'24px', lineHeight:'1.7'}}>
       UDH&Euml;TO ME NE - SHIJO T&Euml; GJITHA 
       <br></br>
       DESTINACIONET Q&Euml; KOSOVATOUR 
       <br>
       </br>OFRON DHE B&Euml;HU PJES&Euml; E JONA!
       </p>
       
       
       <a href="" style={{textDecoration:'none'}}><button style={{width:'290px', textAlign:'center',fontFamily:'Inter',fontSize:'18px',opacity:'85%',borderRadius:'50px'}}>Rezervo bileten tende tani</button></a>   <br></br>     
      
       <br></br>
      
      
       <a href="#infoComp" style={{textDecoration:'none'}}><button style={{width:'450px', textAlign:'center',fontFamily:'Inter',fontSize:'18px',opacity:'85%', textDecoration:'none'}}>Meso me teper rreth kompanive</button></a>   <br></br>     
   
       <a href="#harta" style={{textDecoration:'none'}}><button style={{width:'450px', textAlign:'center',fontFamily:'Inter',fontSize:'18px',opacity:'85%'}}>Shiko harten per orientim</button></a>     <br></br>   
       </div>
          <div id="map" style={{display:'flex', float:'left',paddingTop:'120px'}}>
        <img src="./images/kosovoMap.avif" alt="Kosova" width={"450"} height={"450"} />
        
        </div>
        </div>
        <br></br><br></br><br></br>
        <div className="home-two">
          <h1 style={{color:'#1A263F', fontFamily:'Inter'}}>Sh&euml;rbimet q&euml; ne i ofrojm&euml;!</h1>
      <br></br>
      <br></br>
      <div id="boxDiv">
        <div className="box">
          <HiOutlineTicket size='45px'>
          </HiOutlineTicket>

           <h4>Linjat e Autobusit</h4>
        
        <p>Rezervimi i nje apo me shume biletave ne destinacionet me te mira ne Kosove! </p>

        </div>
       
        <div className="box">
        <FaBus size='40px'>
        </FaBus>

        <h4>Linjat e Autobusit</h4>
        <p>Shfaqja e linjave te autobusit me datat dhe kohen e nisjes per destinacionet e ndryshme! </p>

        </div>

        <div className="box">
        < TiWeatherPartlySunny size='50px'>
        </ TiWeatherPartlySunny>
       
        <h4>Moti</h4>

        <p>Shfaqja e motit ne kohe reale per destinacionet e perzgjedhura dhe informimi rreth statistikave te motit!</p>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>   <br></br>   <br></br>   <br></br>
        </div>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <div className="companyInfo">
          <div className="fotoComp" id="infoComp">
        <img src="./images/c1.jpg" alt="foto" width={"400"} height={"350"} style={{marginRight:'30px',borderRadius:'5px 60px 5px'}} /> <br></br>
        <h3>Kompania 1 </h3>
        </div>

        <div className="fotoComp">
        <img src="./images/c2.jpg" alt="foto" width={"400"} height={"350"} style={{marginRight:'50px',marginLeft:'50px',borderRadius:'5px 60px 5px'}} /><br></br>
        <h3 style={{marginLeft:'90px'}}>Kompania 2</h3>
        </div>

        <div className="fotoComp">
        <img src="./images/c3.jpg" alt="foto" width={"400"} height={"350"} style={{marginLeft:'30px',borderRadius:'5px 60px 5px'}} /><br></br>
        <h3 style={{marginLeft:'60px'}}>Kompania 3</h3>
      </div>
        </div>
        <br></br><br></br>
        <br></br><br></br>  <br></br><br></br>
        <br></br><br></br>
<div className="Videodiv">
  <div id="video">
        <iframe width="860" height="480" style={{borderRadius:'300px'}} controls autoplay src="https://www.youtube.com/embed/vb0zobTdTRQ?autoplay=1&loop=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <br></br>
        <div id="textVideo" style={{padding:'86px',lineHeight:'1.7'}}>
          <h2>Zbuloni vendet me unike qe Kosova ofron dhe lejoni qe bukurite e saj te ju inspirojne per udhetimet tuaja te ardhshme </h2>
       <br></br>
       <button>Rezervoni bileten tuaj tani! </button>
        </div>
        </div>
        <br></br><br></br>
        <br></br><br></br>
        <div className="quotes">
          <div id="color"></div>
        <div id="quote" style={{backgroundColor:'lightgray', height:'260px', alignContent:'center',paddingTop:'20px', paddingLeft:'50px',paddingRight:'50px', marginTop:'100px'}}>
          <br></br><br></br>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
        </div>
        <div className="map" id="harta" style={{marginTop:'130px'}}>
          <br></br>
          <div style={{display:'flex', flexDirection:'column', alignContent:'center'}}>
          <h2 style={{marginTop:'90px',marginRight:'60px'}}>
            Shikoni destinacionet e shumta qe ofrohen <br></br>ne faqe duke u 
           orientuar ne harten e Kosoves</h2>
           <img src="./images/f1.svg" alt="foto" width={"300"} height={"320"} style={{marginLeft:'80px'}} /> <br></br>
           </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.2115854219!2d21.11752769067842!3d42.66637271821957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1686593351428!5m2!1sen!2s" width="750" height="450" style={{alignContent:'right'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <br></br>  <br></br>  <br></br>
        </div>

      
  );
}

export default <Home/>;
