import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registerpage from './modules/auth/Registerpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myerrorpage from './modules/shares/Myerrorpage';
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
import Localstorage from './modules/dashboard/Localstorage';
import { Provider } from 'react-redux';
import { Mystore } from './modules/redux/Mystore';
import Myreduxpage from './modules/redux/Myreduxpage';
import { Auth0Provider } from '@auth0/auth0-react';

// import Mylazyloding from './modules/dashboard/Mylazyloding';
const Mylanding = lazy(()=> import('./modules/dashboard/Mylazyloding'));
// const Myloader = lazy(()=>import('./modules/dashboard/Myloader'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="343eiZvm0TVrW2KrBMTMeoTpgYbfURlZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={Mystore}>
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
       <Route path='localdata' element={<Localstorage/>}/>
       <Route path='lazyloading' element={
        <Suspense fallback={<h1 style={{color:'red',fontSize:'100px',backgroundColor:'blue'}}>loading</h1>}>
          <Mylanding/>
        </Suspense>
       }/>
      <Route path='myredux' element={<Myreduxpage/>}/>
       <Route path='*' element={<Myerrorpage/>}/>



      </Routes>
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

