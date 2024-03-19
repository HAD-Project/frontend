import axios from "axios";

const BASE_URL = process.env.REACT_APP_ADMIN_RECP_BASE_URL
class AdminReceptionistsService {
    getAllReceptionists() {
        return axios.get(BASE_URL + "/viewReceptionist");
    }
    createReceptionists(receptionists){
        return axios.post(BASE_URL + "/addReceptionist",receptionists);
    }
    deleteReceptionists(id){
        return axios.delete(BASE_URL+"/receptionist/"+id);
    }
}

const adminReceptionistsServiceInstance = new AdminReceptionistsService();

export default adminReceptionistsServiceInstance;
