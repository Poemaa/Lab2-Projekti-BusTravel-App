import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import AboutUsPage from './components/AboutUsPage';
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";
import Location from "./components/Location";
import AddLocation from "./components/AddLocation";
import WelcomeBack from './components/WelcomeBack';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App()
{
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/login" element={LoginPage} />
          <Route path="/aboutus" element={AboutUsPage} />
          <Route path="/register" element={RegisterPage} />
          <Route path="/location" element={Location}/>
          <Route exact path="/addLocation" element={AddLocation}/>
          <Route path="/welcomeback" element={WelcomeBack} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
