import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ textDecoration: 'none !important', backgroundColor: '#243b55', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="KosovaTour logo" style={{ width: '40px', height: '50px', marginRight: '10px' }} /> {/* add the logo image */}
        <Link to="/">
          <h1 style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>KosovaTour</h1>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/aboutus">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px' }}>Rreth nesh</button>
        </Link>
        <Link to="/login">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px' }}>Kyçuni</button>
        </Link>
        <Link to="/register">
          <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px' }}>Regjistrohu</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;