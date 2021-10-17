import http from "./http-common"
class AnnouncementApiServices {
    getAll(){
        return http.get("/Announcements");
    }
    getAll_visible(value){
        return http.get(`/Announcements?visible=${value}`);
    }
    get_all_not_practicing(){
        return http.get(`/Announcements?required_experience_ne=Practicante&visible=true`);
    }
    get_all_practicing(){
        return http.get(`/Announcements?required_experience=Practicante`);
    }
    get_announcement_by_company(id){
        return http.get(`/Announcements?id_company=${id}`);
    }
    get_announcement_by_id(id){
        return http.get(`/Announcements/${id}`);
    }
    edit_announcement(id,data){
        return http.patch(`/Announcements/${id}`,data)
    }
    add_announcement(data){
        return http.post(`/Announcements`,data)
    }
}
export default new AnnouncementApiServices();