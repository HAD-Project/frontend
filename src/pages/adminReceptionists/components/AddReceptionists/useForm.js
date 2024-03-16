import React,{useState} from 'react'
import { makeStyles, } from '@material-ui/core';

export const useForm = (initialFValues) => {
    const [receptionists,setReceptionists] = useState(initialFValues);
    const handleInputChange = e => {
        const {name,value} = e.target
        setReceptionists({
            ...receptionists,
            [name]:value
        })
      }
  return {
    receptionists,
    setReceptionists,
    handleInputChange
  };
}
const useStyle = makeStyles(theme =>({
    root:{
      '& .MuiGrid-root':{
        width:'80%',
        margin:theme.spacing(1),
        backgroundColor: '#FFFFFF',
        color:'black'
      }
    }
}))
export const Form = (props) => {
    const classes = useStyle();
  return (
    <form className={classes.root}>
        {props.children}
    </form>
  )
}


