import React from 'react';
import Google from "./Google.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <main style={{ backgroundColor: 'white', margin: '100px', display: 'flex', justifyContent:"center" }}>
        <form>
            
            <h2 className="title">Kyçu</h2>
            <GoogleOAuthProvider clientId="430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com">
            <Google />
            </GoogleOAuthProvider>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Shenoni emailin ketu" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-input" placeholder="Shenoni passwordin ketu" />
          </div>
          <button className="register-button">Kyçu</button>
          <p>
          Nuk keni llogari? <Link to="/register">Regjistrohu këtu.</Link>
        </p>
        </form>
      </main>
    </div>
  );
}

export default <LoginPage/>;
