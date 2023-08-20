import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {
  return (
    <Fragment>
        <div className='text-center'>
    <h1 className='err'>404</h1>
    <p className='text-center'>Page Not Found</p>
    <Link to="/" className='btn btn-success btn-sm'>Back to Login</Link>
    </div>
    </Fragment>
  )
}

export default Myerrorpage