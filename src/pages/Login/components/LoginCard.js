import React, { useState } from "react";
import loginImgbg from "../../../assets/images/login/login-card-bg.jpg";
import LoginInput from "./LoginInput";
// import { Button } from "@mui/material";
import hospital_logo from "../../../assets/images/logo/logo-full.png";
import { useSubmitCreds } from "../hooks/useSubmitCreds";
import "../../../assets/styles/styles.css";

const LoginCard = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [errs, setErrs] = useState({ email: "", password: "" });

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
            name="email"
            title="E-Mail"
            placeholder="Enter E-Mail Address"
            value={creds.email}
            handleChange={handleChange}
            err={errs.email}
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
