
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Route} from 'react-router-dom'
import moment from 'moment';
import {BiCommentDetail} from "react-icons/bi"
import {VscFeedback} from "react-icons/vsc"

const AllFeedbacks = () => {
    const [dbFeedback, setdbFeedback] = useState([]);
    const [sorted, setSorted] = useState({sorted:'id', reversed:false});

    function getFeedbacks(){
        const url = 'https://localhost:7207/api/feedback'; 
        fetch(url, {
          method: 'GET',
         
        })
        .then(response => response.json())
        .then(feedbacksFromServer => {
          console.log(feedbacksFromServer);
          setdbFeedback(feedbacksFromServer);
        })
        .catch(error => {
          console.log(error);
        });
      } 
      const sortByDate = () => {
        setSorted({sorted:"", reversed: !sorted.reversed});
        const feedbackCopy = [...dbFeedback];
        feedbackCopy.sort((dateA,dateB) =>
        {
          const fulldateA = dateA.date;
          const fulldateB = dateB.date;
       
          if(sorted.reversed){
            return fulldateB.localeCompare(fulldateA);
          }
       
          return fulldateA.localeCompare(fulldateB);
        })
        setdbFeedback(feedbackCopy);
      };

      useEffect(getFeedbacks,[]);

  return (
    <div className="welcome-content">
        <div className="welcome-one">
<div classname="welcome-text">
<h2 style={{fontSize:'26px', fontStyle:"italic"}}>Ne do të donim të merrnim feebacks mbi eksperiencën tuaj!</h2>
<br>
</br>
<br></br> <br></br>
   <div className="welcome-Buttons-one">
    <a href='#feedback' style={{textDecoration:'none'}}><button id="welcome-button" style={{fontFamily:"Candara", width:'225px', height:'50px', marginBottom:'30px', marginLeft: '80px', color:"#FFFF99", border:"2px solid yellow"}}>Shiko Feedbacks< BiCommentDetail size='22px' style={{marginLeft:'8px'}}></ BiCommentDetail></button></a>
    <a href='/feedbackpage' style={{textDecoration:'none'}}><button id="welcome-button" style={{fontFamily:'Candara',width:'225px', height:'50px', marginBottom:'30px', marginLeft:'10px', color:"#FFFF99", border:"2px solid yellow"}}>Shkruaj Feedback< VscFeedback size='22px' style={{marginLeft:'5px'}}></ VscFeedback></button></a>
    </div>
   
</div>
<div classname="welcome-picture">
<img src="./images/f1.png" alt="foto" width={"650"} height={"480"} style={{marginLeft:'230px'}} />
</div>
        </div>
<br></br>
 <div className="welcome-two">
    <h2 style={{fontSize:'27px', marginTop:"60px", fontFamily:"Candara"}}>Më poshtë gjeni Feedbacks/Komentet</h2>
<br></br>


      <div id = "feedback" className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%x",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
      <table className='table table-striped' style={{width:'1100px',marginTop:'20px', border:"1px solid yellow"}}>
        <thead>
          <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
          <th style={{backgroundColor:'#FFFF99',color:'#0a4668',textAlign:'center',width:"200px", fontFamily:"Candara", height:"25px", fontSize:"20px", borderBottom:"1px solid blue"}} scope='col'>Kompania</th> 
            <th style={{backgroundColor:'#FFFF99',color:'#0a4668',textAlign:'center',width:"200px", fontFamily:"Candara", height:"25px", fontSize:"20px", borderBottom:"1px solid blue"}} scope='col'>Komenti</th> 
              <th style={{backgroundColor:'#FFFF99',color:'#0a4668',textAlign:'center',width:"30px", fontFamily:"Candara", fontSize:"20px", borderBottom:"1px solid blue"}} scope='col'>Data</th> 
          </tr>
        </thead>
        <tbody>
            {dbFeedback.map(dbFeedback => (
            <tr key={dbFeedback.feedbackId}>
           <td style={{backgroundColor:'#F5F5F5',fontSize:'17px', fontFamily:"Candara", fontStyle:"italic", borderBottom:"1px solid blue"}}>{dbFeedback.companyName}</td>
           <td style={{backgroundColor:'#F5F5F5',fontSize:'17px', fontFamily:"Candara", fontStyle:"italic", borderBottom:"1px solid blue"}}>{dbFeedback.text}</td>
           <td style={{backgroundColor:'#F5F5F5',fontSize:'17px', fontFamily:"Candara", borderBottom:"1px solid blue"}}>{moment.utc(dbFeedback.date).format('MM/DD/YY')}</td>
          </tr>   
            ))}
        </tbody>
     
      </table>
      <th style={{width:'145px'}}> <button style={{fontFamily:'Inter',fontSize:'11px',textAlign:'center', border:"2px solid yellow", marginTop:"18px", width:"145px"}} onClick={sortByDate}>Sorto sipas datës</button></th>
      <br></br>   <br></br>
      </div>
        </div>
        </div>
   
    )
    
  
            }
        

export default <AllFeedbacks/>;