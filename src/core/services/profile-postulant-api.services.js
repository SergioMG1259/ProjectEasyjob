import http from "./http-common"
class ProfilePostulantServices{
    getAll(){
        return http.get("/Postulants");
    }
    get_profile_postulant_by_id(id){
        return http.get(`/Postulants/${id}`);
    }
    edit_profile_postulant(id,data){
        return http.patch(`/Postulants/${id}`,data)
    }

}
export default new ProfilePostulantServices();