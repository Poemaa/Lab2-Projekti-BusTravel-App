import React , {useState} from 'react'
import { Link } from 'react-router-dom'


 const AddRecipes= () => {

  const [formData, setFormData] = useState(null);

  const handleTitleChange = (e => {
    setFormData({
      ...formData,
      title: e.target.value
    });
  });


  const handleDifficultyChange = (e => {
    setFormData({
      ...formData,
      difficulty: e.target.value
      
    });
  });

  const handleChefChange = (e => {
    setFormData({
      ...formData,
      chefId: e.target.value
      
    });
  });


  const handleSubmit = (e => {
    e.preventDefault();

    const RecipeToAdd = {
     
     
      title: formData.title,
      difficulty:formData.difficulty,
      chefId:formData.chefId
    };
    
  
    const url = `https://localhost:7120/api/recipes`; 
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(RecipeToAdd)
        })
        .then(response => response.json())
        .then(responseFromServer => {
          console.log(responseFromServer);
        })
        .catch(error => {
          console.log(error);
        });
  
        alert('Receta u shtua me sukses!');
        {window.location.href="/recipes"}
  
      }
  
    );

  return(
<div className="addComp" style={{marginRight: "33%", paddingLeft: "18%", display:'flex', flexDirection:'row'}}>
    <form className="w-100 px-5" action="">
      <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Recete te re:</h1>
  <br></br>
 
      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Title</label>
        <input name="teksti" id="titlerec" type="text" className="form-control" onChange={handleTitleChange}/>
      </div>


      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Difficulty</label>
        <input name="companyid" id="difficulty" className="form-control" onChange={handleDifficultyChange}/>
      </div>

      <div className="mt-5" style={{paddingLeft:'27%'}}>
        <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Chef Id</label>
        <input name="companyid" id="difficulty" className="form-control" onChange={handleChefChange}/>
      </div>

      <br></br>
        <button style={{marginLeft:'300px',marginRight:'150px'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Shto</button>
        <br>
        </br><Link  style={{paddingLeft:'29%',textDecoration:'none'}}to="/recipes" onClick={() => {window.location.href="/recipes"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
      

      </form>
      <img src="./images/add.svg" alt="foto" width={"300"} height={"480"} style={{marginLeft:'150px'}} />
  </div>
  )
  
}
export default <AddRecipes/>;