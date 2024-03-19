import React,{useState} from 'react'
import { makeStyles, } from '@material-ui/core';

export const useForm = (initialFValues, validateOnChange = false, validate) => {
    const [receptionists,setReceptionists] = useState(initialFValues);
    const [errors, setErrors] = useState({});
    const handleInputChange = e => {
        const {name,value} = e.target
        setReceptionists({
            ...receptionists,
            [name]:value
        })
        if (validateOnChange)
            validate({ [name]: value })
      }
    const resetForm = () => {
      console.log(initialFValues)
        setReceptionists(initialFValues);
        setErrors({})
    }

  return {
    receptionists,
    setReceptionists,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  };
}
const useStyle = makeStyles(theme =>({
    root:{
      '& .MuiGrid-root':{
        width:'100%',
        backgroundColor: '#FFFFFF',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
}))
export const Form = (props) => {
    const classes = useStyle();
    const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete='off' {...other}>
        {props.children}
    </form>
  )
}


