import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./registerPatient.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";
import { BACKEND_BASE_URI } from "../../utils";

const FormSections = ({ data, errs, handleData, setData }) => {
  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [validOTP, setValidOTP] = useState(false);
  const [req, setReq] = useState(false);
  const [value, setValue] = useState(dayjs(new Date()));
  const [txnId, setTxnId] = useState("")
  const [authInit, setAuthInit ] = useState({
    authMethod: "MOBILE_OTP",
    healthid: ""
  }) 
  const [otpVerification, setOtpVerification] = useState({
    otp: 0,
    txnId: ""
  })
  const handleOTP = (e) => {
    const { value } = e.target;
    setOtp(value);
    if (value.length === 0) {
      setOtpErr("Please Enter OTP");
    }
  };

  const submitABHA = () => {
    setAuthInit({
      authMethod: "MOBILE_OTP",
      healthid: data.abha
    })
    console.log("submit abha address to get otp", data.abha);
    setReq(true);
    axios.post(BACKEND_BASE_URI + "/api/abdm/initAuth", authInit, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accesstoken")
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setTxnId(response.data.txnId)
      }
    })
    .catch((error) => {
      console.log(error)
    })

  };
  const submitOTP = () => {
    console.log("submit otp and get data", otp);
    setOtpVerification({
      otp: parseInt(otp),
      txnId: txnId
    })

    axios.post(BACKEND_BASE_URI + "/api/abdm/confirmMobileOtp", otpVerification, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accesstoken")
      }
    })
    .then((response) => {
      if (response.status === 200) {
        axios.get(BACKEND_BASE_URI + "/api/abdm/getProfile", {
          headers: {
            'Authorization': "Bearer " + localStorage.getItem('accesstoken'),
            'X-Token': response.data.token
          }
        })
        .then((newResponse) => {
          if (newResponse.status === 200) {
            const dob_update = dayjs(new Date(newResponse.data.yearOfBirth + "-" + newResponse.data.monthOfBirth + "-" + newResponse.data.dayOfBirth));
            setData({...data, 
              name: newResponse.data.name, 
              sex: newResponse.data.gender, 
              dob:dob_update,
              age: dayjs().diff(dob_update, 'year'),
              phoneNumber: newResponse.data.mobile,
              address: newResponse.data.address,
              abhaAddress: newResponse.data.healthId,
            })
            setValue(dob_update)
          }
        })
        .catch((error) => {
          console.log(error)
        })
        
      }
    })
    .catch((error) => {
      console.log(error)
    })
  };
  console.log(data)

  const handleForm = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = name !=="abha_available" ? e.target.value : e.target.checked;
    handleData(name, value);
  };

  const handleDOB = (newValue) => {
    console.log(newValue);
    setValue(newValue);
    handleData("dob", value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
      style={{ width: "450px" }}
    >
      <div>
        <FormControlLabel
          control={
            <Checkbox name="abha_available" checked={data.abha_available} onChange={handleForm} />
          }
          label="Is ABHA Address Avaialble"
        />
      </div>
      <div className="register-txt-btn-section">
        <TextField
          name="abha"
          label="ABHA Address"
          placeholder="Enter ABHA Address"
          value={data.abha}
          error={errs.abha?.length > 0}
          helperText={errs.abha}
          onChange={handleForm}
          fullWidth
          sx={{ width: "100%" }}
          disabled={!data.abha_available}
        />
        <Button
          variant="contained"
          size="small"
          disabled={!data.abha_available}
          onClick={submitABHA}
        >
          Request OTP
        </Button>
      </div>
      {req && (
        <div className="register-txt-btn-section">
          <TextField
            error={otpErr.length > 0}
            name="otp"
            label="OTP"
            placeholder="Enter OTP"
            value={otp}
            helperText={otpErr}
            onChange={handleOTP}
            fullWidth
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            size="small"
            onClick={submitOTP}
            disabled={otp.length === 0}
          >
            Verify
          </Button>
        </div>
      )}
      {/* <FormControl component="fieldset" disabled={true} fullWidth sx={{ width: "100%" }}> */}
      <div>
        <TextField
          name="name"
          label="Patient Name"
          placeholder="Enter Patient Name"
          value={data.name}
          error={errs.name?.length > 0}
          helperText={errs.name}
          onChange={handleForm}
          fullWidth
          sx={{ width: "100%" }}
        />
        <FormControl
          fullWidth
          sx={{ m: 1, width: "100%" }}
          error={errs.sex?.length > 0}
        >
          <InputLabel id="register-sex-label">Sex</InputLabel>
          <Select
            labelId="register-sex-label"
            name="sex"
            value={data.sex}
            label="Sex"
            onChange={handleForm}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"M"}>Male</MenuItem>
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"T"}>Trans Gender</MenuItem>
          </Select>
          {errs.sex?.length > 0 && <FormHelperText>{errs.sex}</FormHelperText>}
        </FormControl>
        <TextField
          name="age"
          label="Age"
          placeholder={data.age === ''? "Enter Phone Number" : ""}
          value={data.age}
          error={errs.age?.length > 0}
          helperText={errs.age}
          onChange={handleForm}
          fullWidth
          style={{ width: "100%" }}
          // sx={{width:"20ch"}}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            fullWidth
            sx={{ width: "100%", padding: 0 }}
          >
            <DatePicker
              label="Date of Birth"
              value={value}
              onChange={handleDOB}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          name="phoneNumber"
          label="Phone Number"
          placeholder={data.phoneNumber === ''? "Enter Phone Number" : ""}
          value={data.phoneNumber}
          error={errs.phoneNumber?.length > 0}
          helperText={errs.phoneNumber}
          onChange={handleForm}
          fullWidth
          sx={{ width: "100%" }}
        />

        <TextField
          name="address"
          label="Address"
          placeholder="Enter Address"
          value={data.address}
          error={errs.address?.length > 0}
          helperText={errs.address}
          onChange={handleForm}
          fullWidth
          sx={{ width: "100%" }}
        />
      </div>
      {/* </FormControl> */}
    </Box>
  );
};

export default FormSections;
