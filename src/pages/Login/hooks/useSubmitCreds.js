import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../../../slices/userSlice";
import { BACKEND_BASE_URI } from "../../../utils";
import axios from "axios";
import { useState } from "react";

export const useSubmitCreds = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (data, setErrs) => {
    let valid = true;
    Object.entries(data).forEach(([name, value]) => {
      if (!value || (value && value.length === 0)) {
        setErrs((prev) => {
          return { ...prev, [name]: `Please enter ${name}` };
        });
        valid = false;
      } else {
        setErrs((prev) => {
          return { ...prev, [name]: "" };
        });
      }
    });
    return valid;
  };
  const handleSubmit = (data, setErrs) => {
    const valid = validate(data, setErrs);
    if (valid) {
      // backend request
      axios.post(BACKEND_BASE_URI + "/api/v1/auth/authenticate", data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          dispatch(
            saveLogin({
              logged: true,
              type: response.data.message.toLowerCase(),
              name: "ABC " + response.data.message,
            })
          );
          console.log("Setting storage");
          localStorage.setItem("accesstoken", response.data.token);
          console.log("Set storage");
          const role = data.email.split("@")[0].toLowerCase();
          navigate(`/${role}/dashboard`);
        }
      })
      .catch((error) => {
        console.log(error)
      })

      
    }
    // show errors
  };
  return { handleSubmit };
};
