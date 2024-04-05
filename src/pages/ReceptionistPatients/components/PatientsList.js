import React from "react";
import PatientBlock from "./PatientBlock";
import {
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PatientsList = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">ABHA Number</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Blood</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <PatientBlock key={i} data={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientsList;
