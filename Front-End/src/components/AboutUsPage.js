import { Link } from "react-router-dom";
import SpinTheWheel from "./SpinTheWheel";

function AboutUsPage()
{

  return (
    <main>
      <div className="firstBox">
        <div className="firstfirstBox" style={{ fontFamily: 'Inter' }}> <h2>NUK DINI SE KU TE SHKONI? </h2>
          <br></br>  <p style={{ fontFamily: 'Inter' }}>Provoni Wheel dhe vendosni destinacionin tuaj te rradhes<br></br> Kosova ofron shume destinacione te ndryshme me Lorem ipsum dolor
            <br></br>sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam, quis nostrud exercitation
            <br></br>ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="spinTheWheel">
          <SpinTheWheel />
        </div>
      </div>

      <h1 >Rekomandimet per qytetin e zgjedhur!</h1>
      <div className="secondBox">

      
        <li><img src="./images/prizren.jpg"></img> <h2>Prizren</h2> <Link to="/recommendationPrizren" style={{textDecoration:'none'}}> <button >Shiko Rekomandimet</button></Link></li>
        <li><img src="./images/Radavc.jpg"></img> <h2>Radavc</h2><button>Shiko Rekomandimet</button></li>
        <li><img src="./images/Prishtina.jpg"></img> <h2>Prishtine</h2><button>Shiko Rekomandimet</button></li>
        <li><img src="./images/Brezovica.jpg"></img> <h2>Brezovice</h2><button>Shiko Rekomandimet</button></li>


      </div>


    </main>
  );



}

export default <AboutUsPage />;