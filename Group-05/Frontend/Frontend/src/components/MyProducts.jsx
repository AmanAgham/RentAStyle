import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MyProducts(){
    const sellerid=sessionStorage.getItem("id");
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products?sellerid="+sellerid)
        .then(resp=>{
            console.log(resp.data)
            setProducts(resp.data.data)
            console.log(products)
        })
    },[])

    const deleteProduct = (prodid)=>{
        swal({
            title: "Delete product",
            text: "Are you sure to delete this product ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            axios.delete("http://localhost:8080/api/products/"+prodid)
            .then(resp=>{
                swal({
                    title: "Success",
                    text: "Product deleted successfully",
                    icon: "success",
                    button: "ok",
                  });
                axios.get("http://localhost:8080/api/products?sellerid="+sellerid)
                .then(resp=>{
                    console.log(resp.data)
                    setProducts(resp.data.data)
                    console.log(products)
                })
            })            
        } else {
            swal("Product is not deleted!");
          }
        });
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
        <div className="container">
            <div className="card shadow bg-transparent text-white">
                <div className="card-body">                    
            <h4>My Products</h4>

            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Sub Category</StyledTableCell>
                    <StyledTableCell align="center">Brand Name</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                     {products.map(x=>(
                    <StyledTableRow  key={x.prodid}>
                        <StyledTableCell align="center"><img width="100" src={"http://localhost:8080/"+x.photo} className="img-thumnail mr-3" />{x.pname}</StyledTableCell>
                        <StyledTableCell align="center">{x.pcat}</StyledTableCell>
                        <StyledTableCell align="center">{x.subcat}</StyledTableCell>
                        <StyledTableCell align="center">{x.brand}</StyledTableCell>
                        <StyledTableCell align="center">&#8377; {x.price}</StyledTableCell>
                        <StyledTableCell align="center"><Link to={"/edit/"+x.prodid} className="btn btn-dark btn-sm mr-2">Edit</Link>
                            <button onClick={()=>deleteProduct(x.prodid)} className="btn btn-danger btn-sm">Delete</button></StyledTableCell>
                    </StyledTableRow>
                ))}
               </TableBody>
            </Table>
            </TableContainer>
            </div>
            </div>
            </div>
    )
}

export default MyProducts;