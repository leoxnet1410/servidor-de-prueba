import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from './inicio';
import RegisterForm from './RegisterForm ';
import Contacto from './contacto';
import iniciarsesion from './iniciarsesion';



  
  
  const App = () => {
    return (
      

      <div className="Aplicacion">
        <Routes>
          <Route path="/inicio" element={ <Inicio /> } />
          <Route path="/Register" element={ <RegisterForm /> } />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="/iniciarsesion" element={ <iniciarsesion.js /> } />
        </Routes>
      </div>
    )
  }
  
      
  
  
  
  
  
  
 
  


export default App;


