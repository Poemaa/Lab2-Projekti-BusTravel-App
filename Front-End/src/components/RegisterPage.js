import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div id= 'contentRegister' style={{display:'flex', flexDirection:'row'}}>
    <div className="register-container" style={{display:"flex", marginTop:"18px",marginRight:'90px'}}>
      <h1 style={{fontSize:'28px',color:'#003366'}}>Regjistrohu</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group" style={{paddingTop:'0px'}}>
          <label htmlFor="firstName" className="form-label" style={{color:'#003366'}}>Emri:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label" style={{color:'#003366'}}>Mbiemri:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label" style={{color:'#003366'}}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label" style={{color:'#003366'}}>Fjalekalimi:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label" style={{color:'#003366'}}>Konfirmo fjalekalimin:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-button">
          Regjistrohu
        </button>
      </form>
    </div>
    <div style={{display:'flex', float:'right', marginRight:'250px',paddingTop:'70px'}}>
    <img src="./images/foto1.svg" alt="fotoRegister" width={"480px"} height={"500px"} />
    </div>
    </div>
  );
}

export default <RegisterPage/>;