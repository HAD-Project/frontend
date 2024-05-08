import React, { useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Form, useForm } from './useForm';
import { Input } from '../controls/Input';
import RadioGroup from '../controls/RadioGroup';
import Button from '../controls/Button';

const genderItems = [
  { id: 'Male', title: 'Male' },
  { id: 'Female', title: 'Female' },
  { id: 'Other', title: 'Other' },
]

const AddReceptionists = (props) => {
    
    const emailreceptionists=props&& props.userData?props.userData.email:null;
    const initialFValues= {
    name: '',
    gender: 'Male',
    username: '',
    password: '',
    email: '',
    phone: '',
    qualifications: '',
    role: 'RECEPTIONIST'
};

    const validate = (fieldValues = receptionists) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('username' in fieldValues)
            temp.username = fieldValues.username ? "" : "This field is required."
        if ('password' in fieldValues && props.userData === null)
            temp.password = fieldValues.password ? "" : "This field is required."
        if ('qualifications' in fieldValues)
            temp.qualifications = fieldValues.qualifications ? "" : "This field is required."  
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('phone' in fieldValues)
            temp.phone = fieldValues.phone.length > 9 ? "" : "Minimum 10 numbers required."
        
        setErrors({
            ...temp
        })
        console.log(temp)
        if (fieldValues === receptionists)
            return Object.values(temp).every(x => x === "")
        return true;
    }
    const { receptionists,setReceptionists,errors,
      setErrors,handleInputChange, resetForm } = useForm(initialFValues,true,validate);

   
    const handleSubmit = async(e) => {
      let response
      e.preventDefault()
      console.log("teststgsts")
      const valid=validate()
      console.log(receptionists)
      if(valid)
      { 
        console.log("validated") 
        if (props.userData === null) {
            // Create receptionist
            response = await props.receptionistsService.createReceptionists(receptionists);
            console.log(response)
        } else {
            // Update receptionist
            console.log("updating")
            response = await props.receptionistsService.updateReceptionists(emailreceptionists  , receptionists);
        }
        if (Object.keys(response.data).length > 0) window.location.reload();
    }
    }

    useEffect(() => {
        if (props.userData !== null) {
            setReceptionists(props.userData);
        }
    }, [props.userData]);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <TextField name="name" label="name" value={receptionists.name} onChange={handleInputChange} error={errors.name}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="username" name="username" value={receptionists.username} onChange={handleInputChange} error={errors.username}/>
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                          name="gender"
                          label="Gender"
                          value={receptionists.gender}
                          onChange={handleInputChange}
                          items={genderItems}
                      />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="email" name="email" value={receptionists.email} onChange={handleInputChange} error={errors.email}/>
                </Grid>
                {(props.userData===null)&&(
                <Grid item xs={12}>
                    <TextField type="password" label="password" name="password" value={receptionists.password} onChange={handleInputChange} error={errors.password}/>
                </Grid>
                )}
                <Grid item xs={12}>
                    <TextField label="phone" name="phone" value={receptionists.phone} onChange={handleInputChange} error={errors.phone}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="qualifications" name="qualifications" value={receptionists.qualifications} onChange={handleInputChange} error={errors.qualifications}/>
                </Grid>
                <div>
                    <Button
                        type="submit"
                        text="Submit" />
                    <Button
                        text="Reset"
                        color="default"
                        onClick={resetForm}
                         />
                  </div>
            </Grid>
        </Form>
    )
}

export default AddReceptionists;
