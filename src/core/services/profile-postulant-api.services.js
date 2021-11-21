//import http from "./http-common"
//import https from "./http-commonToken"
import httpaxios from "./http-commonToken";
export default class ProfilePostulantServices{
    https=null
    constructor(token) {
        this.https=httpaxios(token)
    }
    getAll(){
        return this.https.get("/postulants");
    }
    get_profile_postulant_by_id(id){
        return this.https.get(`/postulants/${id}`);
    }
    /*edit_profile_postulant(id,data){
        return https.patch(`/postulants/${id}`,data)
    }*/
    edit_profile_postulant(id,data){
        return this.https.put(`/postulants/${id}`,data)
    }
    get_by_email_password(email,password){
        return this.https.get(`/postulants/email/${email}/password/${password}`);
    }
    get_authorization(data){
        return this.https.post("/postulants/auth/sign-in",data)
    }
}
//export default new ProfilePostulantServices();