import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

 const AddLocation = () => {
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
     
     
      locationName: formData.locationName,
     
    };

      const url = `https://localhost:7191/api/location/city`;
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
          <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Lokacion te ri:</h1>
      <br></br>
     
          <div className="mt-5" style={{paddingLeft:'27%'}}>
            <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Emri</label>
            <input name="locationName" id="location_name" type="text" className="form-control" onChange={handleChange}/>
          </div>
<br></br>
          <button style={{marginLeft:'440px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_locationsubmit">Shto</button>
          <br>
          </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/location" onClick={() => {window.location.href="/location"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
        
        </form>
        <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
    </div>
  )
}
export default <AddLocation/>;