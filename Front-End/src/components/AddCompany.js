import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

 const AddCompany = () => {

  const [formData, setFormData] = useState(null);

  const handleNameChange = (e => {
    setFormData({
      ...formData,
      name: e.target.value
    });
  });

  const handlenumberOfBusesChange = (e => {
    setFormData({
      ...formData,
      numberOfBuses: e.target.value
    });
  });

  const handlephoneNumberChange = (e => {
    setFormData({
      ...formData,
      phoneNumber: e.target.value
    });
  });
  const handleEmailChange = (e => {
    setFormData({
      ...formData,
      email: e.target.value
    });
  });


  const handleSubmit = (e => {
    e.preventDefault();

    const CompanyTooAdd = {
     
     
      name: formData.name,
      numberOfBuses:formData.numberOfBuses,
      phoneNumber:formData.phoneNumber,
      email:formData.email
    };
    
  
    const url = `https://localhost:7191/api/company/company`; 
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(CompanyTooAdd)
        })
        .then(response => response.json())
        .then(responseFromServer => {
          console.log(responseFromServer);
        })
        .catch(error => {
          console.log(error);
        });
  
        alert('Kompania u shtua me sukses!');
        {window.location.href="/company"}
  
      }
  
    );

  return(
<div className="addComp" style={{marginRight: "33%", paddingLeft: "18%", display:'flex', flexDirection:'row'}}>
    <form className="w-100 px-5" action="">
      <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Kompani te re:</h1>
  <br></br>
 
      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Emri</label>
        <input name="companyName" id="company_name" type="text" className="form-control" onChange={handleNameChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Numri i Autobusave</label>
        <input name="companyBus" id="company_Bus" type="number" className="form-control" onChange={handlenumberOfBusesChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Numri i Telefonit</label>
        <input name="companyPhone" id="company_phone" type="text" className="form-control" onChange={handlephoneNumberChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>E-mail</label>
        <input name="companyEmail" id="company_email" type="email" className="form-control" onChange={handleEmailChange}/>
      </div>
      <br></br>
        <button style={{marginLeft:'300px',marginRight:'150px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Shto</button>
        <br>
        </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/company" onClick={() => {window.location.href="/company"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
      

      </form>
      <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
  </div>
  )
  
}
export default <AddCompany/>;