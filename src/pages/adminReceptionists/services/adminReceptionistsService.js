import axios from "axios";

const BASE_URL = process.env.REACT_APP_ADMIN_RECP_BASE_URL
class AdminReceptionistsService { 
    getAllReceptionists() {
        console.log(BASE_URL)
        return axios.get(BASE_URL + "/viewReceptionist");
    }
    createReceptionists(receptionists){
        return axios.post(BASE_URL + "/addReceptionist",receptionists);
    }
    deleteReceptionists(id){
        return axios.delete(BASE_URL+"/receptionist/"+id);
    }
    updateReceptionists(id,receptionists){
        return axios.put(BASE_URL+"/receptionist/"+id,receptionists);
      }
}

const adminReceptionistsServiceInstance = new AdminReceptionistsService();

export default adminReceptionistsServiceInstance;
