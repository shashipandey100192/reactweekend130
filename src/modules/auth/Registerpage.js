import React, { Fragment, useState } from 'react'

function Registerpage() {
const [svariable,sfunction]=useState(600);

const myfunc = ()=>{
    sfunction("computer");
}

const changeinput = (element)=>{
    console.log(element);
    sfunction(element.target.value);
    if(svariable==="kumar")
    {
      console.log("hiiiiiii");
    }
}


  return (
    <Fragment>
    <div>Registerpage</div>
    <input type='text' value={svariable} onChange={changeinput}/>
    <h2 onClick={myfunc}>heading: {svariable}</h2>


    </Fragment>

  )
}

export default Registerpage