import axios from "./instance";

export const registerPatient = async(data) => {
  try {
    const res = await axios.post("/api/receptionist/patients/register", data);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getPatients = async() => {
  try {
    const res = await axios.get("/api/receptionist/patients");
    return res.data;
  } catch (error) {
    return null;
  }
};

export const viewPatient = async(patientId) => {
  try {
    const res = await axios.get("/api/receptionist/patients/patient/view", {
      params: { patientId },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const editPatient = async(data) => {
  try {
    const res = await axios.put("/api/receptionist/patients/patient/edit", data);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deletePatient = async(patientId) => {
  try {
    const res = await axios.delete("/api/receptionist/patients/patient/delete", {
      params: { patientId },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};
