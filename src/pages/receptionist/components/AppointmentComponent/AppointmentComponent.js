import React, { useEffect, useState } from 'react';
import { createAppointment, getAppointment, updateAppointment } from '../../../../services/ReceptionistService';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Grid, Box } from '@mui/material';

const AppointmentComponent = () => {
  const [patientID, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const navigator = useNavigate();

  const {id} = useParams();
  useEffect(() => {
    if(id){
      getAppointment(id).then((response) => {
        setPatient(response.data.patientID);
        setDoctor(response.data.doctor);
        setDate(response.data.date);
        setTime(response.data.time);
        setName(response.data.name);
        setType(response.data.type);
        setStatus(response.data.status);
      }).catch(error => {
        console.error(error);
      })
    }
  },[id])

  const [errors, setErrors] = useState({
    patientID: '',
    name: '',
    doctor: '',
    date: '',
    time: '',
    type: '',
    status: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const appointment = { patientID, name, doctor, date, time, type, status };
      console.log(appointment);

      if(id){
        updateAppointment(id,appointment).then((response) => {
          console.log(response.data);
          navigator('/appointment-list');
        }).catch(error => {
          console.error(error);
        })
      }else{
        createAppointment(appointment).then((response) => {
          console.log(appointment.data);
          navigator('/appointment-list');
        }).catch(error => {
          console.error(error);
        })
      }
      
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (patientID.trim()) {
      errorsCopy.patientID = '';
    } else {
      errorsCopy.patientID = 'Patient ID is required';
      valid = false;
    }

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }

    if (doctor.trim()) {
      errorsCopy.doctor = '';
    } else {
      errorsCopy.doctor = 'Doctor name is required';
      valid = false;
    }

    if (!date) {
      errorsCopy.date = 'Date is required';
      valid = false;
    } else {
      errorsCopy.date = '';
    }

    if (!time) {
      errorsCopy.time = 'Time is required';
      valid = false;
    } else {
      errorsCopy.time = '';
    }

    if (type.trim()) {
      errorsCopy.type = '';
    } else {
      errorsCopy.type = 'Type is required';
      valid = false;
    }

    if (status.trim()) {
      errorsCopy.status = '';
    } else {
      errorsCopy.status = 'Status is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '50%', maxWidth: 400 }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Add Appointment</h2>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Patient ID"
              variant="outlined"
              value={patientID}
              onChange={(e) => setPatient(e.target.value)}
              required
              fullWidth
              error={!!errors.patientID}
              helperText={errors.patientID}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Doctor"
              variant="outlined"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
              fullWidth
              error={!!errors.doctor}
              helperText={errors.doctor}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              fullWidth
              error={!!errors.date}
              helperText={errors.date}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              fullWidth
              error={!!errors.time}
              helperText={errors.time}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Type"
              variant="outlined"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              fullWidth
              error={!!errors.type}
              helperText={errors.type}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Status"
              variant="outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              fullWidth
              error={!!errors.status}
              helperText={errors.status}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth onClick={handleSubmit}>
              Add Appointment
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentComponent;
