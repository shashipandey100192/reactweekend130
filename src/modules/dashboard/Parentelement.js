import React, { Fragment } from 'react'
import Childelement from './Childelement'

function Parentelement() {
    var a="ducat india";
    var age=50;
  return (
    <Fragment>
    <div>Parentelement :{a}</div>
        <Childelement x={a} myage={age}/>
    </Fragment>

  )
}

export default Parentelement