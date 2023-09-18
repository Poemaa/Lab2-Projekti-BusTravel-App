import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




  const BusLines = () => {

  const [dbBusLines, setdbBusLines] = useState([]);

  function getBusLines(){
    const url = 'https://localhost:7191/api/busLines/busLines'; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(busLinesFromServer => {
      console.log(busLinesFromServer);
      setdbBusLines(busLinesFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function deleteBusLines(id){
    const url = `https://localhost:7191/api/busLines/busLines/${id}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Kjo linje u fshi me sukses!');
        getBusLines();
      } else {
        throw new Error('Failed to delete busLine.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Kjo Linje nuk mund te fshihet!');
    });
}

  useEffect(getBusLines,[]);


  return (
   
<div>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Linjat</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "1%",marginBottom:'100px',display:'flex',flexDirection:'row',marginRight:'16px'}}>
    <table className='table table-striped' style={{width:'1600px',marginTop:'80px'}}>
      <thead>
        <tr className="table">
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px",height:'50px'}} scope='col'> Linja ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Lokacioni i Nisjes</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Lokacioni i Mberritjes</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Kompania</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"300px"}} scope='col'>Itinerari</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Numri i Uleseve</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Cmimi</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"90px"}}><Link style={{color:'white', textDecoration:'none'}} to="/addBusLine" onClick={() => {window.location.href="/addBusLine"}} className="btn btn-secondary custom-btn">Shto</Link> </th>
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"90px"}}> Fshi </th>
      </tr></thead>
      <tbody>
      {dbBusLines.map(dbBusLines => (
          <tr key={dbBusLines.id}>
          <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{dbBusLines.id}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusLines.departureCity}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusLines.arrivalCityId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusLines.companyId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px', height:'250px',textAlign:'center',paddingLeft:'50px'}}>{dbBusLines.busItineraries.map((itinerary) => (
            <table>
            <tr key={itinerary.busItineraryId}>
              <tr>Departure Time: {itinerary.departureTime}</tr>
              <tr>Arrival Time: {itinerary.arrivalTime}</tr>
              <hr></hr>
              </tr></table> ))}</td>

          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusLines.numberOfSeats}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbBusLines.price}</td>
          <td style={{backgroundColor:'#F5F5F5'}}><Link style={{textDecoration:'none'}} to={`/editBusLine/${dbBusLines.id}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editLocation/${dbBusLines.id}`}}><button>Edito</button></Link></td>
          <td style={{backgroundColor:'#F5F5F5'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbBusLines.id}"? `)) deleteBusLines(dbBusLines.id)}} className="btn btn-secondary">Fshi</button></td>
        </tr>   
          ))}
      </tbody>

   </table>
  
    <br></br>   <br></br>
    </div>
  </div>
  )
}
export default <BusLines/>;
