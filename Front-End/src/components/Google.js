import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

const Google = () => {
  const onSuccess = (credentialResponse) => {
    if (credentialResponse && credentialResponse.profile && credentialResponse.profile.sub) {
      console.log('User ID:', credentialResponse.profile.sub);
    } else {
      console.log('Invalid response:', credentialResponse);
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