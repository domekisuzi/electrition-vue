// made by domekisuzi @2022/12/7

import axios from "axios";

export  const myData = axios.create({
    baseURL: '/path',
    timeout:5000,
})
export const weather  = axios.create({
    baseURL: '/weather',
    timeout:5000,
})


