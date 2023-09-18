import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';



  const EditFeedback = (props) => {

  const [formData, setFormData] = useState([]);
  const {feedbackId}= useParams();
  

  console.log(props);

  function getFeedbackById(){
    const url = `https://localhost:7207/api/feedback`; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(feedbacksFromServer => {
      console.log(feedbacksFromServer);
      setFormData(feedbacksFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(getFeedbackById,[]);

  const handleTextChange = (e => {
    setFormData({
      ...formData,
      [e.target.text]: e.target.value,
    });
  });

  const handleSubmit = (e => {
    e.preventDefault();

    const FeedbackToEdit = {
  
      text: formData.text,
      
    };

    const url = `https://localhost:7207/api/feedback`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FeedbackToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error => {
      console.log(error);
    });

    alert('Feedback u editua me sukses!');
    {window.location.href="/feedback"}


  });

  return (
    <div style={{marginRight: "33%", paddingLeft: "18%"}}>
      <form className="w-100 px-5" action="">
        <h1 className="mt-5">Edito Feedback</h1>

        <div className="mt-4">
          <label className="h3 form-label">Teksti</label>
          <input value={formData.text} name="feedbackText" type="text" className="form-control" onChange={handleTextChange}/>
        </div>

        <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Edito</button>
        <Link to="/feedback" onClick={() => {window.location.href="/feedback"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>

      </form>
      

    </div>
  )
}
export default <EditFeedback/>;