import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export const AddLocation = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e => {
    e.preventDefault();

    const locationToAdd = {
      LocationId : formData.LocationId,
      LocationName: formData.LocationName
    };

      const url = 'https://localhost:7013/api/Location';
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'bearer ' + (localStorage.getItem("usertoken"))
        },
        body: JSON.stringify(locationToAdd)
      })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
      })
      .catch(error => {
        console.log(error);
      });

      alert('Location u shtua me sukses!');
      {window.location.href="/location"}


      

    }

  );
  return (
      <div style={{marginRight: "33%", paddingLeft: "18%"}}>
        <form className="w-100 px-5" action="">
          <h1 className="mt-5">Shto Lokacion te ri:</h1>

          
          <div className="mt-5">
            <label className="h3 form-label">ID Location</label>
            <input name="idLocation" id="user_locationId" type="text" className="form-control" onChange={handleChange}/>
          </div>

          <div className="mt-5">
            <label className="h3 form-label">Emri</label>
            <input name="LocationName" id="location_name" type="text" className="form-control" onChange={handleChange}/>
          </div>

          <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_locationsubmit">Shto</button>
          <Link to="/location" onClick={() => {window.location.href="/location"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>

        </form>
      
    </div>
  )
}
export default <AddLocation/>;