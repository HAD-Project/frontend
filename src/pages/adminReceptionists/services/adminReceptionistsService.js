import axios from "axios";
import { ADDRESS } from "../../../utils"

const BASE_URL = process.env.REACT_APP_ADMIN_RECP_BASE_URL ? process.env.REACT_APP_ADMIN_RECP_BASE_URL : ADDRESS;
class AdminReceptionistsService { 
    getAllReceptionists() {
        console.log(BASE_URL)
        return axios.get(`${BASE_URL}/api/v1/reception/viewReceptionists`, {headers: {Authorization: `Bearer ${localStorage.getItem("accesstoken")}`}});
    }
    createReceptionists(receptionists){
        return axios.post(`${BASE_URL}/api/v1/reception/createReceptionist`,receptionists, {headers: {Authorization: `Bearer ${localStorage.getItem("accesstoken")}`}});
    }
    deleteReceptionists(id){
        return axios.delete(`${BASE_URL}/api/v1/reception/deleteReceptionist/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem("accesstoken")}`}});
    }
    updateReceptionists(id,receptionists){
        return axios.put(`${BASE_URL}/api/v1/reception/updateReceptionist/`+id, receptionists, {headers: {Authorization: `Bearer ${localStorage.getItem("accesstoken")}`}});
    }
}

const adminReceptionistsServiceInstance = new AdminReceptionistsService();

export default adminReceptionistsServiceInstance;
