import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


  const LinesFilter = () => {

  const [dbLines, setdbLines] = useState([]);

  function getLines(){
    const url = 'https://localhost:7191/api/busLines/busLines'; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(LinesFromServer => {
      console.log(LinesFromServer);
      setdbLines(LinesFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

 

  useEffect(getLines,[]);


  return (
   
<div className='lines'>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Linjat</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "1%",marginBottom:'100px',display:'flex',flexDirection:'row',marginLeft:'90px'}}>
    <table className='table table-striped' style={{width:'1300px',marginTop:'80px'}}>
      <thead>
        <tr className="table">
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px",height:'50px'}} scope='col'> Linja ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Lokacioni i Nisjes</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Lokacioni i Mberritjes</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"170px"}} scope='col'>Kompania</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Numri i Uleseve</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Cmimi</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"200px"}} scope='col'>Itinerari</th> 
        
      </tr></thead>
      <tbody>
      {dbLines.map(dbLines => (
          <tr key={dbLines.id}>
          <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{dbLines.id}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLines.departureCityId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLines.arrivalCityId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLines.companyId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLines.numberOfSeats}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbLines.price}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px', height:'250px',textAlign:'center',paddingLeft:'50px'}}>{dbLines.busItineraries.map((itinerary) => (
            <table>
              <div style={{display:'flex',flexDirection:'row'}}>
            <tr key={itinerary.busItineraryId}>
              <tr>Departure Time: {itinerary.departureTime}</tr>
              <tr>Arrival Time: {itinerary.arrivalTime}</tr>
             <div><a style={{textDecoration:'none'}} href="/cardDetails"><button>Rezervo</button></a></div> 
              <hr></hr>
              </tr>
              </div></table> ))}</td>

        
        </tr>   
          ))}
      </tbody>

   </table>
  
    <br></br>   <br></br>
    </div>
  </div>
  )
}
export default LinesFilter;
