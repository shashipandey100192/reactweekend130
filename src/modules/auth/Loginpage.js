import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Loginpage() {
    const { loginWithRedirect } = useAuth0();
  return (
   <div className='mylogin'>
    <div className='rounded'>
        <div className='container'>

            <div className='row'>
            <div className='col-12 text-center'>
                   <h2>User Registerpage Page</h2>
                </div>
                <div className='col-12'>
                    <label className="form-label">Email address</label>
                    <input type='email' className='form-control' placeholder='email id'/>
                </div>
                <div className='col-12'>
                    <label className="form-label">password</label>
                    <input type='password' className='form-control' placeholder='password'/>
                </div>
                <div className='col-12 mt-2 text-center'>
                   <button className='btn btn-primary'>submit</button>
                   <button className='btn btn-danger ms-2'>cancel</button>
                   <Link to="register">New register</Link>
                   <button onClick={() => loginWithRedirect()}>Log In</button>

                </div>
            </div>
        </div>
    </div>

   </div>
  )
}

export default Loginpage