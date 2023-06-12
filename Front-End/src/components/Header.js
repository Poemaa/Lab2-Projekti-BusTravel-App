import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ textDecoration: 'none !important', backgroundColor: '#243b55', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="KosovaTour logo" style={{ width: '27px', height: '35px', marginRight: '13px', marginLeft: '16px' }} /> {/* add the logo image */}
        <Link to="/" style={{ textDecoration: 'none'}}>
          <h1 style={{ textDecoration: 'none', cursor: 'pointer', color: 'white', fontSize:'25px', fontFamily:'Abril Fatface' }}>KosovaTour</h1>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">
      <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize:'17px', fontFamily:'Inter'}}>Faqja Kryesore</button>
      </Link>
        <Link to="/aboutus">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize:'17px', fontFamily:'Inter'}}>Rreth nesh</button>
        </Link>
        <Link to="/login">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize:'17px', fontFamily:'Inter' }}>Kyçuni</button>
        </Link>
        <Link to="/register">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize:'17px', fontFamily:'Inter' }}>Regjistrohu</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
