import React, { useState } from 'react';
import { FcApproval,FcAssistant} from "react-icons/fc";

function Mymobile() {
const a = 11;


const [xyz,setup]=useState( <FcApproval/>)
const b = 20;
const myfunc = ()=>{
    if(b===20)
    {
      return setup( <FcAssistant/>)
    }
    else
    {
      return setup(<FcApproval/>)
    }
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
            <h2>conditional rendering component</h2>

        <h2>{a===10 ? <FcApproval/> : <FcAssistant/>} </h2>
          <h1>
            <FcApproval/>
        </h1>

<button type='button' onClick={myfunc}>click to change</button>
      <div>
    {xyz}

      </div>
        </div>
      </div>
    </div>
  )
}

export default Mymobile