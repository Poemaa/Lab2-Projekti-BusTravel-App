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

      <h2>Prishtina</h2>
      <div className="secondBox">
        
        <li>Newborn</li>
        <li>Kafet e Vogla</li>
        <li>Muzeu</li>
        <li>Sheshi</li>
      </div>

      <h2>Prizreni</h2>
      <div className="thirdBox">
        <li>Shatervani</li>
        <li>Kalaja</li>
        <li>kafet</li>
        <li>kafet</li>
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