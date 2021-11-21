import axios from "axios";

/*export default axios.create({
    baseURL:" https://localhost:5001/api/v1/",
    headers:{"Content-type":"application/json"}
});*/
export default function httpaxios(token){
    return axios.create({
        baseURL:"https://appwebapi20211120222409.azurewebsites.net/api/v1/",
        headers:{"Content-type":"application/json","Authorization":`Bearer ${token}`}
    })
}