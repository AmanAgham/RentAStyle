import axios from "axios";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AllSellers(){
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
            title: "Delete supplier",
            text: "Are you sure to delete this supplier ?",
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
           })
           swal("Supplier has been deleted!", {
            icon: "success",
            });
        }
     else {
      swal("Supplier is not deleted!");
    }
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
        <div className="container-fluid text-white">
            <h4 className="p-2 text-center">All Sellers</h4>
          

            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">City</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">User Id</StyledTableCell>
                    <StyledTableCell align="center">Password</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
           
                    <TableBody>
                {sellers.map(x=>(
                    <StyledTableRow key={x.id}>
                        <StyledTableCell align="center">{x.id}</StyledTableCell>
                        <StyledTableCell align="center">{x.name}</StyledTableCell>
                        <StyledTableCell align="center">{x.city}</StyledTableCell>
                        <StyledTableCell align="center">{x.phone}</StyledTableCell>
                        <StyledTableCell align="center">{x.userid}</StyledTableCell>
                        <StyledTableCell align="center">{x.pwd}</StyledTableCell>
                        <StyledTableCell align="center"><button onClick={(e)=>deleteSeller(x.id)} className="btn btn-danger btn-sm">Delete</button></StyledTableCell>
                        </StyledTableRow>
               ))}
               </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default AllSellers;