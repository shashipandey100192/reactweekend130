import React, { Fragment } from "react";

const b = ()=>
{
    alert("hisdfhsdf");
}


function Myhome()
{

    const a = ()=>{
        alert("hi");
    
    }

    return <h1 onClick={b}>this is home page</h1>
}

export default Myhome


export function Myhome1()
{
    const name="kumar";
    return <Fragment>
        <h2>this is heading</h2>
        <p>sdhfjsdh fjshdjfhsdjfhsd</p>
        <ul>
            <li>Home</li>
            <li>Home {10+60}</li>
            <li>Home{name}</li>
            <li>Home {<h6>ppppppppppppppppppp</h6>}</li>
            <li>Home</li>
            <hr/>
        </ul>
        </Fragment>
}


