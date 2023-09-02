import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registerpage from './modules/auth/Registerpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myerrorpage from './modules/shares/Myerrorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Myreactbootstrappage from './modules/dashboard/Myreactbootstrappage';
import Mynav from './modules/shares/Mynav';
import Myuimetrial from './modules/dashboard/Myuimetrial';
import Parentelement from './modules/dashboard/Parentelement';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynav/>
      <Routes>
       <Route path='/' element={<Loginpage/>}/>
       <Route path='register' element={<Registerpage/>}/>
       <Route path='landing' element={<Myhomepage/>}/>
       <Route path='reactbootstrap' element={<Myreactbootstrappage/>}/>
       <Route path='uimetrial' element={<Myuimetrial/>}/>
       <Route path='props' element={<Parentelement/>}/>
       <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

