import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




  const Location = () => {

  const [dbLocation, setdbLocation] = useState([]);

  function getLocations(){
    const url = 'https://localhost:7191/api/location/cities'; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(locationsFromServer => {
      console.log(locationsFromServer);
      setdbLocation(locationsFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function deleteLocations(locationId){
    const url = `https://localhost:7191/api/location/city/${locationId}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
      alert("Location u fshi me sukses!");
      getLocations();
    })
    .catch(error => {
      console.log(error);
      alert("Ky Lokacion nuk mund te fshihet!");
    });

  }

  useEffect(getLocations,[]);

  return (
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "13%",marginBottom:'100px'}}>
      <h3>Lokacionet</h3>
    <table className='table table-striped'>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th scope='col'> Lokacioni ID</th>
          <th scope='col'>Emri</th> 
          <th><Link to="/addLocation" onClick={() => {window.location.href="/addLocation"}} className="btn btn-secondary custom-btn">Shto Lokacion</Link> </th>
        </tr>
      </thead>
      <tbody>
          {dbLocation.map(dbLocation => (
          <tr key={dbLocation.locationId}>
          <td>{dbLocation.locationId}</td>
          <td>{dbLocation.locationName}</td>
          <td><Link to={`/editLocation/${dbLocation.locationId}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editLocation/${dbLocation.locationId}`}}>Edito</Link></td>
          <td><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbLocation.locationId}"? `)) deleteLocations(dbLocation.locationId)}} className="btn btn-secondary">Fshi</button></td>
        </tr>   
          ))}
      </tbody>

    </table>
    <br></br>   <br></br>
    
  </div>
  )

}
export default <Location/>;
