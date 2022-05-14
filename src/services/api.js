import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.0.107:3000"
});

export default api;