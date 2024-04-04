import React, { useState } from "react";
import "./styles/rec_pat.css";
import ListSearch from "../../components/ListSearch";
import PatientBlock from "./components/PatientBlock";
import useGetPatients from "./hooks/useGetPatients";

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
          data.map((item, i) => <PatientBlock data={item} />)
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
};

export default ReceptionistPatients;
