import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



  const Recipes = () => {

  const [dbRecipe, setdbRecipe] = useState([]);
  const [selectedRecipeDifficulty, setSelectedRecipeDifficulty] = useState('');
  const [selectedRecipeChef, setSelectedRecipeChef] = useState('');


  function getRecipes(){
    const url = `https://localhost:7120/api/recipes`;

    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(recipesFromServer => {
      console.log(recipesFromServer);
      setdbRecipe(recipesFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }



  function deleteRecipe(recipeId){
    const url = `https://localhost:7120/api/recipes/${recipeId}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Receta është fshirë me sukses!');
        getRecipes();
      } else {
        throw new Error('Failed to delete recipe.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Ky recete nuk mund te fshihet!');
    });
}
 

  useEffect(() => {
    getRecipes();
 
  }, []);

  const filteredRecipes = dbRecipe.filter(dbReceta => {
    if (selectedRecipeDifficulty && dbReceta.recipeId !== parseInt(selectedRecipeDifficulty)) {
      return false;
    }
    return true;
  });


  return (
    <div>
      
       <select style={{color:'black'}} value={selectedRecipeDifficulty} onChange={(e) => setSelectedRecipeDifficulty(e.target.value)}>
          <option style={{color:'black'}}  value="">Select Recipe Difficulty</option>
          {dbRecipe.map((recipe) => (
            <option key={recipe.recipeId} value={recipe.recipeId} style={{color:'black'}} >
              {recipe.difficulty}
            </option>
          
          ))}
        </select>
        
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Recetat</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
    <table className='table table-striped' style={{width:'1000px',marginTop:'15px'}}>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center', width:"100px"}} scope='col'>Receta ID</th>
          <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"200px"}} scope='col'>Title</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"300px"}} scope='col'>Difficulty</th> 
            <th style={{backgroundColor:'#0a4668',color:'white',textAlign:'center',width:"300px"}} scope='col'>Chef</th> 

           
          <th style={{width:'200px',backgroundColor:'white'}}><Link to="/addArticle" onClick={() => {window.location.href="/addRecipes"}}> <button>Shto një recete</button></Link> </th>
        </tr>
      </thead>
      <tbody>


      {filteredRecipes.map((dbReceta) => {
              const recipes = dbRecipe.find((recipe) => recipe.recipeId === dbReceta.recipeId);
             


         {/*} {dbArtikulli.map(dbArtikulli => (*/}
         return (
          <tr key={dbReceta.recipeId}>
         <td style={{backgroundColor:'#0a4668',color:'white',height:"50px"}}>{recipes ? dbReceta.recipeId: ''}</td>
         <td style={{backgroundColor:'#E0FFFF',fontfamily:'Inter',fontSize:'18px'}}>{recipes ? dbReceta.title: ''}</td>
         <td style={{backgroundColor:'#E0FFFF',fontfamily:'Inter',fontSize:'18px'}}>{recipes ? dbReceta.difficulty: ''}</td>
         <td style={{backgroundColor:'#E0FFFF',fontfamily:'Inter',fontSize:'18px'}}>{recipes ? dbReceta.chefId: ''}</td>

     
     
         <td style={{backgroundColor:'#E0FFFF'}}><Link style={{ textDecoration: 'none' }}to={`/editRecipe/${dbRecipe.recipeId}`}className="btn btn-outline-secondary"><button>Edito</button></Link></td>
           <td style={{backgroundColor:'#E0FFFF'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Receten? "${dbRecipe.recipeId}"? `)) deleteRecipe(dbRecipe.recipeId)}} className="btn btn-secondary">Fshij</button></td>
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
export default <Recipes/>;