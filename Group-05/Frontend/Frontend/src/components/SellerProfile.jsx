import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import swal from 'sweetalert';

function SellerProfile(){
    const history=useHistory()
    const dispatch=useDispatch()
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    const [sellers,setSellers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers")
        .then(resp=>{
            //console.log(resp.data.data)
            setSellers(resp.data.data)
            console.log(sellers)
        })
    },[])
    const deleteSeller=(id)=>{
        swal({
            title: "Delete Seller?",
            text: "Once deleted, you will not be able to recover this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log(id);
           axios.delete("http://localhost:8080/api/sellers/"+id)
           .then(resp=>{
                axios.get("http://localhost:8080/api/sellers")
                .then(resp=>{
                    //console.log(resp.data.data)
                    setSellers(resp.data.data)            
                })
                    dispatch({type:'LogOut'})
                    sessionStorage.clear();
                    history.push("/");
                
           })
              swal("Account has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Account has not been deleted! \n Please Login again!");
            //   dispatch({type:'IsLoggedIn'})
            //   history.push("/sprofile")
                dispatch({type:'LogOut'})
                sessionStorage.clear();
                history.push("/slogin")
            }
            
          });
    }
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
        <div className="container">
            <div className="card shadow m-3 p-2 bg-transparent text-white text-center">
                <h4 className="p-2" style={{borderBottom:"3px solid yellow",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
                <br/>
                <h4>Welcome {user.name}</h4>
                <h5>City : {user.city}</h5>
                <h5>User Id : {user.userid}</h5>
                <h5>Contact No : {user.phone}</h5>
            </div>
            <div style={{marginRight:"16px",textAlign:"right"}}>
                <button onClick={(e)=>deleteSeller(user.id)} className="btn btn-danger ">
                <Link style={{color:"White"}} to="/sprofile" onClick={logout}>Deactivate</Link>
                </button></div>
        </div>
    )
}

export default SellerProfile;
