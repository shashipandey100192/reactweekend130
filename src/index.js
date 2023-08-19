import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { Myhome1 } from './Home';
import Myclass from './About';
import Myimage from './Myimage';
import Myforms from './Myforms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Myhome></Myhome> */}
    <Abc></Abc>
    <Myhome1></Myhome1>
    <Myimage></Myimage>
    <Myforms/>
  </React.StrictMode>
);

