import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddAppointment = () => {
  const [patientID, setPatientID] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleAddAppointment = () => {
    if (patientID.trim() === '' || selectedDoctor.trim() === '' || selectedTime.trim() === '') {
      alert('Please enter patient ID, select doctor, and select time for the appointment.');
      return;
    }
  
    const newAppointment = {
      patientID: patientID,
      doctor: selectedDoctor,
      time: selectedTime
    };
  
    // Send appointment data to the backend
    axios.post('/api/appointments', newAppointment)
      .then(response => {
        console.log(response.data);
        // Reset fields after adding appointment
        setPatientID('');
        setSelectedDoctor('');
        setSelectedTime('');
      })
      .catch(error => {
        console.error('Error adding appointment:', error);
      });
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <Card variant="outlined" sx={{ maxWidth: 500, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            New Appointment
          </Typography>
          <TextField
            fullWidth
            label="Patient ID"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <div className='container'>
          <Button variant="contained" color="primary" onClick={handleAddAppointment} style={{borderRadius:'10px'}}>
            Add Appointment
          </Button>
          <Button variant="contained" color="error" onClick={handleAddAppointment} style={{float:'right', borderRadius:'10px'}}>
            Cancel
          </Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default AddAppointment;
