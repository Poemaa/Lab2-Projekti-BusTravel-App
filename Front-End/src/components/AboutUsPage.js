import SpinTheWheel from "./SpinTheWheel";

function AboutUsPage()
{

  return(
    <main>
      <div className="firstBox">
        <div className="firstfirstBox">NUK DINI SE KU TE SHKONI</div>
        <div className="spinTheWheel">
          <SpinTheWheel />
        </div>
      </div>

      <div className="secondBox">
      <li>kafet</li>
      <li>kafet</li>
      <li>kafet</li>
      <li>kafet</li>
      </div>

      <div className="thirdBox">
      <li>kafet</li>
      <li>kafet</li>
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