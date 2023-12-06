import React from 'react';
import {  BrowserRouter as Router, Route,  NavLink, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Navmenu from './components/navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { publicRoutes } from './routes/publicRoute';
import { protectedRoute } from './routes/protectedRoute';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <Navmenu />
            <div className="inner-content">
              <Routes>
                {
                  publicRoutes.map(route => {
                    return(
                      <Route path={route.path} element={ <route.element />} />
                    )
                  }) 
                }
                {
                  protectedRoute.map(route => {
                    return(
                      <Route path={route.path} element={ <route.element />} />
                    )
                  }) 
                }
              </Routes>
            </div>
        </Router>
        <Footer /> 
    </div>
  );
}

export default App;
