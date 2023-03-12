import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';



const ForgotPassword = () => {

  const [data, setData] = useState({
    email: "",
  });

  const history=useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    const userData = {
      email: data.email,
      //password: data.password
    };

    axios.post("http://localhost:8080/api/customers/passwordrecovery", userData).then(
        (response)=>{
            console.log(response);
            JSON.stringify(response);
            swal({
                title: "Success",
                text: "Password is Successfully send to your Email Address",
                icon: "success",
                button: "ok",
              });
            history.push("/");
        },
        
    ).catch((error)=>
    console.log(error.response),
    {
      "firstName":"Enter Correct Email Id"
    
    }
    )


  };

  return (
    <div>
      <div className="Login">
        <div className="Auth-form-container text-white " style={{width:"30%", alignItems:"center"}}>
          <form className="Auth-form" onSubmit={handleSubmit}>
            <h3 className="Auth-form-title">Let's Recover Your Password</h3>
            <div className="form-group mt-3">
            <label className="text-center"><h5>Step 1: Enter Email address</h5></label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="form-control mt-1"
              placeholder="Enter Email"
            />
            </div>
            <div />

            <br></br>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
