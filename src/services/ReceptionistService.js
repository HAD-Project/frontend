import axios from "../api/instance";
import { ADDRESS } from "../utils";

const REST_API_BASE_URL = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : `${ADDRESS}/api/v1/receptionist`
export const listAppointments = () => axios.get(REST_API_BASE_URL + "/viewAppointments", {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});

export const createAppointment = (appointment) => {
  const accessToken = localStorage.getItem('accesstoken');
  return axios.post(REST_API_BASE_URL + "/createAppointment", appointment, 
{
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }});
};
export const getAppointment = (id) => axios.get(REST_API_BASE_URL + "/viewAppointments/" + id, {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});

export const updateAppointment = (id, appointment) => axios.put(REST_API_BASE_URL + "/updateAppointment/"+ id,appointment, {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});

export const deleteAppointment = (id) => axios.delete(REST_API_BASE_URL + "/deleteAppointment/" + id, {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});

export const getDoctors = () => axios.get(REST_API_BASE_URL + "/viewDoctorsName", {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});

export const getPatientIDs = () => axios.get(REST_API_BASE_URL + "/getPatients", {headers: {"Authorization": `Bearer ${localStorage.getItem("accesstoken")}`}});