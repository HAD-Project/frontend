import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:3000/api/receptionist';
export const listAppointments = () => axios.get(REST_API_BASE_URL);

export const createAppointment = (appointment) => axios.post(REST_API_BASE_URL, appointment);

export const getAppointment = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateAppointment = (id, appointment) => axios.put(REST_API_BASE_URL + '/' + id,appointment);

export const deleteAppointment = (id) => axios.delate(REST_API_BASE_URL + '/' + id);