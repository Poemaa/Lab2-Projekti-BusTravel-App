import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




  const Lines = () => {

  const [dbLines, setdbLines] = useState([]);
  const [dbLocation, setdbLocation] = useState([]);
  const [dbCompanies, setdbCompanies] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedArrivalCity, setSelectedArrivalCity] = useState('');

  function getLines(){
    const url = `https://localhost:7191/api/busLines/busLines`; 
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
  function getLocations() {
    const url = `https://localhost:7191/api/location/cities`; 

   
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((locationsFromServer) => {
        console.log(locationsFromServer);
        setdbLocation(locationsFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getCompanies() {
    const url = `https://localhost:7191/api/company/companies`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((companiesFromServer) => {
        console.log(companiesFromServer);
        setdbCompanies(companiesFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

 

  useEffect(() => {
    getLines();
    getLocations();
    getCompanies();

  }, []);

  const filteredLines = dbLines.filter(dbLine => {
    if (selectedDepartureCity && dbLine.departureCityId !== parseInt(selectedDepartureCity)) {
      return false;
    }
    if (selectedArrivalCity && dbLine.arrivalCityId !== parseInt(selectedArrivalCity)) {
      return false;
    }
    return true;
  });
  return (
   
<div className='blines'>
      <br></br>

    <div className="busfilterContent" style={{marginTop:'-20px',marginBottom:'30px'}}>

<div className="main-form">

     <div className="formdiv2">
     <h3 style={{textAlign:'center',marginTop:'-35px',fontFamily:'Inter', fontSize:'30px', color:'#eea70f'}}>Linjat</h3>
     <h3 style={{paddingTop:'-30px'}}>K&euml;rkoni linj&euml;n e autobusit:</h3>
        <div class="row">
         <div class="col-md-9">
         <div class="row">
          
          <div class="label1">
            <label style={{marginRight:'60px',paddingTop:'7px',background:'#edb53b',textAlign:'center',width:'250px',alignContent:'center',height:'40px',borderRadius:'6px',marginLeft:'30px',marginBottom:'20px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>Destinacioni i Nisjes</label>
        
             <select style={{border:'solid #1c3d6e 1px',borderRadius:'7px',color:'#1c3d6e',fontFamily:'Inter',fontWeight:'bold',background:'#B0C4DE'}} value={selectedDepartureCity} onChange={(e) => setSelectedDepartureCity(e.target.value)}>
          <option style={{backgroundColor:'#0077c0',color:'white', textAlign:'center'}} value="">Zgjedhni destinacionin</option>
          {dbLocation.map((location) => (
            <option style={{backgroundColor:'#B0C4DE',textAlign:'center',borderRadius:'6px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}} key={location.locationId} value={location.locationId}>
              {location.locationName}
            </option>
          ))}
        </select>
        </div></div>
<br></br>  <br></br>  <br></br>  
        <div className="label2">
          <label style={{marginRight:'60px',paddingTop:'7px',background:'#edb53b',textAlign:'center',width:'250px',alignContent:'center',height:'40px',borderRadius:'6px',marginLeft:'30px',marginBottom:'20px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>Destinacioni i Mb&euml;rritjes</label>
             
        <select style={{border:'solid #1c3d6e 1px',borderRadius:'7px',color:'#1c3d6e',fontFamily:'Inter',fontWeight:'bold',background:'#B0C4DE'}} value={selectedArrivalCity} onChange={(e) => setSelectedArrivalCity(e.target.value)}>
          <option style={{backgroundColor:'#0077c0',color:'white',textAlign:'center',}} value="">Zgjedhni destinacionin</option>
          {dbLocation.map((location) => (
            <option style={{backgroundColor:'#B0C4DE',textAlign:'center',borderRadius:'6px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}} key={location.locationId} value={location.locationId}>
              {location.locationName}
            </option>
          ))}
        </select>
          {/*  <input style={{marginRight:'3px'}} class="form-control" placeholder="N&euml;..." type="text" name=""></input> */}
          </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      
    </div>
  <br></br>
  <div className='lines' style={{marginTop:'-49px'}}>

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
            {filteredLines.map((dbLine) => {
              const departureCity = dbLocation.find((location) => location.locationId === dbLine.departureCityId);
              const arrivalCity = dbLocation.find((location) => location.locationId === dbLine.arrivalCityId);
              const company = dbCompanies.find((company) => company.companyId === dbLine.companyId);

              return (
                <tr key={dbLine.id}>
                  <td style={{ backgroundColor: '#0a4668', color: 'white', height: "50px", color:'white' }}>{dbLine.id}</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px' ,color:'darkslategray'}}>{departureCity ? departureCity.locationName : ''}</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px',color:'darkslategray' }}>{arrivalCity ? arrivalCity.locationName : ''}</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px',color:'darkslategray' }}>{company ? company.name : ''}</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px',color:'darkslategray' }}>{dbLine.numberOfSeats}</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px',color:'darkslategray' }}>{dbLine.price} Euro</td>
                  <td style={{ backgroundColor: '#F5F5F5', fontfamily: 'Inter', fontSize: '20px', height: '250px', textAlign: 'center', paddingLeft: '50px' }}>
                    {dbLine.busItineraries.map((itinerary) => (
                      <table>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'-22px'}}>
                          <tr key={itinerary.busItineraryId}>
                            <tr>Nisja: {itinerary.departureTime}</tr>
                            <tr>Mberritja: {itinerary.arrivalTime}</tr>
                            <tr>Kohezgjatja : {itinerary.duration}</tr>

                            <div><a style={{ textDecoration: 'none' }} href="/cardDetails"><button>Rezervo</button></a></div>
                            <hr></hr>
                          </tr>
                        </div>
                      </table>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br></br>   <br></br>
      </div>
    </div>
    </div>
  );
};

export default <Lines/>;