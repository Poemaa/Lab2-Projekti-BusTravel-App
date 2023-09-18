import { Link } from "react-router-dom";
import React, { useState } from 'react';

const CardDetails = () =>
{

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        creditCardNumber: '',
        securityCode: '',
        cardExpiration: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the form data
        console.log(formData);
      };
    
      return (
<div id="CardDetails">
    <div id="card1">
    <h2>Ju Lutem Vendosni te Dhenat e Karteles</h2> <br></br>

        <form onSubmit={handleSubmit}>
          <label>
            Name: <br></br>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Surname: <br></br>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Credit Card Number: <br></br>
            <input
              type="text"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Security Code:<br></br>
            <input
              type="text"
              name="securityCode"
              value={formData.securityCode}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Card Expiration:<br></br>
            <input
              type="text"
              name="cardExpiration"
              value={formData.cardExpiration}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Paguaj</button>
        </form>
        </div>

            <div id="card2">
            <img src="./images/karta.svg" alt="fotoRegister" width={"480px"} height={"500px"} />
            </div>

        </div>
      );



}

export default <CardDetails />;