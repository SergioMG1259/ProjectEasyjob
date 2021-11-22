//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class EvidencesApiServices {
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/evidences");
    }
    get_evidences_by_project(id){
        return this.https.get(`/projects/${id}/evidences`);
    }
    add_evidences(data){
        return this.https.post(`/evidences`,data)
    }
    get_evidence_by_id(id){
        return this.https.get(`/evidences/${id}`);
    }
    edit_evidence(id,data){
        return this.https.put(`/evidences/${id}`,data);
    }
}