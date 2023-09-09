import React, { Fragment, useState } from 'react';
import axios from 'axios';
let mystatus;

function Apiaxios() {
const [sv,sf] = useState([])

    const mygetapi = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log(res.data);
            sf(res.data)
        })
    }

    return (
        <Fragment>
            <div>Apiaxios</div>
            <button className='btn btn-primary' type='button' onClick={mygetapi}> axios api </button>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Total:{sv.length}</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#id</th>
                                    <th scope="col">userId</th>
                                    <th scope="col">title</th>
                                    <th scope="col">complited status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sv.map((d)=>{
                                    return(
                                        <tr key={d.id}>
                                            <th scope="row">{d.id}</th>
                                            <td>{d.userId}</td>
                                            <td>{d.title}</td>
                                            <td>{d.completed===true ? "True":"False"}</td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default Apiaxios