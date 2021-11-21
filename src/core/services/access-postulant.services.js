import https from "./http-commonBackend"
class AccessPostulantServices{

    get_authorization(data){
        return https.post("/postulants/auth/sign-in",data)
    }
    registration(data){
        return https.post("/postulants/auth/sign-up",data)
    }

}
export default new AccessPostulantServices();