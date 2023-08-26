import React from 'react'
import Mysidebar from '../shares/Mysidebar'

function Mylandingpage() {
  return (
    <div className='container-fluid g-0'>
        <div className='row g-0'>
            <div className='col-12'>
                {/* <Mynav/> */}
            </div>
        </div>
        <div className='row g-0'>
            <div className='col-sm-2'>
               <Mysidebar/>
            </div>
            <div className='col-sm-10 p-2'>
                <section className='border'>
                    <h1>container blog</h1>
                </section>
            
            </div>
        </div>
    </div>
  )
}

export default Mylandingpage