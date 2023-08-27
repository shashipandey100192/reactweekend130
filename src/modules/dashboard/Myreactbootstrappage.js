import React, { Fragment, useState } from 'react';
import Button  from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Myimg from '../../images/img4.jpg';
import { AiFillAmazonSquare,AiFillAndroid } from "react-icons/ai";
import { FcBinoculars} from "react-icons/fc";

function Myreactbootstrappage() {

const [statevariable,statefunction]=useState("abc");

// const myfunc = ()=>{
//     statefunction("change value");
// }


const myfunc = (p)=>{
  console.log(p);
  statefunction(p.target.value);
}

  return (
    <Fragment>
      {/* <input type='text' value={statevariable} onClick={myfunc}/> */}
      <input type='text' value={statevariable} onInput={myfunc}/>
    <div>Myreactbootstrappage {statevariable}</div>
        <Button variant="primary"> bootstrap button</Button>
        <Carousel>
      <Carousel.Item>
        <img src={Myimg} text="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Myimg} text="First slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Myimg} text="First slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>react icons  <AiFillAmazonSquare/> <AiFillAndroid/> <FcBinoculars/></h1>
   


    </Fragment>
  )
}

export default Myreactbootstrappage