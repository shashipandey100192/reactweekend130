import React from 'react'
import Thirdchild from './Thirdchild'

function Childelement(props) {
  return (

    <section className='mychild'>
        <div>Childelement {props.x} age is :{props.myage}</div>
        <Thirdchild name={props.x}></Thirdchild>
    </section>
  )
}

export default Childelement