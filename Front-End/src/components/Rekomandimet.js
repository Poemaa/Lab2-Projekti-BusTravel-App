import { Link } from "react-router-dom";
import SpinTheWheel from "./SpinTheWheel";


function Rekomandimet()
{

  return (
    <main>
      <div className="firstBox">
        <div className="firstfirstBox" style={{ fontFamily: 'Inter' }}> <h2>NUK DINI SE KU TE SHKONI? </h2>
          <br></br>  <p style={{ fontFamily: 'Inter' }}>Provoni Wheel dhe vendosni destinacionin tuaj te rradhes<br></br> Kosova ofron shume destinacione te ndryshme me Lorem ipsum dolor
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

        <li><img src="./images/prizren.jpg"></img> <h2>Prizren</h2> <Link to="/recommendationPrizren" style={{textDecoration:'none'}}> <button >Shiko Rekomandimet</button></Link></li>
        
        <li><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/b4/66/the-village-shopping.jpg?w=1200&h=1200&s=1"></img> <h2>Ferizaj</h2> <Link to="/recommendationFerizaj" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
        
        <li><img src="./images/Prishtina.jpg"></img> <h2>Prishtine</h2> <Link to="/recommendationPrishtine" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
         
        <li><img src="./images/Brezovica.jpg"></img> <h2>Brezovice</h2><Link to="/recommendationBrezovice" style={{textDecoration:'none'}}> <button>Shiko Rekomandimet</button></Link></li>

      </div>
      <div className="fourthBox">

<li><img src="./images/peja.jpg"></img> <h2>Peje</h2> <Link to="/recommendationPeja" style={{textDecoration:'none'}}> <button >Shiko Rekomandimet</button></Link></li>

<li><img src="./images/gjakove.jpg"></img> <h2>Gjakove</h2> <Link to="/" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>

<li><img src="./images/istog4.jpg"></img> <h2>Istog</h2><Link to="/recommendationIstog" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
 
<li><img src="./images/gjilan.png"></img> <h2>Gjilan</h2><Link to="/recommendationGjilan" style={{textDecoration:'none'}}><button>Shiko Rekomandimet</button></Link></li>
</div>
<br></br>
<br></br>
<br></br>
</div>



    </main>
  );



}

export default <Rekomandimet />;