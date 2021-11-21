//import http from "./http-common"
//import https from "./http-commonBackend"
import httpaxios from "./http-commonToken";
export default class ProfileCompanyServices{
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return  this.https.get("/companies");
    }
    get_profile_company_by_id(id){
        return  this.https.get(`/companies/${id}`);
    }
    edit_profile_company(id,data){
        return  this.https.put(`/companies/${id}`,data)
    }

}