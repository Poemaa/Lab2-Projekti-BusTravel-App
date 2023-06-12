import React from "react";

function Home() {
  return (
      <div className="home-content">
        <div className="home-one">
        <div id="homeText" style={{marginRight:'150px', backgroundColor:"lightgray", borderRadius:'30px', width:'540px', height:'260px', padding:'10px', }}>
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
        </div>
          <div id="map" style={{display:'flex', float:'left',paddingTop:'70px'}}>
        <img src="./images/kosovoMap.avif" alt="Kosova" width={"450"} height={"450"} />
        </div>
        </div>
        <div className="home-two">
          <h1>Sh&euml;rbimet q&euml; ne i ofrojm&euml;!</h1>
      <br></br>
      <br></br>
      <div id="boxDiv">
        <div className="box">
          <h4>Rezervimi i Biletave</h4>

        <p>Rezervimi i nje apo me shume biletave ne destinacionet me te mira ne Kosove! </p>

        </div>

        <div className="box">
        <h4>Linjat e Autobusit</h4>
          
        <p>Shfaqja e linjave te autobusit me datat dhe kohen e nisjes per destinacionet e ndryshme! </p>

        </div>

        <div className="box">
        <h4>Moti</h4>

        <p>Shfaqja e motit ne kohe reale per destinacionet e perzgjedhura dhe informimi rreth statistikave te motit!</p>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
      
  );
}

export default <Home/>;
