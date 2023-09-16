import React from 'react'
import { Link } from 'react-router-dom'

function Servicesidebar() {
  return (
    <div class="flex-column flex-shrink-0 p-3 text-bg-dark servicesidebar">
    <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to="/myservice" class="nav-link" aria-current="page">
          Home
        </Link>
      </li>
      <li>
        <Link to="/myservice/mycar" class="nav-link text-white">
         
         car
        </Link>
      </li>
      <li>
        <Link to="/myservice/mobile" class="nav-link text-white">
          
          Mobile
        </Link>
      </li>
      <li>
        <Link to="/myservice/leptop" class="nav-link text-white">
         
         Leptop
        </Link>
      </li>
      <li>
        <Link to="sdkjf" class="nav-link text-white">
        
          Customers
        </Link>
      </li>
    </ul>
    <hr/>

  </div>
  )
}

export default Servicesidebar