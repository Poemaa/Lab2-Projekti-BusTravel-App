import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


    
const EditChefs = (props) => {
  const [formData, setFormData] = useState({});
  const { chefId } = useParams();
  console.log(props);

  const getChefById = () => {
    const url = `https://localhost:7120/api/chefs/${chefId}`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((chefsFromServer) => {
        console.log(chefsFromServer);
        setFormData(chefsFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getChefById, []);

 

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleBirthYearChange = (e) => {
    setFormData({
      ...formData,
      birthYear: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ChefsToEdit = {
        chefId: chefId,
      name: formData.name,
      birthYear: formData.birthYear
    };

    const url = `https://localhost:7120/api/chefs/${chefId}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ChefsToEdit),
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Chefi është edituar me sukses!');
        {window.location.href="/chefs"}
      } else {
        throw new Error('Failed to update chef.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Ky chef nuk mund te editohet!');
      {window.location.href="/chefs"}
    });
}


  return (

    
    <div style={{ marginRight: "33%", paddingLeft: "18%" }}>
      <form className="w-100 px-5" action="">
        <h1 className="mt-5">Edito Chefin</h1>




        <div className="mt-4">
          <label className="h3 form-label">Name</label>
          <input
            value={formData.name}
            name="name"
            type="text"
            className="form-control"
            onChange={handleNameChange}
          />
        </div>

        <div className="mt-4">
          <label className="h3 form-label">BirthYear</label>
          <input
            value={formData.birthYear}
            name="phonenumber"
            type="text"
            className="form-control"
            onChange={handleBirthYearChange}
          />
        </div>

        <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Edito</button>
        <Link to="/chefs" className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
      </form>
    </div>
  );
}

export default EditChefs;