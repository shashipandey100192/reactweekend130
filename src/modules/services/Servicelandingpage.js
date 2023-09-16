import React from 'react'
import Servicesidebar from './Servicesidebar'
import { Outlet } from 'react-router-dom'

function Servicelandingpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <Servicesidebar/>
            </div>
            <div className='col-md-9'>
                <section className='border'>
                    <h1>this is containg area</h1>
                    <Outlet></Outlet>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Servicelandingpage