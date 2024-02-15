import { Link } from "react-router-dom";
import SpinTheWheel from "./SpinTheWheel";


function Rekomandimet()
{

  return (
    <main>
             <section style={{height:'250px',marginTop:'0.2px',background:'#243b55'}}>
<h1 style={{color:'white',fontFamily:'Inter',paddingTop:'41px',marginLeft:'-320px',fontSize:'32px'}}>Rekomandimet tona </h1>

  <div class='air air1' ></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>
      <div className="firstBox">

        <div className="firstfirstBox" style={{ fontFamily: 'Inter',color:'darkslategray' }}> 
 
        
        
        <h2>NUK DINI SE KU TE SHKONI? </h2>
          <br></br>  <p style={{ fontFamily: 'Inter', color:'darkslategray'}}>Provoni Wheel dhe vendosni destinacionin tuaj te rradhes<br></br> Kosova ofron shume destinacione te ndryshme me Lorem ipsum dolor
            <br></br>sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam, quis nostrud exercitation
            <br></br>ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <br></br>
           <a style={{textDecoration:'none'}} href="#rec"> <button style={{borderRadius:'30px',textDecoration:'none'}}>Klikoni per rekomandime!</button></a>
        </div>
        <div className="spinTheWheel">
          <SpinTheWheel />
        </div>
      </div>


<div className="recFoto" >
     <h1 style={{ fontFamily: 'Inter', color:'white' }}>Rekomandimet per qytetin e zgjedhur!</h1>
      <br></br>

      <div id="rec" className="secondBox">

        <li><img src="./images/prizren.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Prizren</h2> <Link to="/recommendationPrizren" style={{textDecoration:'none'}}> <button >Shiko Rekomandimet</button></Link></li>
        
        <li><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/b4/66/the-village-shopping.jpg?w=1200&h=1200&s=1"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Ferizaj</h2> <Link to="/recommendationFerizaj" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
        
        <li><img src="./images/Prishtina.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Prishtine</h2> <Link to="/recommendationPrishtine" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
         
        <li><img src="./images/Brezovica.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Brezovice</h2><Link to="/recommendationBrezovice" style={{textDecoration:'none'}}> <button>Shiko Rekomandimet</button></Link></li>

      </div>
      <div className="fourthBox">

<li><img src="./images/peja.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Peje</h2> <Link to="/recommendationPeja" style={{textDecoration:'none'}}> <button >Shiko Rekomandimet</button></Link></li>

<li><img src="./images/gjakove.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Gjakove</h2> <Link to="/" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>

<li><img src="./images/istog4.jpg"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Istog</h2><Link to="/recommendationIstog" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
 
<li><img src="./images/gjilan.png"></img> <h2 style={{color:'darkslategray',fontFamily:'Inter'}}>Gjilan</h2><Link to="/recommendationGjilan" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
</div>
<br></br>
<br></br>
<br></br>
</div>



    </main>
  );



}

export default <Rekomandimet />;