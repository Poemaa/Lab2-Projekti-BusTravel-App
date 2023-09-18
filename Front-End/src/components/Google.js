import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Google = ({ onLogin }) => {
    const navigate = useNavigate();

    const onSuccess = async (credentialResponse) => {
        try {
            if (credentialResponse && credentialResponse.profile && credentialResponse.profile.sub) {
                console.log('User ID:', credentialResponse.profile.sub);

                // Get the user data from the API
                const response = await fetch('https://localhost:5000/api/user/currentUser', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${credentialResponse.credential}`,
                        'Content-Type': 'application/json',
                    },
                });
                const responseToken = await fetch('https://localhost:5000/api/user/getToken', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${credentialResponse.credential}`,
                        'Content-Type': 'application/json',
                    },
                }).then(response => response.text())
                    .then(data => {
                        
                        localStorage.setItem('jwt', data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                if (response.ok) {
                    const data = await response.json();
                    const { firstName, lastName, role } = data;

                    // Do something with the user data, such as storing it in state or a global context
                    console.log('User Data:', { firstName, lastName, role });

                    const userName = `${firstName} ${lastName}`;

                    // Invoke the onLogin callback with the user data
                    onLogin({ userName, role });

                    // Redirect to Home and pass the user data as query parameters
                    navigate(`/`);
                } else {
                    console.log('Failed to fetch user data');
                }
            } else {
                console.log('Invalid response:', credentialResponse);
                // Get the user data from the API
                const response = await fetch('https://localhost:5000/api/user/currentUser', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${credentialResponse.credential}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    const { firstName, lastName, role } = data;

                    // Do something with the user data, such as storing it in state or a global context
                    console.log('User Data:', { firstName, lastName, role });

                    // Invoke the onLogin callback with the user data
                    const userName = `${firstName} ${lastName}`;
                    // Invoke the onLogin callback with the user data

                    onLogin({ userName, role });
                    console.log(userName);
                    navigate(`/welcomeback`);
                } else {
                    console.log('Failed to fetch user data');
                }
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <GoogleLogin
            clientId="430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={() => console.log('Login Failed')}
        />
    );
};

export default Google;
