import React, { useEffect, useState } from 'react';
import { createAppointment, getAppointment, updateAppointment, getDoctors, getPatientIDs } from '../../../../services/ReceptionistService';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Grid, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AppointmentComponent = () => {
  const [patientID, setPatientID] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [remarks, setRemarks] = useState('');
  const [doctorsList, setDoctorsList] = useState([]);
  const [patientIDs, setPatientIDs] = useState([]);
  const [errors, setErrors] = useState({
    patientID: '',
    name: '',
    doctor: '',
    date: '',
    time: '',
    type: '',
    status: '',
    remarks: '',
  });

  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch doctors list
    getDoctors().then((response) => {
      setDoctorsList(response.data);
    }).catch(error => {
      console.error(error);
    });

    // Fetch patient IDs
    getPatientIDs().then((response) => {
      setPatientIDs(response.data);
    }).catch(error => {
      console.error(error);
    });

    if (id) {
      getAppointment(id).then((response) => {
        setPatientID(response.data.patientID);
        setDoctor(response.data.doctor);
        setDate(response.data.date);
        setTime(response.data.time);
        setName(response.data.name);
        setType(response.data.type);
        setStatus(response.data.status);
        setRemarks(response.data.remarks);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

function handleSubmit(e) {
  e.preventDefault();

  if (validateForm()) {
    // Format the date to match the expected format (yyyy-MM-dd)
    const formattedDate = formatDate(date); // Example: "2024-05-09"
    
    // Format the time to match one of the expected formats
    const formattedTime = formatTime(time); // Example: "13:30:00.000Z"
    
    const appointment = { patientID, name, doctorEmail: doctor.doctorEmail, date: formattedDate, time: formattedTime, type, status, remarks };
    
    if (id) {
      updateAppointment(id, appointment).then(() => {
        navigator('/receptionist/appointments');
        // Refresh appointment list after updating
        // updateAppointments();
      }).catch(error => {
        console.error(error);
      })
    } else {
      createAppointment(appointment).then(() => {
        navigator('/receptionist/appointments');
        // Refresh appointment list after creating
        // updateAppointments();
      }).catch(error => {
        console.error(error);
      })
    }
    
  }
}

function formatTime(timeString) {
  // Parse the time string to get hours and minutes
  const [hours, minutes] = timeString.split(':');

  // Create a new Date object and set the hours and minutes
  const time = new Date();
  time.setHours(parseInt(hours, 10));
  time.setMinutes(parseInt(minutes, 10));
  
  // Format the time to match one of the expected formats
  const formattedTime = time.toISOString(); // Example: "2024-05-08T13:30:00.000Z"

  return formattedTime;
}


  function formatDate(dateString) {
    // Convert dateString to Date object
    const dateObject = new Date(dateString);
    
    // Extract year, month, and day
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(dateObject.getDate()).padStart(2, '0');
    
    // Format the date as "yyyy-MM-dd"
    return `${year}-${month}-${day}`;
  }
  console.log(doctor);
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

    if (doctor.doctorName.trim()) {
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

    if (remarks.trim()) {
      errorsCopy.remarks = '';
    } else {
      errorsCopy.remarks = 'Remarks are required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '50%', maxWidth: 400 }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>{id ? 'Edit Appointment' : 'Add Appointment'}</h2>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Patient ID</InputLabel>
              <Select
                value={patientID}
                onChange={(e) => setPatientID(e.target.value)}
                required
                error={!!errors.patientID}
              >
                {patientIDs.map((patientID) => (
                  <MenuItem key={patientID} value={patientID}>{patientID}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Doctor</InputLabel>
              <Select
                value={doctor}
                onChange={(e) => {setDoctor(e.target.value)}}
                required
                error={!!errors.doctor}
              >
                {doctorsList.map((d) => (
                  <MenuItem key={d.doctorEmail} value={d}>{d.doctorName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date"
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
              label="Time"
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
          <Grid item xs={12}>
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
            <TextField
              label="Remarks"
              variant="outlined"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              required
              fullWidth
              error={!!errors.remarks}
              helperText={errors.remarks}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth onClick={handleSubmit}>
              {id ? 'Update Appointment' : 'Add Appointment'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentComponent;
