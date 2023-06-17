import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Rekomandimet from './components/Rekomandimet';
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";
import Location from "./components/Location";
import AddLocation from "./components/AddLocation";
import WelcomeBack from './components/WelcomeBack';
import FeedbackPage from './components/FeedbackPage';
import RecommendationPrizren from './components/RecommendationPrizren';
import RecommendationIstog from './components/RecommendationIstog';
import RecommendationPeja from './components/RecommendationPeja';
import RecommendationBrezovice from './components/RecommendationBrezovice';
import RecommendationGjilan from './components/RecommendationGjilan';
import RecommendationPrishtine from './components/RecommendationPrishtine';
import RecommendationFerizaj from './components/RecommendationFerizaj';
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
          <Route path="/rekomandimet" element={Rekomandimet} />
          <Route path="/register" element={RegisterPage} />
          <Route path="/location" element={Location}/>
          <Route exact path="/addLocation" element={AddLocation}/>
          <Route path="/welcomeback" element={WelcomeBack} />
          <Route path="/feedbackpage" element={FeedbackPage} />
          <Route path="/recommendationPrizren" element={RecommendationPrizren} />
          <Route path="/recommendationIstog" element={RecommendationIstog} />
          <Route path="/recommendationPeja" element={RecommendationPeja} />
          <Route path="/recommendationBrezovice" element={RecommendationBrezovice} />
          <Route path="/recommendationGjilan" element={RecommendationGjilan} />
          <Route path="/RecommendationPrishtine" element={RecommendationPrishtine} />
          <Route path="/RecommendationFerizaj" element={RecommendationFerizaj} />
       
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
