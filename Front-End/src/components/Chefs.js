import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



  const Chefs = () => {

  const [dbChef, setdbChef] = useState([]);
  const [selectedRecipeChef, setSelectedRecipeChef] = useState('');


  function getChefs(){
    const url = `https://localhost:7120/api/chefs`;
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(chefsFromServer => {
      console.log(chefsFromServer);
      setdbChef(chefsFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }


  function deleteChef(chefId){
    const url = `https://localhost:7120/api/chefs/${chefId}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Chefi është fshirë me sukses!');
        getChefs();
      } else {
        throw new Error('Failed to delete chef.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Ky chef nuk mund te fshihet!');
    });
}

  useEffect(getChefs,[]);
  const filteredRecipes = dbChef.filter(dbChefi => {
    if (selectedRecipeChef && dbChefi.chefId !== parseInt(selectedRecipeChef)) {
      return false;
    }
    return true;
  });


  return (
    <div>
    <select style={{color:'black'}} value={selectedRecipeChef} onChange={(e) => setSelectedRecipeChef(e.target.value)}>
          <option style={{color:'black'}}  value="">Select Chef </option>
          {dbChef.map((chef) => (
            <option key={chef.chefId} value={chef.chefId} style={{color:'black'}} >
              {chef.name}
            </option>
          
          ))}
        </select>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Chefs</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
    <table className='table table-striped' style={{width:'1000px',marginTop:'15px'}}>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Chef ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Name</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"300px"}} scope='col'>BirthYear</th> 
 
           
          <th style={{width:'200px',backgroundColor:'white'}}><Link to="/addchefs" onClick={() => {window.location.href="/addchefs"}}> <button>Shto një chef</button></Link> </th>
        </tr>
      </thead>
      <tbody>

      {filteredRecipes.map((dbChefi) => {
              const chefs = dbChef.find((chef) => chef.chefId === dbChefi.chefId);
              return (
                <tr key={dbChefi.chefId}>
         
    
         <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{chefs ? dbChefi.chefId: ''}</td>
         <td style={{backgroundColor:'#E0FFFF',fontfamily:'Inter',fontSize:'18px'}}>{chefs ? dbChefi.name: ''}</td>
         <td style={{backgroundColor:'#E0FFFF',fontfamily:'Inter',fontSize:'18px'}}>{chefs ? dbChefi.birthYear: ''}</td>

     
     
         <td style={{backgroundColor:'#E0FFFF'}}><Link style={{ textDecoration: 'none' }}to={`/editchef/${dbChef.chefId}`}className="btn btn-outline-secondary"><button>Edito</button></Link></td>
           <td style={{backgroundColor:'#E0FFFF'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Chefin? "${dbChef.chefId}"? `)) deleteChef(dbChef.chefId)}} className="btn btn-secondary">Fshij</button></td>
        </tr>   
         );
        })}
      </tbody>

    </table>
    <br></br>   <br></br>
    </div>
  </div>
  )

}
export default <Chefs/>;