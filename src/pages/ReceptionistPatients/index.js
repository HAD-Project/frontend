import React from "react";
import "./styles/rec_pat.css";
import ListSearch from "../../components/ListSearch";
import useGetPatients from "./hooks/useGetPatients";
import PatientsList from "./components/PatientsList";

const ReceptionistPatients = () => {
  const { data, setRefresh } = useGetPatients();
  return (
    <div>
      {/* search section */}
      <div>
        <ListSearch />
      </div>
      {/* patients list */}
      <div>
        {data.length > 0 ? (
          <PatientsList data={data} setRefresh={setRefresh} />
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
};

export default ReceptionistPatients;
