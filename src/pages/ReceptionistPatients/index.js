import React, { useState } from "react";
import "./styles/rec_pat.css";
import ListSearch from "../../components/ListSearch";
import PatientBlock from "./components/PatientBlock";
import useGetPatients from "./hooks/useGetPatients";
import PatientsList from "./components/PatientsList";

const ReceptionistPatients = () => {
  const { data } = useGetPatients();
  return (
    <div>
      {/* search section */}
      <div>
        <ListSearch />
      </div>
      {/* patients list */}
      <div>
        {data.length > 0 ? (
          <PatientsList data={data}/>
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
};

export default ReceptionistPatients;
