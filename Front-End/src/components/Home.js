import React from "react";
import { HiOutlineTicket } from "react-icons/hi"
import { FaBus } from "react-icons/fa"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { Link } from "react-router-dom";


const Home = () =>
{
  return (
    <div className="home-content" style={{backgroundColor:'#fffdf6'}}>
      <div className="home-one">
        <div id="homeText" style={{ marginRight: '150px', backgroundColor: "rgba(211,211,211,0.7)", borderRadius: '30px', width: '540px', height: '320px', padding: '10px', boxShadow: '10px 10px grey' }}>
          <p>
            Destinacionet m&euml; t&euml; mira n&euml; Kosov&euml; !
          </p>
          <p style={{ fontWeight: 'bold', padding: '10px', fontSize: '24px', lineHeight: '1.7' }}>
            UDH&Euml;TO ME NE - SHIJO T&Euml; GJITHA
            <br></br>
            DESTINACIONET Q&Euml; KOSOVATOUR
            <br>
            </br>OFRON DHE B&Euml;HU PJES&Euml; E JONA!
          </p>


          <a href="/lines" style={{ textDecoration:'none' }}> <button style={{ width: '290px', textAlign: 'center', fontFamily: 'Inter', fontSize: '18px', opacity: '87%', borderRadius: '50px' }}>Rezervo bileten tende tani</button> </a>   <br></br>

          <br></br>


          <a href="/rekomandimet" style={{ textDecoration: 'none' }}><button style={{ width: '450px', textAlign: 'center', fontFamily: 'Inter', fontSize: '18px', opacity: '88%', textDecoration: 'none',  borderRadius: '50px'}}>Shiko rekomandimet</button></a>   <br></br>

          <a href="#harta" style={{ textDecoration: 'none' }}><button style={{ width: '450px', textAlign: 'center', fontFamily: 'Inter', fontSize: '18px', opacity: '88%',  borderRadius: '50px'}}>Shiko harten per orientim</button></a>     <br></br>
        </div>
        <div id="map" style={{ display: 'flex', float: 'left', paddingTop: '120px'}}>
          <img src="./images/kosovoMap4.png" alt="Kosova" width={"650"} height={"650"} />
          </div>

    
</div>
        <br></br> <br></br>
        <br></br>
        <br></br>


      <div className="home-two">
        <br></br>
        <h1 style={{ color: '#1A263F', fontFamily: 'Inter',paddingTop:'125px' }}>Sh&euml;rbimet q&euml; ne i ofrojm&euml;!</h1>
        <br></br>
        <br></br> <br></br>
        <div id="boxDiv">
          <div className="box">
            <HiOutlineTicket size='45px'>
            </HiOutlineTicket>

           <h4>Rerzervimet</h4>
        
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
          <img src="./images/c1.jpg" alt="foto" width={"400"} height={"350"} style={{ marginRight: '30px', borderRadius: '40px' }} /> <br></br>
          <h3>Kompania 1 </h3>
        </div>

        <div className="fotoComp">
          <img src="./images/c2.jpg" alt="foto" width={"400"} height={"350"} style={{ marginRight: '50px', marginLeft: '50px', borderRadius: '40px' }} /><br></br>
          <h3 style={{ marginLeft: '90px' }}>Kompania 2</h3>
        </div>

        <div className="fotoComp">
          <img src="./images/c3.jpg" alt="foto" width={"400"} height={"350"} style={{ marginLeft: '30px', borderRadius: '40px' }} /><br></br>
          <h3 style={{ marginLeft: '60px' }}>Kompania 3</h3>
        </div>
      </div>
      <br></br><br></br>
      <br></br><br></br>  

      <div>
      <img src="./images/busi2.png" alt="foto" width={"1519"} height={"550"}  />
      
      <div className="Videodiv">
        <div id="video">
          <iframe width="860" height="480" style={{ borderRadius: '300px' }} controls autoplay src="https://www.youtube.com/embed/vb0zobTdTRQ?autoplay=1&loop=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <br></br>
        <div id="textVideo" style={{ padding: '86px', lineHeight: '1.7' }}>
          <h2>Zbuloni vendet me unike qe Kosova ofron dhe lejoni qe bukurite e saj te ju inspirojne per udhetimet tuaja te ardhshme </h2>
          <br></br>
          <button style={{borderRadius: '50px'}}><Link to = "/lines" style={{textDecoration:'none', color:'white'}}>Rezervoni bileten tuaj tani! </Link></button>
        </div>
        </div>
      </div>
      
      <div className="quotes">
        <div id="color"></div>
        <div id="quote" style={{ backgroundColor: 'lightgray', height: '260px', alignContent: 'center', paddingTop: '20px', paddingLeft: '50px', paddingRight: '50px', marginTop: '100px' }}>
          <br></br><br></br>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
      </div>

<div className="partners">
<h1 style={{paddingTop:'100px',color:'darkslategrey'}}>Partner&#235;t tan&#235;</h1>
<br></br>
<div className="par1">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Emblema_e_qeveris_se_kosoves.png" width={"100"} height={"100"}></img>
        <img src="https://topkonkurse.com/wp-content/uploads/wp-job-board-pro-uploads/_employer_featured_image/2023/05/Llogo-Prizren-1.jpg" width={"100"} height={"100"}></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stema_e_Komun%C3%ABs_Pej%C3%AB.svg/800px-Stema_e_Komun%C3%ABs_Pej%C3%AB.svg.png" width={"100"} height={"100"}></img>
        <img src="https://yt3.googleusercontent.com/rP_fa2QHH9cz78m3O2kkpEDUOzDUsuzpz7KI8KewER1500oZeUBd40iK-mTY6LpU-eaHM-iq1dg=s900-c-k-c0x00ffffff-no-rj" width={"100"} height={"100"} style={{borderRadius:'50px'}}></img>
        </div>
        
  <div className="par2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNt6ns_0ccaT9p5CQSkLU0icwkypPDwugwbK-CoIKtjZS52NaHq4FcDkPV1JtZMcHR_C4&usqp=CAU" width={"100"} height={"100"}></img>
        <img src="https://shpejtimi-images-development-eu-central-1.s3.eu-central-1.amazonaws.com/750843ed-7a84-448c-aaf7-b2b74292bf31" width={"130"} height={"100"}></img>
        <img src="https://kosovajob.com/admin/companyLogos/1535371039.png" width={"100"} height={"100"}></img>
        <img src="https://www.halimajreisen.com/wp-content/uploads/2016/05/halimaj-komplet.png" width={"100"} height={"100"} style={{borderRadius:'20px'}}></img>
</div>
</div>
<br></br><br></br><br></br><br></br><br></br>

<section>
<h1 className="galeriah" style={{color:'white',fontFamily:'Inter',paddingTop:'21px'}}>Pse duhet ta vizitoni Kosov&#235;n?</h1>

  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>
<br></br><br></br><br></br>

<div className="galeriaHome">
<div className="gallerypics">

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/bg71.jpg">
      <img src="./images/bg71.jpg" alt="visit" width="650" height="350" />
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/bg72.jpg">
      <img src="./images/bg72.jpg" alt="Forest" width="650" height="800"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/bg73.jpg">
      <img src="./images/bg73.jpg" alt="Visit" width="650" height="530"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/nightlife.jpg">
      <img src="./images/nightlife.jpg" alt="Mountains" width="650" height="450"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>
</div>

<div className="gallerypics2">

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/bg4.jpg">
      <img src="./images/bg4.jpg" alt="visit" width="650" height="780" />
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/cafe.jpg">
      <img src="./images/cafe.jpg" alt="Forest" width="650" height="500"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/rugova.jpg">
      <img src="./images/rugova.jpg" alt="Visit" width="650" height="520"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="./images/bg74.jpg">
      <img src="./images/bg74.jpg" alt="Mountains" width="650" height="400"/>
    </a>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
  </div>
</div>


</div>
<div class="clearfix"></div>
</div>

<div className="weatherdiv">
<img src="./images/buus2.png" alt="foto" width={"550"} height={"450"} style={{ marginLeft: '150px', borderRadius: '40px' }} />
  <div className="weathertext">
<h1>Do te udhetoni keto dite?</h1>
<h2>Shikoni motin per secilin qytet qe deshironi!</h2>
<a href='/weather' style={{textDecoration:'none'}}><button>Moti →</button></a>
</div>
 <br></br>





</div>


      <div className="map" id="harta" style={{ marginTop: '130px' }}>
        <br></br>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
          <h2 style={{ marginTop: '90px', marginRight: '60px',color:'darkslateblue' }}>
            Shikoni destinacionet e shumta qe ofrohen <br></br>ne faqe duke u
            orientuar ne harten e Kosoves</h2>
          <img src="./images/f1.svg" alt="foto" width={"300"} height={"320"} style={{ marginLeft: '80px' }} /> <br></br>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.2115854219!2d21.11752769067842!3d42.66637271821957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1686593351428!5m2!1sen!2s" width="750" height="450" style={{ alignContent: 'right' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <br></br>  <br></br>  <br></br>
      <div className="counter">

      </div>
    </div>
    


  );
}

export default <Home />;
