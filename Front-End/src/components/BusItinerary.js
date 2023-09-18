import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



  const BusItinerary = () => {

    const [dbBusItinerary, setdbBusItinerary] = useState([]);
    const [sorted, setSorted] = useState({sorted:'id', reversed:false});

    function getBusItineraries(){
      const url = 'https://localhost:7191/api/busItinerary/busItineraries'; 
      fetch(url, {
        method: 'GET',
       
      })
      .then(response => response.json())
      .then(busItinerarysFromServer => {
        console.log(busItinerarysFromServer);
        setdbBusItinerary(busItinerarysFromServer);
      })
      .catch(error => {
        console.log(error);
      });
    }
  
    function deleteBusItineraries(busItineraryId){
      const url = `https://localhost:7191/api/busItinerary/busItineraries/${busItineraryId}`; 
      fetch(url, {
        method: 'DELETE',
        
      })
      .then(response => {
        if (response.ok) {
          console.log(response);
          alert('Itinerari u fshi me sukses!');
          getBusItineraries();
        } else {
          throw new Error('Failed to delete busItinerary.');
        }
      })
      .catch(error => {
        console.log(error);
        alert('Ky Itinerar nuk mund te fshihet!');
      });
  }

  const sortById = () => {
    setSorted({sorted:"", reversed: !sorted.reversed});
    const itineraryCopy = [...dbBusItinerary];
    itineraryCopy.sort((itineraryA,itineraryB) =>
    {
      if(sorted.reversed){
        return itineraryA.busItineraryId - itineraryB.busItineraryId;
      }
      return itineraryB.busItineraryId - itineraryA.busItineraryId;
      })
   
  setdbBusItinerary(itineraryCopy);
  };
  
    useEffect(getBusItineraries,[]);
  
    return (
      <div>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Itineraret</h3>
      <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
      <table className='table table-striped' style={{width:'900px',marginTop:'80px',}}>
        <thead>
          <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"150px",height:'50px'}} scope='col'> Itinerari ID</th>
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}}scope='col'>Koha e Nisjes</th> 
             <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"200px"}} scope='col'>Koha e Mberritjes</th> 
              <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Kohezgjatja</th> 
              <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Linja</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"250px"}}><Link style={{color:'white', textDecoration:'none'}} to="/addBusItinerary" onClick={() => {window.location.href="/addBusItinerary"}} className="btn btn-secondary custom-btn">Shto Itinerarin</Link> </th>
            <th style={{width:'150px',backgroundColor:'white'}}> <button style={{fontFamily:'Inter',fontSize:'11px', width:'102px',textAlign:'center',width:"100px"}} onClick={sortById}>ASC↑/DSC↓</button></th>
          </tr>
        </thead>
        <tbody>
            {dbBusItinerary.map(dbBusItinerary => (
            <tr key={dbBusItinerary.busItineraryId}>
            <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{dbBusItinerary.busItineraryId}</td>
            <td  style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusItinerary.departureTime}</td>
             <td  style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusItinerary.arrivalTime}</td>
              <td  style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusItinerary.duration}</td>
              <td  style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusItinerary.busLineId}</td>
            <td  style={{backgroundColor:'#F5F5F5'}}><Link style={{textDecoration:'none'}} to={`/editBusItinerary/${dbBusItinerary.busItineraryId}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editBusItinerary/${dbBusItinerary.busItineraryId}`}}><button>Edito</button></Link></td>
            <td style={{backgroundColor:'#F5F5F5'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Itinerarin? "${dbBusItinerary.busItineraryId}"? `)) deleteBusItineraries(dbBusItinerary.busItineraryId)}} className="btn btn-secondary">Fshi</button></td>
          </tr>   
            ))}
        </tbody>
  
      </table>
      <br></br>   <br></br>
      <img src="./images/time.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px',marginTop:'200px'}} />
      </div>

    </div>
    )
  
  }
export default <BusItinerary/>;
