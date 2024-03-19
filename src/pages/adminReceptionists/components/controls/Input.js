import { TextField } from '@material-ui/core';
import React from 'react'

export const Input = (props) => {
    const { name, label, value,error=null, onChange } = props;
  return (
    <div>
        <TextField 
            label={label} 
            name={name}
            value={value} 
            error {...(error && {error:true,helperText:error})} 
            onChange={onChange} 
            variant="standard" />
    </div>
  )
}
