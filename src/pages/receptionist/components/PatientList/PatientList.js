// In PatientList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography } from '@mui/material';

const PatientList = () => {
  const patients = [
    {
        "patientID": "P001",
        "name": "John Doe",
        "sex": "Male",
        "age": 30
    },
    {
        "patientID": "P002",
        "name": "Jane Smith",
        "sex": "Female",
        "age": 25
    },
    {
        "patientID": "P003",
        "name": "Alice Brown",
        "sex": "Female",
        "age": 40
    }
];

  return (
    <div style={{ marginTop: '50px' }}>
      <Typography variant="h5" gutterBottom align='center'>
        List of Patients
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <TableContainer component={Paper} sx={{ width: '80%', maxWidth: '800px', margin: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Patient ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Sex</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
                <TableCell><strong>Edit Details</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.patientID}>
                  <TableCell>{patient.patientID}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.sex}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>
                    <Link to={`/edit/${patient.patientID}`}>
                      <Button variant="contained" color="primary" sx={{ borderRadius: '10px' }}>Edit</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PatientList;
