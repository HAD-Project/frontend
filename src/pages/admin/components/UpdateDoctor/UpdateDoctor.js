import React, { useState } from 'react'
import styles from './UpdateDoctor.module.css'
import { Grid, TextField } from '@mui/material'
import axios from 'axios'

const UpdateDoctor = (props) => {
    const tobeupdated = props.email;
    const [ doctor, setDoctor ] = useState({
            "name": props.name,
            "username": props.username,
            "email":props.email,
            "phone":props.phone,
            "gender": props.gender,
            "qualifications": props.qualifications,
            "department": "SOME DEPARTMENT"
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDoctor(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:9191/api/v1/doctor/updateDoctor/"+tobeupdated, doctor,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("success")
                props.setShowEditModal(!props.showEditModal)
                window.location.reload()
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    const handleClose = () => {
        props.setShowEditModal(!props.showEditModal)
    }


    return (
    <div className={styles.root}>
        <div className={styles.modal}>
            <Grid container>
                <Grid xs={12} className={styles.modalTitle}>
                    <b><i>EDIT DOCTOR</i></b>
                </Grid>
                <Grid xs={12} className={styles.formDiv}>
                    <form onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue={doctor.name || ''}
                                    name='name'
                                    value={doctor.name || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="email"
                                    defaultValue="Email"
                                    name='email'
                                    value={doctor.email || ''}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Qualifications"
                                    defaultValue={doctor.qualifications || ''}
                                    name='qualifications'
                                    value={doctor.qualifications || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={6} className={styles.formField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="phone"
                                    defaultValue="phone"
                                    name='phone'
                                    value={doctor.phone || ''}
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

export default UpdateDoctor