import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import swal from 'sweetalert';

function CustomerProfile(){
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };
    const [uname,setUname]=useState(sessionStorage.getItem("uname"))
    const userid=sessionStorage.getItem("userid")
    const id=sessionStorage.getItem("id")
    const city=sessionStorage.getItem("city")
    const phone=sessionStorage.getItem("phone")
    const gender=sessionStorage.getItem("gender")

    const [user,setUser]=useState({
        "id":id,
        "name":uname,
        "city":city,
        "userid":userid,
        "pwd":"",
        "phone":phone,
        "gender":gender
    })

    

    useEffect(()=>{
        axios.get("http://localhost:8080/api/customers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.put("http://localhost:8080/api/customers/"+id,user)
        .then(resp=>{
            console.log(resp)
            setUname(user.name)
        })
        .catch(error=>{
            console.log("Error",error);
            swal({
                title: "Error",
                text: "Profile not updated",
                icon: "error",
                button: "ok",
              });
            }) 
    }

    return (
        <div className="container text-white">
            <div className="row">
                <div className="col-sm-7 mx-auto">
                    <div className="card shadow bg-transparent mt-3">
                        <div className="card-body">
                        
            <h4 className="p-2 text-center">Welcome {uname}</h4>            
            <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Customer Name</label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">City</label>
                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" />                        
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Gender</label>
                        <div className="col-sm-8">
                            <select required name="gender" value={user.gender} onChange={handleInput} className="form-control">
                                <option value="">Select Gender</option>
                                <option>Male</option>     
                                <option>Female</option>     
                            </select>                       
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="text" readOnly name="userid" value={user.userid} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Phone</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />                        
                        </div>
                    </div>                    
                    <button className="btn btn-warning float-right" onClick={handleClick}>Update Profile</button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Profile Updated Successfully!!!
                        </Alert>
                    </Snackbar>
                    </form>                           
        </div>
            
        </div>
                    </div>
                </div>
            </div>
    )
}

export default CustomerProfile;
