//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class AnnouncementApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/announcements");
    }
    getAll_visible(value){
        return this.https.get(`/announcements?visible=${value}`);
    }
    get_all_not_practicing(){
        return this.https.get(`/announcements/NotPracticing`);
    }
    get_all_practicing(){
        return this.https.get(`/announcements/Practicing`);
    }
    get_announcement_by_company(id){
        return this.https.get(`/companies/${id}/announcements`);
    }
    get_announcement_by_id(id){
        return this.https.get(`/announcements/${id}`);
    }
    edit_announcement(id,data){
        return this.https.put(`/announcements/${id}`,data)
    }
    add_announcement(data){
        return this.https.post(`/announcements`,data)
    }
}