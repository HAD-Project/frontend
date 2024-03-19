import React from "react";

const LoginInput = ({
  type,
  name,
  title,
  placeholder,
  handleChange,
  value,
  err,
}) => {
  return (
    <div className="login-input-section">
      <div className="login-input-label">{title}</div>
      <input
        className="login-input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {err && err.length > 0 && <div className="login-input-err">{err}</div>}
    </div>
  );
};

export default LoginInput;
