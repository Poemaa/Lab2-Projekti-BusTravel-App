import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




export const Location = () => {

  const [dbLocation, setdbLocation] = useState([]);

  function getLocations(){
    const url = 'https://localhost:7013/api/Location'; 
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

  function deleteLocations(LocationId){
    const url = `https://localhost:7013/api/Location/${LocationId}`; 
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
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "13%"}}>
      <h3>Lokacionet</h3>
    <table className='table table-striped'>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th scope='col'> Lokacioni ID</th>
          <th scope='col'>Emri</th> 
          <th> </th>
          <th><Link to="/addLocation" onClick={() => {window.location.href="/addLocation"}} className="btn btn-secondary custom-btn">Shto Lokacion</Link> </th>
        </tr>
      </thead>
      <tbody>
          {dbLocation.map(dbLocation => (
          <tr key={dbLocation.LocationId}>
          <td>{dbLocation.LocationName}</td>
          <td><Link to={`/editLocation/${dbLocation.LocationId}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editLocation/${dbLocation.LocationId}`}}>Edito</Link></td>
          <td><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbLocation.LocationId}"? `)) deleteLocations(dbLocation.LocationId)}} className="btn btn-secondary">Fshi</button></td>
        </tr>   
          ))}
      </tbody>

    </table>
    
  </div>
  )

}
export default <Location/>;
