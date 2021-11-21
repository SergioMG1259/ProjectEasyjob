//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class ProjectApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/projects");
    }
    get_project_by_postulant(id){
        return this.https.get(`/postulants/${id}/projects`);
    }
    get_project_by_id(id){
        return this.https.get(`/projects/${id}`);
    }
    edit_project(id,data){
        return this.https.put(`/projects/${id}`,data)
    }
    add_project(data){
        return this.https.post(`/projects`,data)
    }
}