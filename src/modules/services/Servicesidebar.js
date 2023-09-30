import React from 'react'
import { Link } from 'react-router-dom'

function Servicesidebar() {
  return (
    <div className="flex-column flex-shrink-0 p-3 text-bg-dark servicesidebar">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/myservice" className="nav-link" aria-current="page">
          Home
        </Link>
      </li>
      <li>
        <Link to="/myservice/mycar" className="nav-link text-white">
         
         car
        </Link>
      </li>
      <li>
        <Link to="/myservice/mobile" className="nav-link text-white">
          
          Mobile
        </Link>
      </li>
      <li>
        <Link to="/myservice/leptop" className="nav-link text-white">
         
         Leptop
        </Link>
      </li>
      <li>
        <Link to="sdkjf" className="nav-link text-white">
        
          Customers
        </Link>
      </li>
    </ul>
    <hr/>

  </div>
  )
}

export default Servicesidebar