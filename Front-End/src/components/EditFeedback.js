import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




  const EditFeedback = () => {

  const [dbLocation, setdbLocation] = useState([]);

  function getLocations(){
    const url = 'https://localhost:7191/api/location/feedback'; 
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
export default <EditFeedback/>;
