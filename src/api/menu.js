// made by domekisuzi @2022/12/7
import service from "./request.js";

export  const menuList = () =>{
    return service({
        url: "/menus"
    })
}

