import axios from "axios";

export default axios.create({
    baseURL:"https://appwebapi20211120222409.azurewebsites.net/api/v1/",
    headers:{"Content-type":"application/json"}
});