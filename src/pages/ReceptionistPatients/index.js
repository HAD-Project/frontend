import React, { useEffect } from "react";
import "./styles/rec_pat.css";
import ListSearch from "../../components/ListSearch";
import useGetPatients from "./hooks/useGetPatients";
import PatientsList from "./components/PatientsList";
import { useCreateNotification } from "../../components/Notification/useCreateNotification";

const ReceptionistPatients = () => {
  const { data } = useGetPatients();

  
  return (
    <div>
      {/* search section */}
      {/* <div>
        <ListSearch />
      </div> */}
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
