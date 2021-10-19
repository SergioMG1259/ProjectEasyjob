import http from "./http-common"
class NotificationCompanysApiServices {
    getAll(){
        return http.get("/Notifications_Company");
    }
    get_notifications_by_company(id){
        return http.get(`/Notifications_Company?id_company=${id}`);
    }
    get_by_announcement(id){
        return http.get(`/Notifications_Company?id_announcement=${id}`);
    }
    get_announcement_notification(id){
        return http.get(`/Notifications?id_announcement=${id}`);
    }
    get_notifications_postulant(){
        return http.get("/Notifications?type=declined&type=accepted");
    }
    
    add_notification_company(data){
        return http.post(`/Notifications_Company`,data)
    }
}
export default new NotificationCompanysApiServices();
