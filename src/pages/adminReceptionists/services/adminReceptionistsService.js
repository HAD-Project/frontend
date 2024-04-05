import axios from "axios";

const BASE_URL = process.env.REACT_APP_ADMIN_RECP_BASE_URL
const CRT_URL = "http://localhost:9191/api/v1/auth/register"
class AdminReceptionistsService { 
    getAllReceptionists() {
        return axios.get(BASE_URL + "/viewReceptionists",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        });
    }
    createReceptionists(receptionists){
        return axios.post(CRT_URL,receptionists,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        }); 
    }
    deleteReceptionists(id){
        return axios.delete(BASE_URL+"/deleteReceptionist/"+id,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        });
    }
    updateReceptionists(id,receptionists){
        return axios.put(BASE_URL+"/updateReceptionist/"+id,receptionists,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        });
      }
}

const adminReceptionistsServiceInstance = new AdminReceptionistsService();

export default adminReceptionistsServiceInstance;
