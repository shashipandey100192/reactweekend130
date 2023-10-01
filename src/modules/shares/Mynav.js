import React from 'react'
import { Link } from 'react-router-dom'
import { RegistorModal } from './Mymodals'

function Mynav() {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reactbootstrap">reactBS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="uimetrial">metrial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="props">props</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="binding">data binding</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myaxios">axios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="mygraph">graph</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myservice">service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myform">form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="lazyloading">lazy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myredux">redux</Link>
          </li>
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registor">
          Registor
      </button>
        </form>
      </div>
    </div>
    <RegistorModal/>
  </nav>
  )
}

export default Mynav