import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = ({ userRole, username, onLogout }) => {
    const handleLogout = () => {
        onLogout();
        {window.location.href="/"}
    };

    return (
        <header style={{ textDecoration: 'none !important', backgroundColor: '#243b55', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="KosovaTour logo" style={{ width: '27px', height: '35px', marginRight: '13px', marginLeft: '16px' }} /> {/* add the logo image */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{ textDecoration: 'none', cursor: 'pointer', color: 'white', fontSize: '25px', fontFamily: 'Abril Fatface' }}>KosovaTour</h1>
                </Link>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Faqja Kryesore</button>
                </Link>
                <Link to="/rekomandimet" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Rekomandimet</button>
                </Link>
                <Link to="/lines" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Linjat</button>
                </Link>
                <Link to="/weather" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Moti</button>
                </Link>
                <Link to="/allfeedbacks" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Feedbacks</button>
                </Link>
                {userRole && (
                    <>
                        {userRole === 'Admin' && (
                            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                <button
                                    style={{
                                        cursor: 'pointer',
                                        border: 'none',
                                        backgroundColor: '#243b55',
                                        color: 'white',
                                        padding: '10px',
                                        fontSize: '17px',
                                        fontFamily: 'Inter',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Admin Dashboard
                                </button>
                            </Link>
                        )}
                        {username && (
                           <a href="/welcomeBack" style={{textDecoration:'none'}}> <p style={{
                                
                                border: 'none',
                                backgroundColor: '#243b55',
                                color: 'white',
                                padding: '2px',
                                fontSize: '17px',
                                fontFamily: 'Inter',
                                textDecoration: 'none', }}>{username}</p></a>
                        )}
                        <button onClick={handleLogout} style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Logout</button>
                    </>
                )}
                {!userRole && (
                    <>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Kyçuni</button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#243b55', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'Inter', textDecoration: 'none' }}>Regjistrohu</button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
