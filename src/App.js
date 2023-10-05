import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import React from 'react'; 
import favorites from './favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthyFood from './HealthyFood';
import Products from './Product';


function App() {
  return (
    
   <>
   <Header/>

   <Router>
   <Routes>
    <Route path='/' Component={Main}> </Route>
  <Route path="/HealthyFood" Component={HealthyFood}></Route>
  <Route  path="/favorites" Component={favorites} ></Route>
  <Route  path="/Products" Component={Products} ></Route>


   </Routes>
   </Router>
   

   </>
  );
}

export default App;
