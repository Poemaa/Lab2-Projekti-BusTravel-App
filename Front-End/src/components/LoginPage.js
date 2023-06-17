import Google from "./Google.js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';

const LoginPage = ({ onLogin }) => {

    const handleLogin = (userName, role) => {
        onLogin(userName, role);
    };
    
    return (
        <div>
            <main style={{ backgroundColor: 'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                <div id="logInform" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
                    <form>
                        <h2 className="title" style={{ color: '#003366' }}>Kyçu</h2>
                        <div id="googleLog" style={{ paddingLeft: '27px' }}>
                            <GoogleOAuthProvider clientId="430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com">
                                <Google onLogin={(userData) => handleLogin(userData.userName, userData.role)} />
                            </GoogleOAuthProvider>
                        </div>
                        <br></br>
                    </form>
                </div>
                <div style={{ display: 'flex', marginLeft: '180px' }}>
                    <img src="./images/foto2.svg" alt="fotologIn" width={"520px"} height={"500px"} />
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
