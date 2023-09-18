import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';



  const EditBusItinerary = (props) => {

  const [formData, setFormData] = useState([]);
  const {busItineraryId}= useParams();
  

  console.log(props);

  function getBusItineraryById(){
    const url = `https://localhost:7191/api/busItinerary/busItineraries/${busItineraryId}`; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(itinerariesFromServer => {
      console.log(itinerariesFromServer);
      setFormData(itinerariesFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(getBusItineraryById,[]);

  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e => {
    e.preventDefault();

    const ItineraryToEdit = {
  
      departureTime: formData.departureTime,
      arrivalTime: formData.arrivalTime,
      departureTime: formData.departureTime,
      busLineId: formData.busLineId
      
    };

    const url = `https://localhost:7191/api/busItinerary/busItineraries`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ItineraryToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error => {
      console.log(error);
    });

    alert('Itinerari u editua me sukses!');
    {window.location.href="/busItinerary"}


  });

  return (
    <div style={{marginRight: "33%", paddingLeft: "18%"}}>
      <form className="w-100 px-5" action="">
        <h1 className="mt-5">Edito Itinerarin</h1>

        <div className="mt-4">
          <label className="h3 form-label">Koha e Nisjes</label>
          <input value={formData.departureTime} name="itineraryDeparture" type="time" className="form-control" onChange={handleChange}/>
        </div>

        <div className="mt-4">
          <label className="h3 form-label">Koha e Mberritjes</label>
          <input value={formData.arrivalTime} name="itineraryArrival" type="time" className="form-control" onChange={handleChange}/>
        </div>

        <div className="mt-4">
          <label className="h3 form-label">Linja</label>
          <input value={formData.busLineId} name="itineraryBusLine" type="number" className="form-control" onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Edito</button>
        <Link to="/busItinerary" onClick={() => {window.location.href="/busItinerary"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>

      </form>
      

    </div>
  )
}

export default <EditBusItinerary/>;
