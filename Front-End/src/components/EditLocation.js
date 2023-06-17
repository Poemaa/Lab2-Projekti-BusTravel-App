import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



  const EditLocation = (props) => {

  const [formData, setFormData] = useState([]);
  const locationId = (props.match.params.id);

  console.log(props);

  function getLocationById(){
    const url = `https://localhost:7191/api/location/city/${locationId}`;
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(locationsFromServer => {
      console.log(locationsFromServer);
      setFormData(locationsFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(getLocationById,[]);

  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e => {
    e.preventDefault();

    const LocationToEdit = {
    
      locationName: formData.locationName
    };

    const url = 'https://localhost:7191/api/location/city';

    fetch(url, {
      method: 'PUT',
    
      body: JSON.stringify(LocationToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error => {
      console.log(error);
    });

    alert('Lokacioni u editua me sukses!');
    {window.location.href="/location"}


  });

  return (
    <div style={{marginRight: "33%", paddingLeft: "18%"}}>
      <form className="w-100 px-5" action="">
        <h1 className="mt-5">Edito Lokacionin</h1>

        <div className="mt-5">
          <label className="h3 form-label">Location Id</label>
          <input value={locationId} name="LocationId" type="number" className="form-control" onChange={handleChange} />
        </div>

        <div className="mt-4">
          <label className="h3 form-label">Emri</label>
          <input value={formData.locationName} name="locationName" type="text" className="form-control" onChange={handleChange}/>
        </div>

        <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Edito</button>
        <Link to="/location" onClick={() => {window.location.href="/location"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>

      </form>
      

    </div>
  )
}
export default <EditLocation/>;