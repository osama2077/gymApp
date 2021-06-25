import axios from "axios";

const api = axios.create({
    //baseURL: 'http://192.168.1.107:3000/YogaAPI/api/v1'
    //baseURL: 'http://10.0.2.2:3000/YogaAPI/api/v1'
    baseURL: 'https://paranyama-uat.herokuapp.com/YogaAPI/api/v1'
})

export default api;