import React from 'react'
import ContainerCard from '../../../components/ContainerCard'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const AppointmentList = ({data}) => {
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
            {data.map((row) => (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patient.name}
                </TableCell>
                <TableCell>{row.doctor.user.name}</TableCell>
                <TableCell>{row.appointmentTime}</TableCell>
                <TableCell>{row.stayType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerCard>
  )
}

export default AppointmentList