import axios from "axios";
import { useState } from "react";
import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import swal from 'sweetalert';

function AdminProfile(){
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
    const userid=sessionStorage.getItem("userid")
    const uname=sessionStorage.getItem("uname")
    const [user,setUser]=useState({
        "uname":uname,
        "userid":userid,
        "pwd":""        
    })

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.post("http://localhost:8080/api/admin",user)
        .then(resp=>{
            console.log(resp)
            sessionStorage.setItem("uname",user.uname)         
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
        <div className="container-fluid">
            <h4 className="p-2 text-white text-center">Welcome {user.uname}</h4>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <div className="card shadow bg-transparent text-white">
                        <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">User ID</label>
                                <div className="col-sm-8">
                                    <input type="text" name="userid" readOnly value={user.userid} onChange={handleInput} className="form-control" />                            
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">User Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="uname" value={user.uname} onChange={handleInput} className="form-control" />                            
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Change Password</label>
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
export default AdminProfile;
