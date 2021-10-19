import http from "./http-common"
class NotificationsApiServices {
    getAll(){
        return http.get("/Notifications");
    }
    get_by_postulant(id){
        return http.get(`/Notifications?id_postulant=${id}`);
    }
    get_company_notification(id){
        return http.get(`/Notifications?id_company=${id}`);
    }
    get_announcement_notification(id){
        return http.get(`/Notifications?id_announcement=${id}`);
    }
    get_notifications_postulant(){
        return http.get("/Notifications?type=declined&type=accepted");
    }
   
    add_notification(data){
        return http.post(`/Notifications`,data)
    }
}
export default new NotificationsApiServices();
