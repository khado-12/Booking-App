import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/Hotel/Hotel';


function App() {
  return (
    <>
   
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotel' element={<List/>}/>
    <Route path='/hotels' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
