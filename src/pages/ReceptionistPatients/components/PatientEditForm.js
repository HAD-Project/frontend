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
import React, { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const PatientEditForm = ({ data, errs, handleData }) => {
  const [value, setValue] = useState(dayjs(new Date(data.dob)));

  const handleForm = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    handleData(name, value);
  };

  const handleDOB = (newValue) => {
    console.log(newValue);
    setValue(newValue);
    handleData("dob", value);
  };
  useEffect(() => {
    setValue(dayjs(new Date(data.dob)))
  }, [data])
  
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
          placeholder={data.age === "" ? "Enter Phone Number" : ""}
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
          placeholder={data.phoneNumber === "" ? "Enter Phone Number" : ""}
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
    </Box>
  );
};

export default PatientEditForm;
