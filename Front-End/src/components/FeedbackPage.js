import React, { useState } from "react";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    text: "",
    companyName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Add API call to submit form data to backend
  };

  return (
    <div id= 'contentFeedback' style={{display:'flex', flexDirection:'row'}}>
    <div className="feedback-container" style={{display:"flex", marginTop:"18px",marginRight:'90px'}}>
      <h1 style={{fontSize:'28px',color:'#003366', height: "155px", fontStyle:"italic"}}>Shkruaj komente për eksperiencën tuaj!</h1>
      <form onSubmit={handleSubmit}>

      <div className="form-group">
          <label htmlFor="companyName" className="form-label" style={{color:'#003366'}}>Emri i Kompanisë:</label>
          <input
            type="text"
            id ="companyName"
            name ="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group" style={{paddingTop:'0px'}}>
          <label htmlFor="text" className="form-label" style={{color:'#003366'}}>Komenti:</label>
          <input style={{padding: "80px", maxWidth: "950px", alignItems: "start", justifyContent: "start", textAlign: "start"}}
            type="text"
            id ="text"
            name ="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit" className="register-button">
          Shto Komentin
        </button>
      </form>
    </div>
    <div style={{display:'flex', marginRight:'0px',paddingTop:'70px'}}>
    <img src="./images/feedbackk.png" alt="fotoFeedback" width={"750px"} height={"550px"} />
    </div>
    </div>
  );
}

export default <FeedbackPage/>;