import React, { Fragment } from 'react';
import Myphoto from './images/img6.jpg';
import "./style.css";

function Myimage() {
var a = "https://img.freepik.com/premium-photo/illustration-neon-tropical-theme-with-palm-tree-exotic-floral-ai_564714-1270.jpg";

  return (
   <Fragment>
    <img src={a} alt='sdfksdf'/>
    <img src={a} alt='photoerwer'/>
    <img src='gallery/img4.jpg' alt='sdhf sdhfsd'/>
    <img src={Myphoto} alt='sdkfhsjhf'/>
    <h1>this is heading</h1>
    <p style={{color:'blue',backgroundColor:'red',fontSize:80}}>this is inline css in react js</p>
    <h4 className='abc' id="one">this is use of class </h4>
   </Fragment>
  )
}

export default Myimage