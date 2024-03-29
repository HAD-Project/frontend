import React, { useState } from "react";
import loginImgbg from "../../../assets/images/login/login-card-bg.jpg";
import LoginInput from "./LoginInput";
// import { Button } from "@mui/material";
import hospital_logo from "../../../assets/images/logo/logo-full.png";
import { useSubmitCreds } from "../hooks/useSubmitCreds";

const LoginCard = () => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [errs, setErrs] = useState({ username: "", password: "" });

  const { handleSubmit } = useSubmitCreds();

  const handleLogin = () => handleSubmit(creds, setErrs);

  const validate = (name, value) => {
    if (!value || (value && value.length === 0)) {
      setErrs((prev) => {
        return { ...prev, [name]: `Please enter ${name}` };
      });
    } else {
      setErrs((prev) => {
        return { ...prev, [name]: "" };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prev) => {
      return { ...prev, [name]: value };
    });
    validate(name, value);
  };

  return (
    <div className="login-card-section">
      {/* image */}
      <div className="login-card-image-section">
        <img className="login-card-image" src={loginImgbg} alt="" />
      </div>
      {/* login section */}
      <div className="login-card-form-section">
        {/* hospital logo */}
        <div className="login-card-logo">
          <img className="login-logo" src={hospital_logo} alt="hospital_logo" />
          <div className="login-logo-name">HSC</div>
        </div>
        {/* form elements */}
        <div className="login-card-form">
          <LoginInput
            type="text"
            name="username"
            title="Username"
            placeholder="Enter Username"
            value={creds.username}
            handleChange={handleChange}
            err={errs.username}
          />
          <LoginInput
            type="password"
            name="password"
            title="Password"
            placeholder="Enter Password"
            value={creds.password}
            handleChange={handleChange}
            err={errs.password}
          />
        </div>
        {/* sign in button */}
        <div className="login-card-submit">
          <button className="hsc-btn-contain" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
