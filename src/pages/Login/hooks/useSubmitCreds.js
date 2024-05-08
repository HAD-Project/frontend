import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../../../slices/userSlice";
import { BACKEND_BASE_URI } from "../../../utils";
import { useCreateNotification } from "../../../components/Notification/useCreateNotification";
import { loginUser } from "../../../api/auth";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";

export const useSubmitCreds = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createNotifcation } = useCreateNotification();
  const { handleErrStatus } = useHandleStatusErrors();

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
  const handleSubmit = async (data, setErrs) => {
    const valid = validate(data, setErrs);
    if (valid) {
      // backend request
      const res = await loginUser(data);
      if (res) {
        if (res.err) {
          handleErrStatus(res);
        } else {
          dispatch(
            saveLogin({
              logged: true,
              type: res.message.toLowerCase(),
              name: res.message,
            })
          );
          // console.log("Setting storage");
          localStorage.setItem("accesstoken", res.token);
          // console.log("Set storage");
          const role = data.email.split("@")[0].toLowerCase();
          navigate(`/${role}/dashboard`);
          createNotifcation("success", {
            title: "Login",
            message: "Successfully logged in.",
          });
        }
      } else {
        createNotifcation("error", {
          title: "Login Error",
          message: "Sorry!! Issue in Login. Try again.",
        });
      }
    } else {
      createNotifcation("error", {
        title: "Login Error",
        message: "Please clear the errors.",
      });
    }
    // show errors
  };
  return { handleSubmit };
};
