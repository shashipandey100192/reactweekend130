import React from "react";
import { useForm } from "react-hook-form";

export const RegistorModal =()=>{
 const mysubmit = (data)=>{
    console.log(data);
 }

    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    return(
        <div className="modal fade" id="registor" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(mysubmit)}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <label className="form-label">full Name</label>
                                <input type="text" className="form-control" {...register("fullname",{ required: true })}/>
                                {errors.fullname && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-6 p-1">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" {...register("email",{required:true})} pattern="[^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$]"/>
                                <div className="form-text">required fields</div> 
                            </div>
                            <div className="col-md-6 p-1">
                                <label className="form-label">Phone No</label>
                                <input type="text" className="form-control" {...register("phone",{required:true})} pattern="[0-9]{10}"/>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-6 p-1">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" {...register("address")}/>
                                <div className="form-text">required fields</div> 
                            </div>
                            <div className="col-md-6 p-1">
                                <label className="form-label">password</label>
                                <input type="password" className="form-control"{...register("pass")}/>
                                <div className="form-text">required fields</div> 
                            </div>
                            <div className="col-md-6 p-1">
                                <label className="form-label">username</label>
                                <input type="text" className="form-control" {...register("username")}/>
                                <div className="form-text">required fields</div> 
                            </div>
                            <div className="col-md-12 p-1">
                            <button type="submit" className="btn btn-primary">Registor</button>
                            </div>
                        </div>
                    </div>

                    </form>


                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>

    )


}