import React from "react";
import Card from "../../../Components/Card";

const RecCard = ({ name, value, Icon }) => {
  return (
    <Card>
      <div className="rec-dashboard-card">
        <div className="rec-dashboard-content">
          <div className="rec-dashboard-card-title">{name}</div>
          <div className="rec-dashboard-card-value">{value}</div>
        </div>
        <div>
          <Icon className="rec-dashboard-card-icon"/>
        </div>
      </div>
    </Card>
  );
};

export default RecCard;
