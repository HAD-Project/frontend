import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Form, useForm } from './useForm';

const initialFValues = {
    name: '',
    gender: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    qualifications: ''
}

const AddReceptionists = () => {
    const { receptionists, handleInputChange } = useForm(initialFValues);
    
    return (
        <Form>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    Add Receptionists
                </Grid>
                <Grid item xs={12}>
                    <TextField id="name" label="Name" name="name" value={receptionists.name} onChange={handleInputChange} variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="username" label="username" name="username" value={receptionists.username} onChange={handleInputChange} variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="gender" label="gender" name="gender" value={receptionists.gender} onChange={handleInputChange} variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="password" name="password" value={receptionists.password} onChange={handleInputChange} variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="phone" label="phone" name="phone" value={receptionists.phone} onChange={handleInputChange} variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="qualifications" label="qualifications" name="qualifications" value={receptionists.qualifications} onChange={handleInputChange} variant="standard" />
                </Grid>
            </Grid>
        </Form>
    )
}

export default AddReceptionists;
