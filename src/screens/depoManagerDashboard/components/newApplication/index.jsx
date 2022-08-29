import React from 'react'
import { styles } from './styles'
import {useNavigate} from "react-router-dom"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1b84e7",
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
  
  function createData(name, mobile, email, area, gstNo,isReturn,expiration) {
    return { name, mobile, email, area, gstNo,isReturn,expiration };
  }
  
  const rows = [
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "No"),
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "yes"),
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "yes"),
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "No"),
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "yes"),
    createData( "1","#1232342","Mr. Rohit Kumar", "9876543210", "Baridih", "Kashidih", "12/01/2023",  "yes"),
  ];

export default function NewApplication() {

    let navigate = useNavigate();

  return (
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: "700" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl.No</StyledTableCell>
            <StyledTableCell align="right">Application Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Mobile No.</StyledTableCell>
            <StyledTableCell align="right">Area</StyledTableCell>
            <StyledTableCell align="right">Entry/Application Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.area}</StyledTableCell>
              <StyledTableCell align="right">{row.gstNo}</StyledTableCell>
              <StyledTableCell align="right">{row.expiration}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{navigate("/applicationDetails")}} variant="text">View</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
