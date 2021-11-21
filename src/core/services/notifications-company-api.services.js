//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class NotificationCompanysApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/notificationsCompany");
    }
    get_notifications_by_company(id){
        return this.https.get(`/notificationsCompany/companyId=${id}`);
    }
    get_by_announcement(id){
        return this.https.get(`/notificationsCompany/announcementId=${id}`);
    }
    add_notification_company(data){
        return this.https.post(`/notificationsCompany`,data)
    }
}