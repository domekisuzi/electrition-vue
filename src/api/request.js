// made by domekisuzi @2022/12/7

import axios from "axios";

const service = axios.create({
    baseURL: '/path/shixun/',
    timeout:5000,

})

export default  service
