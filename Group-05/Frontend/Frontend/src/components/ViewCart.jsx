import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ViewCart(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch()
    const history=useHistory()
    const [address,setAddress]=useState({
        "city":"",
        "state":"Delhi",
        "zip":"12324",
        "country":"India"
    })
    const [payment,setPayment]=useState({
        "cardno":"1212444433336666",
        "nameoncard":"Test Name",
        "cvv":"123",
        "amount":state.cart.reduce((a,b)=> (a+b.price),0)       
    })
    const deleteItem=(item)=>{
        swal({
            title: "Delete item",
            text: "Are you sure to delete this item ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {       
        dispatch({type:'RemoveItem',payload:item})   
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        console.log("Amount ",amount)
        swal("Item has been deleted!", {
            icon: "success",
          });
        }else {
            swal("Item is not deleted!");
          }
        });
    }
    const handleAddressInput=(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const handlePaymentInput=(e)=>{
        setPayment({...payment,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(state.cart)
        let amount=state.cart.reduce((a,b)=> (a+b.price*parseInt(b.qty)),0)
        setPayment({...payment,'amount':amount}) 
        console.log("Amount => ",amount)
    },[state.cart])

    const handleSubmit=(e)=>{
        e.preventDefault()
        let amount=state.cart.reduce((a,b)=> (a+(b.price * parseInt( b.qty))),0)
        console.log("Amount ",payment.amount)
        setPayment({...payment,'amount':amount})

        let data={
            'cart':state.cart,
            'payment':payment,
            'address':address,
            'customerid':sessionStorage.getItem('id')
        } 
        console.log(data) 
        axios.post("http://localhost:8080/api/orders",data)
        .then(resp=>{
            console.log(resp)
            dispatch({type:'Clear'});
            swal({
                title: "Success",
                text: "Order placed successfully",
                icon: "success",
                button: "ok",
              });
            history.push('/myorders')
           
        })  
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return (
        <div className="container-fluid text-white text-center">
            
            {state.cart.length>0 ? 
            <div className="row">
                <div className="col-sm-7 mr-5">
                <h4 className="p-2">Cart View</h4>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                    <StyledTableCell align="center">Product Id</StyledTableCell>
                    <StyledTableCell align="center">Product Photo</StyledTableCell>
                    <StyledTableCell align="center">Product Name</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {state.cart.map(item=>(
                        <StyledTableRow key={item.prodid}>
                            <StyledTableCell align="center">{item.prodid}</StyledTableCell>
                            <StyledTableCell align="center">
                                <img className="mr-2 float-left" src={"http://localhost:8080/"+item.photo} width="100" /></StyledTableCell>
                                <StyledTableCell align="center"> {item.pname}
                                </StyledTableCell>
                                <StyledTableCell align="center">&#8377; {item.price}</StyledTableCell>
                                <StyledTableCell align="center">{item.qty}</StyledTableCell>
                                <StyledTableCell align="center">&#8377; {item.qty * item.price}</StyledTableCell>
                                <StyledTableCell align="center"><button onClick={e=>deleteItem(item)} className="btn btn-danger">Delete</button></StyledTableCell>
                                </StyledTableRow>
                    ))}

                    <TableRow>
                        <TableCell colSpan={5} align="right">Total Amount</TableCell>
                        <TableCell align="center">&#8377; {state.cart.reduce((a,b)=> (a+b.price*parseInt(b.qty)),0)}</TableCell>
                    </TableRow>

                </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div className="card shadow  bg-transparent text-white text-center col-sm-4">     
            <form onSubmit={handleSubmit} >           
                <h5 className="p-2">Address Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">City</label>
                    <div className="col-sm-8">
                        <input type="text" name="city" required value={address.city} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">State</label>
                    <div className="col-sm-8">
                        <input type="text" name="state" required value={address.state} onChange={handleAddressInput} className="form-control" />
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Zip</label>
                    <div className="col-sm-8">
                        <input type="text" name="zip" required value={address.zip} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Country</label>
                    <div className="col-sm-8">
                        <input type="text" name="country" required value={address.country} onChange={handleAddressInput} className="form-control" />                       
                    </div>                        
                </div>

                <h5 className="p-2">Payment Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Card No</label>
                    <div className="col-sm-8">
                        <input type="text" name="cardno" value={payment.cardno} onChange={handlePaymentInput} className="form-control" maxLength="16" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Name on Card</label>
                    <div className="col-sm-8">
                        <input type="text" name="nameoncard" value={payment.nameoncard} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Expiry Date</label>
                    <div className="col-sm-8">
                        <input type="month" required className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">CVV</label>
                    <div className="col-sm-8">
                        <input type="text" maxLength="3" value={payment.cvv} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Billed Amount</label>
                    <div className="col-sm-8">
                        <input type="text" maxLength="3" readOnly value={payment.amount} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>                
                <button className="btn btn-warning float-right">Place Order</button>
                </form>
            </div>
            </div> : <h4>Cart is Empty</h4>}
        </div>
    )
}

export default ViewCart;