import https from "./http-commonBackend"
class AccessCompanyServices{

    get_authorization(data){
        return https.post("/companies/auth/sign-in",data)
    }
    registration(data){
        return https.post("/companies/auth/sign-up",data)
    }
}
export default new AccessCompanyServices();