import axios from "axios";
const REST_API_BASE_URL = process.env.REACT_APP_BASE_URL
export const listAppointments = () => axios.get(REST_API_BASE_URL + "/viewAppointments");

export const createAppointment = (appointment) => {
  const accessToken = localStorage.getItem('accesstoken');
  return axios.post(REST_API_BASE_URL + "/createAppointment", appointment, 
{
  headers: {

    Authorization: `Bearer ${accessToken}`,
  }});
};
export const getAppointment = (id) => axios.get(REST_API_BASE_URL + "/viewAppointments/" + id);

export const updateAppointment = (id, appointment) => axios.put(REST_API_BASE_URL + "/updateAppointment/"+ id,appointment);

export const deleteAppointment = (id) => axios.delete(REST_API_BASE_URL + "/deleteAppointment/" + id);

export const getDoctors = () => axios.get(REST_API_BASE_URL + "/viewDoctorsName");

export const getPatientIDs = () => axios.get(REST_API_BASE_URL + "/getPatients");