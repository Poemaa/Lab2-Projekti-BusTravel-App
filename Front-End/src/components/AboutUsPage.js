import SpinTheWheel from "./SpinTheWheel";

function AboutUsPage()
{

  return (
    <main>
      <div className="firstBox">
        <div className="firstfirstBox" style={{fontFamily:'Inter'}}> <h2>NUK DINI SE KU TE SHKONI? </h2>
      <br></br>  <p style={{fontFamily:'Inter'}}>Provoni Wheel dhe vendosni destinacionin tuaj te rradhes<br></br> Kosova ofron shume destinacione te ndryshme me Lorem ipsum dolor 
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
        
        <li><img src="./images/prizren.jpg"></img> <h2>Prizren</h2><button>Shiko Rekomandimet</button></li>
        <li><img src="./images/Radavc.jpg"></img> <h2>Radavc</h2><button>Shiko Rekomandimet</button></li>
        <li><img src="./images/Prishtina.jpg"></img> <h2>Prishtine</h2><button>Shiko Rekomandimet</button></li>
        <li><img src="./images/Brezovica.jpg"></img> <h2>Brezovice</h2><button>Shiko Rekomandimet</button></li>


      </div>


    </main>
  );
  /**return (






    <div className="page">
      <h2>Rreth nesh</h2>
      <p>Ne jemi nje agjenci e udhetimeve e bazuar ne Kosove.</p>
      <h2>Rreth Kompanive</h2>
      <div className="company">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis at bibendum
          Fusce eget tristique felis. Integer id purus id lacusmalesuada tincidunt.
          Duis auctor iaculis felis, eu porttitor justopulvinar at. Nam tinciduntv
          in ante aliquet, eu fringilla quameleifend. Suspendisse vel lectus dolor
          ecenas a turpis non metusaccumsan rhoncus.</p>
        <img src="./images/bus.jpg" alt="fotoBus" width={"300px"} height={"150px"} />
      </div>

      <div>
        <SpinTheWheel />
      </div>

      <h2>Na Kontaktoni</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
        bibendum nisi. Fusce eget tristique felis. Integer id purus id lacus
        malesuada tincidunt. Duis auctor iaculis felis, eu porttitor justo
      </p>

    </div>
    );
**/

}

export default <AboutUsPage />;