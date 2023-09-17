import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
var code='';

function Detailspage() {
    
    const [single,updatda]=useState({})
    const {id} = useParams();
    const mygetapi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            console.log(res);
            code = res.status;
            updatda(res.data);
            
        })
    }

    useEffect(()=>{
        mygetapi();
    },[])


  return (
   <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Data Id: {single.id}</h1>
            <h3>title: {single.title}</h3>
            <button className='btn btn-primary'> {single.userId}</button>
            <h1>Data Status : {single.completed===true ? "Ok":"Not"}</h1>

            <h2 className='bg-info'>API Status Code:{code}</h2>
        </div>
    </div>
   </div>
  )
}

export default Detailspage