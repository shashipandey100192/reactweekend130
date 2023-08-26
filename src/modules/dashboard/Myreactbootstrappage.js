import React, { Fragment } from 'react';
import Button  from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Myimg from '../../images/img4.jpg';

function Myreactbootstrappage() {
  return (
    <Fragment>
    <div>Myreactbootstrappage</div>
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
    </Fragment>
  )
}

export default Myreactbootstrappage