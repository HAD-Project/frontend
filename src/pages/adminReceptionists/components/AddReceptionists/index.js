import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Form, useForm } from './useForm';
import { Input } from '../controls/Input';
import RadioGroup from '../controls/RadioGroup';
import Button from '../controls/Button';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]



const AddReceptionists = (props) => {
    const [receptionists,setReceptionists] = useState({
        name: '',
        gender: 'male',
        username: '',
        password: '',
        email: '',
        phone: '',
        qualifications: ''
    });

    const validate = (fieldValues = receptionists) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('username' in fieldValues)
            temp.username = fieldValues.username ? "" : "This field is required."
        if ('password' in fieldValues)
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

        if (fieldValues === receptionists)
            return Object.values(temp).every(x => x === "")
    }
    const { updatedreceptionists,errors,
      setErrors, handleInputChange,resetForm } = useForm(receptionists,true,validate);

    const handleSubmit = async(e) => {
      let response
      e.preventDefault()
      if(validate())
      console.log(updatedreceptionists);
    //   response = await props.receptionistsService.createReceptionists(receptionists);
    //   if (Object.keys(response.data).length > 0) window.location.reload();
    }

    useEffect(() => {
        if (props.userData===null) {
        } else {
            setReceptionists(props.userData);
        }
      }, [props.userData]);
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Input name="name" label="name" value={updatedreceptionists.name} onChange={handleInputChange} error={errors.name}/>
                </Grid>
                <Grid item xs={12}>
                    <Input label="username" name="username" value={updatedreceptionists.username} onChange={handleInputChange} error={errors.username}/>
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                          name="gender"
                          label="Gender"
                          value={updatedreceptionists.gender}
                          onChange={handleInputChange}
                          items={genderItems}
                      />
                </Grid>
                <Grid item xs={12}>
                    <Input label="email" name="email" value={updatedreceptionists.email} onChange={handleInputChange} error={errors.email}/>
                </Grid>
                <Grid item xs={12}>
                    <Input label="password" name="password" value={updatedreceptionists.password} onChange={handleInputChange} error={errors.password}/>
                </Grid>
                <Grid item xs={12}>
                    <Input label="phone" name="phone" value={updatedreceptionists.phone} onChange={handleInputChange} error={errors.phone}/>
                </Grid>
                <Grid item xs={12}>
                    <Input label="qualifications" name="qualifications" value={updatedreceptionists.qualifications} onChange={handleInputChange} error={errors.qualifications}/>
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
