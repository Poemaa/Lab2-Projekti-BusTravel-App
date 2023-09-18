import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Route} from 'react-router-dom'


  const Company = () => {

  const [dbCompany, setdbCompany] = useState([]);
  const [sorted, setSorted] = useState({sorted:'id', reversed:false});

  function getCompanies(){
    const url = 'https://localhost:7191/api/company/companies'; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(companiesFromServer => {
      console.log(companiesFromServer);
      setdbCompany(companiesFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function deleteCompanies(companyId){
    const url = `https://localhost:7191/api/company/company/${companyId}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Kompania u fshi me sukses!');
        getCompanies();
      } else {
        throw new Error('Failed to delete company.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Kjo kompani nuk mund te fshihet!');
    });
}

const sortByName = () => {
  setSorted({sorted:"", reversed: !sorted.reversed});
  const companyCopy = [...dbCompany];
  companyCopy.sort((companyA,companyB) =>
  {
    const fullnameA = companyA.name;
    const fullnameB = companyB.name;
 
    if(sorted.reversed){
      return fullnameB.localeCompare(fullnameA);
    }
 
    return fullnameA.localeCompare(fullnameB);
  })

setdbCompany(companyCopy);
};






  useEffect(getCompanies,[]);

  return (
    <div>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Kompanite</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
    <table className='table table-striped' style={{width:'900px',marginTop:'80px'}}>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"150px",height:'50px'}} scope='col'> Kompania ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Emri</th> 
           <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Numri i autobusave</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Numri i telefonit</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Email</th> 
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}}><Link style={{color:'white', textDecoration:'none'}} to="/addCompany" onClick={() => {window.location.href="/addCompany"}} className="btn btn-secondary custom-btn">Shto Kompani</Link> </th>
          <th style={{width:'150px',backgroundColor:'white'}}> <button style={{fontFamily:'Inter',fontSize:'11px', width:'102px',textAlign:'center'}} onClick={sortByName}>ASC↑/DSC↓</button></th>
        </tr>
      </thead>
      <tbody>
          {dbCompany.map(dbCompany => (
          <tr key={dbCompany.companyId}>
          <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{dbCompany.companyId}</td>
          <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbCompany.name}</td>
           <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbCompany.numberOfBuses}</td>
            <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbCompany.phoneNumber}</td>
            <td style={{backgroundColor:'#F5F5F5',fontfamily:'Inter',fontSize:'18px'}}>{dbCompany.email}</td>
          <td style={{backgroundColor:'#F5F5F5'}}><Link style={{textDecoration:'none'}} to={`/editCompany/${dbCompany.companyId}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editCompany/${dbCompany.companyId}`}}><button>Edito</button></Link></td>
          <td style={{backgroundColor:'#F5F5F5'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Kompanine? "${dbCompany.companyId}"? `)) deleteCompanies(dbCompany.companyId)}} className="btn btn-secondary">Fshi</button></td>
        </tr>   
          ))}
      </tbody>

    </table>
   
    <br></br>   <br></br>
    <img src="./images/company.svg" alt="foto" width={"350"} height={"480"} style={{marginLeft:'150px',marginTop:'200px'}} />

    </div>
  </div>
  )

}
export default <Company/>;
