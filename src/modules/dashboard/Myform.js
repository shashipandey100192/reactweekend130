import React, { useState } from 'react'
import { useForm} from 'react-hook-form';
let mydata = [];

function Myform() {
  const {register,handleSubmit,formState: { errors }} = useForm();

const mysubmit = (eles)=>
{
  console.log(eles);
  console.log(formvalue);
  mydata.push(formvalue);
  console.log(mydata);
}

  const [formvalue,updatefunction]=useState({
    fullname:"",
    email:"",
    phone:"",
    dob:"",
    remark:""
  })


  const changvalue = (d)=>{
    const {name,value} = d.target;
    updatefunction((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }

  

  
  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container shadow p-5 mt-5 bg-light border userform'>
      <div className='row'>
        <div className='col-12'>
          <h2>User Registor Form</h2>
        </div>
        <div className='col-md-6 mt-3'>
          <label className="form-label">FullName</label>
          <input type="text" className="form-control" {...register("fullname",{required:true})} name='fullname' value={formvalue.fullname} onChange={changvalue}/>
            {errors.fullname && <span className="text-danger">full name is required</span>}
        </div>
        <div className='col-md-6 mt-3'>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" {...register("email",{required:true})} name='email' value={formvalue.email} onChange={changvalue}/>
          {errors.email && <span className="text-danger">Email is required</span>}
        </div>
        <div className='col-md-6 mt-3'>
          <label className="form-label">DOB</label>
          <input type="date" className="form-control" {...register("dob",{required:true})} name='dob' value={formvalue.dob} onChange={changvalue}/>
          {errors.dob && <span className="text-danger">date is required</span>}
        </div>
        <div className='col-md-6 mt-3'>
          <label className="form-label">Phone No</label>
          <input type="text" className="form-control" {...register("phone",{required:true})} pattern='[0-9]{10}' maxLength={10} name='phone' value={formvalue.phone} onChange={changvalue}/>
          {errors.phone && <span className="text-danger">Phone no is required</span>}
        </div>
        <div className='col-md-12'>
          <label className="form-label">Remark</label>
            <textarea className='form-control' {...register("remark",{required:true})} name='remark' value={formvalue.remark} onChange={changvalue}> </textarea>
            {errors.remark && <span className="text-danger">remark is required</span>}
        </div>

        <div className='col-12 text-center mt-3'>
          
          <button type="submit" className='btn btn-primary'>submit</button>
          <button type="reset" className='btn btn-danger ms-3'>cancel</button>
            
        </div>

      </div>
    </div>
    </form>
  )
}

export default Myform