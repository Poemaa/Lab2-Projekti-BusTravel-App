import React , {useState} from 'react'
import { Link } from 'react-router-dom'


 const AddChefs= () => {

  const [formData, setFormData] = useState(null);

  const handleNameChange = (e => {
    setFormData({
      ...formData,
      name: e.target.value
    });
  });


  const handleBirthYearChange = (e => {
    setFormData({
      ...formData,
      birthYear: e.target.value
      
    });
  });



  const handleSubmit = (e => {
    e.preventDefault();

    const ChefToAdd = {
     
     
      name: formData.name,
      birthYear:formData.birthYear
    };
    
  
    const url = `https://localhost:7120/api/chefs`; 
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ChefToAdd)
        })
        .then(response => response.json())
        .then(responseFromServer => {
          console.log(responseFromServer);
        })
        .catch(error => {
          console.log(error);
        });
  
        alert('Chefi u shtua me sukses!');
        {window.location.href="/chefs"}
  
      }
  
    );

  return(
<div className="addComp" style={{marginRight: "33%", paddingLeft: "18%", display:'flex', flexDirection:'row'}}>
    <form className="w-100 px-5" action="">
      <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Chef te ri:</h1>
  <br></br>
 
      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Name</label>
        <input name="teksti" id="namechef" type="text" className="form-control" onChange={handleNameChange}/>
      </div>


      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>BirthYear</label>
        <input name="companyid" id="birthYear" className="form-control" onChange={handleBirthYearChange}/>
      </div>

      <br></br>
        <button style={{marginLeft:'300px',marginRight:'150px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Shto</button>
        <br>
        </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/chefs" onClick={() => {window.location.href="/chefs"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
      

      </form>
      <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
  </div>
  )
  
}
export default <AddChefs/>;