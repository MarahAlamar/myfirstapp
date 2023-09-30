import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Main from './main';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthyFood from './HealthyFood';


function App() {
  return (
    
   <>
   <Header/>

   <Router>
   <Routes>
    <Route path='/' Component={Main}> </Route>
  <Route path="/HealthyFood" Component={HealthyFood}></Route>
   </Routes>
   </Router>
   

   </>
  );
}

export default App;
