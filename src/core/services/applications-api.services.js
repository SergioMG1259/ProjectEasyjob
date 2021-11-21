//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class ApplicationsApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/applications");
    }
    get_applications_by_id_announcement(id){
        return this.https.get(`/applications/announcementId=${id}`);
    }
    get_application_by_announcement_postulant(idp,ida){
        return this.https.get(`/applications/announcementId=${ida}/postulantId=${idp}`);
    }
    get_postulant_application(id){
        return this.https.get(`/applications/postulantId=${id}`);
    }
    add_application(data){
        return this.https.post(`/applications`,data)
    }
    delete_application(id){
        return this.https.delete(`/applications/${id}`)
    }
    edit_application(id,data){
        return this.https.put(`/applications/${id}`,data)
    }
}