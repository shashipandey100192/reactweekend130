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
import Databinding from './modules/dashboard/Databinding';
import Apiaxios from './modules/dashboard/Apiaxios';
import Mycharts from './modules/dashboard/Mycharts';
import Servicelandingpage from './modules/services/Servicelandingpage';
import Mycar from './modules/services/Mycar';
import Mymobile from './modules/services/Mymobile';
import Myleptop from './modules/services/Myleptop';
import Detailspage from './modules/dashboard/Detailspage';
import Myform from './modules/dashboard/Myform';



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
       <Route path='binding' element={<Databinding/>}/>
       <Route path='myaxios' element={<Apiaxios/>}/>
       <Route path='myaxios/view/:id' element={<Detailspage/>}/>
       <Route path='mygraph' element={<Mycharts/>}/>
       <Route path='myservice' element={<Servicelandingpage/>}>
              <Route path='mycar' element={<Mycar/>}/>
              <Route path='mobile' element={<Mymobile/>}/>
              <Route path='leptop' element={<Myleptop/>}/>
              <Route path='*' element={<Myerrorpage/>}/>
       </Route>
       <Route path='myform' element={<Myform/>}/>
       <Route path='*' element={<Myerrorpage/>}/>



      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

