import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AllCustomers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])

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
            <h4 className="text-white p-2 text-center">All Customers</h4>

            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">City</StyledTableCell>
                    <StyledTableCell align="center">Gender</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">User Id</StyledTableCell>
                    <StyledTableCell align="center">Password</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {customers.map(x=>(
                    <StyledTableRow key={x.id}>
                        <StyledTableCell align="center">{x.name}</StyledTableCell>
                        <StyledTableCell align="center">{x.city}</StyledTableCell>
                        <StyledTableCell align="center">{x.gender}</StyledTableCell>
                        <StyledTableCell align="center">{x.phone}</StyledTableCell>
                        <StyledTableCell align="center">{x.userid}</StyledTableCell>
                        <StyledTableCell align="center">{x.pwd}</StyledTableCell>
                        </StyledTableRow>
               ))}
               </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default AllCustomers;