import axios from "axios";

const http = axios.create({
    baseURL: "https://api-02.iek.ru/catalog/v1/"
})

http.defaults.headers.post['Content-Type'] = 'application/json';

export default http
