import React from "react";

const ContainerCard = ({ title, children }) => {
  return (
    <div className="hsc-container-card">
      <div className="hsc-container-card-title">{title}</div>
      <div className="hsc-container-card-body">{children}</div>
    </div>
  );
};

export default ContainerCard;
