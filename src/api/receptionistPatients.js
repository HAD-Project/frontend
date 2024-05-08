import { handleAPIStatus } from "../misc/utils";
import axios from "./instance";

export const registerPatient = async (data) => {
  try {
    // console.log(data);
    const res = await axios.post("/api/receptionist/patients/register", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    });
    if (data.abha_available) {
      // request for token generation
      generateToken(data);
    }
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};

export const generateToken = async (data) => {
  try {
    await axios.post(
      `/api/receptionist/patients/generateLinkToken?abhaAddress=${data.abhaAddress}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    );
  } catch (error) {}
};

export const getPatients = async () => {
  try {
    const res = await axios.get("/api/receptionist/patients", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    });
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};

export const viewPatient = async (patientId) => {
  try {
    const res = await axios.get("/api/receptionist/patients/patient/view", {
      params: { patientId },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    });
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};

export const editPatient = async (data) => {
  console.log(data,"edit")
  try {
    const res = await axios.put(
      "/api/receptionist/patients/patient/edit",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};

export const deletePatient = async (patientId) => {
  try {
    const res = await axios.delete(
      "/api/receptionist/patients/patient/delete",
      {
        params: { patientId },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};
