import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'



function AddBusLines  ()  {

    const [formData, setFormData] = useState(null);

    const handleNameChange = (e => {
      setFormData({
        ...formData,
        name: e.target.value
      });
    });
  
    const handledepartureCityIdChange= (e => {
      setFormData({
        ...formData,
        departureCityId: e.target.value
      });
    });
  
    const handlearrivalCityIdChange = (e => {
      setFormData({
        ...formData,
        arrivalCityId: e.target.value
      });
    });
    const handlecompanyIdChange = (e => {
      setFormData({
        ...formData,
        companyId: e.target.value
      });
    });
    const handlenumberOfSeatsChange = (e => {
        setFormData({
          ...formData,
          numberOfSeats: e.target.value
        });
      });
      const handlePriceChange = (e => {
        setFormData({
          ...formData,
          price: e.target.value
        });
      });
      
  
    const handleSubmit = (e => {
      e.preventDefault();
  
      const BusLineTooAdd = {
       
       
        departureCityId: formData.departureCityId,
        arrivalCityId:formData.arrivalCityId,
        companyId:formData.companyId,
        numberOfSeats:formData.numberOfSeats,
        price:formData.price
      };
      
    
      const url = `https://localhost:7191/api/busLines/busLines`; 
          
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(BusLineTooAdd)
          })
          .then(response => response.json())
          .then(responseFromServer => {
            console.log(responseFromServer);
          })
          .catch(error => {
            console.log(error);
          });
    
          alert('Linja u shtua me sukses!');
          {window.location.href="/busLines"}
    
        }
    
      );
  
    return(
  <div className="addLine" style={{marginRight: "33%", paddingLeft: "18%", display:'flex', flexDirection:'row'}}>
      <form className="w-100 px-5" action="">
        <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Linje te re:</h1>
    <br></br>
   
        <div className="mt-5" style={{paddingLeft:'27%'}}>
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Destinacioni i Nisjes</label>
          <input name="busLinedep" id="busLines_dep" type="number" className="form-control" onChange={handledepartureCityIdChange}/>
        </div>
  
        <div className="mt-5" style={{paddingLeft:'27%'}}>
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Destinacioni i Mberritjes</label>
          <input name="busLinearr" id="busLines_arr" type="number" className="form-control" onChange={handlearrivalCityIdChange}/>
        </div>
  
        <div className="mt-5" style={{paddingLeft:'27%'}}>
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Kompania</label>
          <input name="comId" id="com_Id" type="number" className="form-control" onChange={handlecompanyIdChange}/>
        </div>
  
        <div className="mt-5" style={{paddingLeft:'27%'}}>
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Numri i uleseve</label>
          <input name="nrSeat" id="nr_Seat" type="email" className="form-control" onChange={handlenumberOfSeatsChange}/>
        </div>

        <div className="mt-5" style={{paddingLeft:'27%'}}>
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Cmimi</label>
          <input name="price" id="pric_e" type="email" className="form-control" onChange={handlePriceChange}/>
        </div>
        <br></br>
          <button style={{marginLeft:'300px',marginRight:'150px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_busLinessubmit">Shto</button>
          <br>
          </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/busLines" onClick={() => {window.location.href="/busLines"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
        
  
        </form>
        <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
    </div>
)
  

}
export default <AddBusLines/>;