import React from 'react'

function Databinding() {
const mydata = [
    {name:'kumar',age:20,course:'webdesign'},
    {name:'khan',age:20,course:'webdesign'},
    {name:'singh',age:20,course:'webdesign'},
    {name:'mohan',age:50,course:'webdesign'},
    {name:'kumar',age:20,course:'webdesign'},
    {name:'kumar',age:20,course:'webdesign'},
    {name:'kumar',age:20,course:'webdesign'},
    {name:'kumar',age:20,course:'webdesign'}
];


  return (
    <div className='container-fluid'>
        <div className='row'>
            {mydata.map((d)=>{
                return(
                <div className='col-md-3 mt-3'>
                <div className="card bg-info shadow">
                    <div className="card-body">
                        <h5 className="card-title">{d.course}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{d.age}</h6>
                        <p className="card-text">{d.name}</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                    </div>
                </div>
                
                )
            })}
        </div>
    </div>
  )
}

export default Databinding