import axios from "axios";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Orders(){
    const [orders,setOrders]=useState([])
    const [show,setShow]=useState(false)
    const [details,setDetails]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/orders")
        .then(resp=>{
            console.log(resp.data)
            setOrders(resp.data.data)
        })
    },[]);

    const showDetails=(orderid)=>{
        axios.get("http://localhost:8080/api/orders/"+orderid)
        .then(resp=>{
            console.log(resp.data)
            setDetails(resp.data.data.details)
        })
        setShow(true)
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                <h4 className="p-2 text-center text-white">Orders</h4>


                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                    <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Order Date</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                    <StyledTableCell align="center">Customer</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((x) => (
                    <StyledTableRow key={x.orderid}>
                    <StyledTableCell align="center">{x.orderid}</StyledTableCell>
                    <StyledTableCell align="center"><Moment format="ddd, DD-MMM-YYYY">{x.orderDate}</Moment></StyledTableCell>
                    <StyledTableCell align="center">&#8377; {x.payment.amount}</StyledTableCell>
                    <StyledTableCell align="center">{x.customer.name}</StyledTableCell>
                    <StyledTableCell align="center"><button onClick={e=>showDetails(x.orderid)} className="btn btn-dark btn-sm">Show Details</button></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  
                <div className="col-sm-6">
                    {show ? <>
                    <h4 className="p-2 text-center text-white">Order Details</h4>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                        <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Photo</StyledTableCell>
                    <StyledTableCell align="center">Product</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                            {details.map(x => (
                              <StyledTableRow key={x.product.prodid}>
                              <StyledTableCell align="center">{x.product.prodid}</StyledTableCell>
                              <StyledTableCell  align="center"><img  src={"http://localhost:8080/"+x.product.photo} width="80"/></StyledTableCell>
                              <StyledTableCell align="center" ><h5>{x.product.pname}</h5>
                              Category: {x.product.pcat}<br/>
                              Brand: {x.product.brand}<br/>
                              </StyledTableCell>
                              <StyledTableCell align="center">&#8377; {x.product.price}</StyledTableCell>
                              <StyledTableCell align="center">{x.qty}</StyledTableCell>
                          </StyledTableRow>
                            ))}
                        </TableBody>
            </Table>
            </TableContainer>
                    </> : ''}
                </div>
            </div>                
                              
        </div>                    
    )
}

export default Orders;