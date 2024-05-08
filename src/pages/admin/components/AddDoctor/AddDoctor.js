import React, { useState } from 'react'
import styles from './AddDoctor.module.css'
import { Grid, TextField } from '@mui/material'
import axios from 'axios'
import { People } from '@mui/icons-material'

const AddDoctor = (props) => {
    const [ doctor, setDoctor ] = useState({
            "name": "",
            "username": "",
            "password": "",
            "gender": "",
            "qualifications": "",
            "department": "Pathology"
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDoctor(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/admin/createDoctor", doctor)
        .then((response) => {
            if (response.status === 200) {
                props.setDoctors([ ...props.doctors, doctor ])
                console.log("success")
                props.setShowAddModal(!props.showAddModal)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    const handleClose = () => {
        props.setShowAddModal(!props.showAddModal)
    }
    console.log(props.doctors)


  return (
    <div className={styles.root}>
        <div className={styles.modal}>
            <Grid container>
                <Grid xs={12} className={styles.modalTitle}>
                    <b><i>ADD DOCTOR</i></b>
                </Grid>
                <Grid xs={12} className={styles.formDiv}>
                    <form onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue="Enter Name"
                                    name='name'
                                    value={doctor.name || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    defaultValue="Username"
                                    name='username'
                                    value={doctor.username || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    name='password'
                                    value={doctor.password || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Qualifications"
                                    defaultValue="Qualifications"
                                    name='qualifications'
                                    value={doctor.qualifications || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Gender"
                                    defaultValue="Gender"
                                    name='gender'
                                    value={doctor.gender || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <input type='submit'/>
                            </Grid>
                            <Grid xs={12} className={styles.formField}>
                                <button onClick={handleClose} className={styles.closeButton}>Close</button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default AddDoctor