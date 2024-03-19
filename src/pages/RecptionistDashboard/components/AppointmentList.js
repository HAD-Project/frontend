import React from 'react'
import ContainerCard from '../../../components/ContainerCard'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const AppointmentList = () => {
  return (
    <ContainerCard title="Appointments">
        <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5].map((row) => (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`Patient ${row}`}
                </TableCell>
                <TableCell>{"Dr John"}</TableCell>
                <TableCell>{"2:30 pm"}</TableCell>
                <TableCell>{"Outpatient"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerCard>
  )
}

export default AppointmentList