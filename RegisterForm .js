import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import App from './App';
import  './inicio';


const RegisterForm = () => {
    return (
      
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title">Crear Usuario</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary">Crear Usuario</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  export default RegisterForm;

  




  