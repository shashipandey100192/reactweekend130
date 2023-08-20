import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registerpage from './modules/auth/Registerpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myerrorpage from './modules/shares/Myerrorpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Loginpage/>}/>
       <Route path='register' element={<Registerpage/>}/>
       <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

