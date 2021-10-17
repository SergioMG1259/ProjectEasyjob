import http from "./http-common"
class ApplicationsApiServices {
    getAll(){
        return http.get("/Applications");
    }
    get_applications_by_id_announcement(id){
        return http.get(`/Applications?announcement_id=${id}`);
    }
    get_application_by_announcement_postulant(idp,ida){
        return http.get(`/Applications?postulant_id=${idp}&announcement_id=${ida}`);
    }
    get_postulant_application(idp){
        return http.get(`/Applications?postulant_id=${idp}`);
    }
    add_application(data){
        return http.post(`/Applications`,data)
    }
    delete_application(id){
        return http.delete(`/Applications/${id}`)
    }
}
export default new ApplicationsApiServices();