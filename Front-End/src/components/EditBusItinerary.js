import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




  const EditBusItinerary = () => {

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

  
  
}
export default <EditBusItinerary/>;
