import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Rekomandimet from './components/Rekomandimet';
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";
import Location from "./components/Location";
import AddLocation from "./components/AddLocation";
import EditLocation from "./components/EditLocation";
import Company from "./components/Company";
import AddCompany from "./components/AddCompany";
import EditCompany from "./components/EditCompany";
import BusItinerary from "./components/BusItinerary";
import AddBusItinerary from "./components/AddBusItinerary";
import EditBusItinerary from "./components/EditBusItinerary";
import BusLines from "./components/BusLines";
import AddBusLines from "./components/AddBusLines";
import EditBusLines from "./components/EditBusLines";
import AddFeedback from './components/AddFeedback';
import Feedback from './components/Feedback';
import EditFeedback from './components/EditFeedback';
import WelcomeBack from './components/WelcomeBack';
import FeedbackPage from './components/FeedbackPage';
import RecommendationPrizren from './components/RecommendationPrizren';
import RecommendationIstog from './components/RecommendationIstog';
import RecommendationPeja from './components/RecommendationPeja';
import RecommendationBrezovice from './components/RecommendationBrezovice';
import RecommendationGjilan from './components/RecommendationGjilan';
import RecommendationPrishtine from './components/RecommendationPrishtine';
import RecommendationFerizaj from './components/RecommendationFerizaj';
import AllFeedbacks from './components/AllFeedbacks';
import BusFilter from './components/BusFilter';
import AdminDashboard from './components/AdminDashboard';
import CardDetails from './components/CardDetails';
import Lines from './components/Lines';
import LinesFilter from './components/LinesFilter';
import Weather from './components/Weather';
import Chefs from './components/Chefs';
import AddChefs from './components/AddChefs';
import EditChefs from './components/EditChefs';
import Recipes from './components/Recipes';
import AddRecipes from './components/AddRecipes';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export const RoutesURL = "http://localhost:7191/"


function App() {
    const [userRole, setUserRole] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedUserRole = localStorage.getItem('userRole');
        if (storedUsername && storedUserRole) {
            setUsername(storedUsername);
            setUserRole(storedUserRole);
        } else {
            // Handle the case when the values are not found in localStorage
            setUsername('');
            setUserRole('');
        }
    }, []);

    const handleLogin = (userName, role) => {
        setUsername(userName);
        setUserRole(role);
        localStorage.setItem('username', userName);
        localStorage.setItem('userRole', role);
        console.log(userName)
        console.log(role)
        console.log('Stored values:', localStorage.getItem('username'), localStorage.getItem('userRole'));

    };

    const handleLogout = () => {
        setUsername('');
        setUserRole('');
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        window.location.reload();
    };

    return (
        <div className="App">
            <Router>
                <Header userRole={userRole} username={username} onLogout={handleLogout} />
                <Routes>
                    <Route exact path="/" element={Home} />
                    <Route path="/rekomandimet" element={Rekomandimet} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/register" element={RegisterPage} />
                    <Route path="/location" element={Location} />
                    <Route exact path="/addLocation" element={AddLocation} />
                    <Route exact path="/editLocation/:locationId" element={EditLocation} />
                    <Route path="/company" element={Company} />
                    <Route exact path="/addCompany" element={AddCompany} />
                    <Route path="/editCompany/:companyId" element={EditCompany} />
                    <Route path="/busLines" element={BusLines} />
                    <Route exact path="/addBusLine" element={AddBusLines} />
                    <Route exact path="/editBusLines" element={EditBusLines} />
                    <Route path="/busItinerary" element={BusItinerary} />
                    <Route exact path="/addbusItinerary" element={AddBusItinerary} />
                    <Route exact path="/editbusItinerary/:busItineraryId" element={EditBusItinerary} />
                    <Route path="/AddFeedback" element={AddFeedback} />
                    <Route path="/Feedback" element={Feedback} />
                    <Route path="/editFeedback/:id" element={<EditFeedback/>} />
                    <Route path="/welcomeback" element={WelcomeBack} />
                    <Route path="/feedbackpage" element={FeedbackPage} />
                    <Route path="/recommendationPrizren" element={RecommendationPrizren} />
                    <Route path="/recommendationIstog" element={RecommendationIstog} />
                    <Route path="/recommendationPeja" element={RecommendationPeja} />
                    <Route path="/recommendationBrezovice" element={RecommendationBrezovice} />
                    <Route path="/recommendationGjilan" element={RecommendationGjilan} />
                    <Route path="/RecommendationPrishtine" element={RecommendationPrishtine} />
                    <Route path="/RecommendationFerizaj" element={RecommendationFerizaj} />
                    <Route path="/AllFeedbacks" element={AllFeedbacks} />
                    <Route path="/busFilter" element={BusFilter} />
                    <Route path="/dashboard" element={AdminDashboard} />
                    <Route path="/cardDetails" element={CardDetails} />
                    <Route path="/lines" element={Lines} />
                    <Route path="/linesFilter" element={LinesFilter} />
                    <Route path="/weather" element={Weather} />
                    <Route path="/chefs" element={Chefs} />
                    <Route path="/addChefs" element={AddChefs} />
                    <Route path="/editChef/:chefId" element={<EditChefs/>} />   
                    <Route path="/recipes" element={Recipes} />
                    <Route path="/addRecipes" element={AddRecipes} />                 
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
