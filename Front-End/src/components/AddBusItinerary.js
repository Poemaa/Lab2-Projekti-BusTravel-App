import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


 const AddBusItinerary = () => {

  const [formData, setFormData] = useState(null);

  const handleDepartureChange = (e => {
    setFormData({
      ...formData,
      departureTime: e.target.value
    });
  });

  const handleArrivalChange = (e => {
    setFormData({
      ...formData,
      arrivalTime: e.target.value
    });
  });

  const handlebusLineIdChange = (e => {
    setFormData({
      ...formData,
      busLineId: e.target.value
    });
  });


  const handleSubmit = (e => {
    e.preventDefault();

    const BusItineraryToAdd = {
     
     
      departureTime: formData.departureTime,
      arrivalTime:formData.arrivalTime,
      busLineId:formData.busLineId,
      
    };
    
  
    const url = `https://localhost:7191/api/busItinerary/busItineraries`; 

        fetch(url, {
          method: 'POST',
          headers: {
        
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(BusItineraryToAdd)
        })
        .then(response => response.json())
        .then(responseFromServer => {
          console.log(responseFromServer);
        })
        .catch(error => {
          console.log(error);
        });
  
        alert('Itinerari u shtua me sukses!');
        {window.location.href="/busItinerary"}
  
      }
  
    );

  return(
<div className="addItinerari" style={{marginRight: "33%", paddingLeft: "18%", display:'flex', flexDirection:'row'}}>
    <form className="w-100 px-5" action="">
      <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Itinerar te ri:</h1>
  <br></br>
 
      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Koha e Nisjes</label>
        <input name="itinearayDep" id="itinearay_Dep" type="text" className="form-control" onChange={handleDepartureChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Koha e Mberritjes</label>
        <input name="itinearayArr" id="itinearay_arr" type="text" className="form-control" onChange={handleArrivalChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Linja</label>
        <input name="itinLine" id="itin_Line" type="number" className="form-control" onChange={handlebusLineIdChange}/>
      </div>

      <br></br>
        <button style={{marginLeft:'300px',marginRight:'150px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Shto</button>
        <br>
        </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/busItinerary" onClick={() => {window.location.href="/busItinerary"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
      

      </form>
      <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
  </div>
  )
  
}
export default <AddBusItinerary/>;