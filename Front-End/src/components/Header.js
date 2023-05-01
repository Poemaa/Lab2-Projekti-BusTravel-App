import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ textDecoration: 'none !important', backgroundColor: '#243b55', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/">
      <h1 style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>KosovaTour</h1>
        </Link>
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
