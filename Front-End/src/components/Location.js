import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



  const Location = () => {

  const [dbLocation, setdbLocation] = useState([]);
  const [sorted, setSorted] = useState({sorted:'id', reversed:false});

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
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Location u fshi me sukses!');
        getLocations();
      } else {
        throw new Error('Failed to delete location.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Ky Lokacion nuk mund te fshihet!');
    });
}

const sortByName = () => {
  setSorted({sorted:"", reversed: !sorted.reversed});
  const locationsCopy = [...dbLocation];
  locationsCopy.sort((locationA,locationB) =>
  {
    const fullnameA = locationA.locationName;
    const fullnameB = locationB.locationName;
 
    if(sorted.reversed){
      return fullnameB.localeCompare(fullnameA);
    }
 
    return fullnameA.localeCompare(fullnameB);
  })

setdbLocation(locationsCopy);
};

  useEffect(getLocations,[]);

  return (
    <div>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668', marginRight:'62%'}}>Lokacionet</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "13%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
    <table className='table table-striped' style={{width:'600px',marginTop:'60px'}}>
      <thead>
        <tr className="table">
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"150px",height:'50px'}} scope='col'> Lokacioni ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"200px"}} scope='col'>Emri</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}}><Link style={{color:'white', textDecoration:'none'}} to="/addLocation" onClick={() => {window.location.href="/addLocation"}} className="btn btn-secondary custom-btn">Shto Lokacion</Link> </th>
      <th style={{width:'150px'}}> <button style={{fontFamily:'Inter',fontSize:'11px', width:'102px',textAlign:'center',width:"100px"}} onClick={sortByName}>ASC↑/DSC↓</button></th>
        </tr>
      </thead>
      <tbody >
          {dbLocation.map(dbLocation => (
          <tr key={dbLocation.locationId}>
          <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{dbLocation.locationId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLocation.locationName}</td>
          <td style={{backgroundColor:'#F5F5F5'}}><Link style={{textDecoration:'none'}} to={`/editLocation/${dbLocation.locationId}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editLocation/${dbLocation.locationId}`}}><button>Edito</button></Link></td>
          <td style={{backgroundColor:'#F5F5F5'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbLocation.locationId}"? `)) deleteLocations(dbLocation.locationId)}} className="btn btn-secondary">Fshi</button></td>
        </tr>   
          ))}
      </tbody>

    </table>
    <br></br>   <br></br>
    <img src="./images/locationn.svg" alt="foto" width={"350"} height={"480"} style={{marginLeft:'200px',}} />
  </div>
  </div>
  )

}
export default <Location/>;
