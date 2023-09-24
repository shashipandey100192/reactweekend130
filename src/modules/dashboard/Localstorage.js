import React from 'react'

function Localstorage() {
    
    var mylocaldata = JSON.parse(localStorage.getItem('myformdata'));
  
    return (
    <div className='container'>
    <div className='row'>
        <div className='col-12'>
            <h3>Total: {mylocaldata.length}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Email id</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Remarks</th>

                    </tr>
                </thead>
                <tbody>
                    {mylocaldata.map((d,c=1)=>{
                        return(
                            <tr key={++c}>
                                <th scope="row">{++c}</th>
                                <td>{d.fullname}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.dob}</td>
                                <td>{d.remark}</td>
                                
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
   
  )
}

export default Localstorage