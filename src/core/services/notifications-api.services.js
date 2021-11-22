//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class NotificationsApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/notificationsPostulant");
    }
    get_by_postulant(id){
        return this.https.get(`/notificationsPostulant/postulantId=${id}`);
    }
    get_company_notification(id){
        return this.https.get(`/notificationsPostulant/companyId=${id}`);
    }
    get_announcement_notification(id){
        return this.https.get(`/notificationsPostulant/announcementId=${id}`);
    }
    add_notification(data){
        return this.https.post(`/notificationsPostulant`,data)
    }
}