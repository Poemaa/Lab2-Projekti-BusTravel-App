import React from 'react';
import Google from "./Google.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <main style={{ backgroundColor: 'white', margin: '100px', display: 'flex', flexDirection:'row',justifyContent:"center" }}>
        <div id="logInform" style={{display:'flex', textAlign:'left',marginRight:'120px' }}>
        <form>
            
            <h2 className="title" style={{color:'#003366'}}>Kyçu</h2>
           <div id="googleLog" style={{paddingLeft:'27px'}}>
             <GoogleOAuthProvider clientId="430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com">
            <Google />
            </GoogleOAuthProvider>
            </div>
            <br></br>
          <div className="form-group">
            <label htmlFor="email" className="form-label" style={{color:'#003366'}}>Email</label>
            <input type="email" id="email" className="form-input" placeholder="Shenoni emailin ketu" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label" style={{color:'#003366'}}>Password</label>
            <input type="password" id="password" className="form-input" placeholder="Shenoni passwordin ketu" />
          </div>
          <button className="register-button" style={{display:'flex', textAlign:'left',marginLeft:'90px' }}>Kyçu</button>
          <p>
          Nuk keni llogari? <Link to="/register">Regjistrohu këtu.</Link>
        </p>
        </form>
        </div>
        <div style={{display:'flex',marginLeft:'180px'}}>
        <img src="./images/foto2.svg" alt="fotologIn" width={"520px"} height={"500px"} />
        </div>
      </main>
    </div>
  );
}

export default <LoginPage/>;
