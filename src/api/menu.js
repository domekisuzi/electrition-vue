// made by domekisuzi @2022/12/7

import axios from "axios";
import {weather,myData} from "./request.js";
//也可以通过插入dom的方式
// export default {
//     components: {
//         'weatherapi': {
//             render(createElement) {
//                 return createElement(
//                     'script',
//                     {
//                         attrs: {
//                             type: 'text/javascript',
//                             src: 'https://webapi.amap.com/maps?v=1.4.15&key=c25532a19335e2227db2f56343185e16',
//                         },
//                     },
//                 );
//             },
//         },
//     },
// }

// export  const menuList = () =>{
//     return service({
//         url: "/path/menus"
//     })
// }
// export const  weather =  () =>{
//
//     return myData({
//         url: "/menus"
//     })
// }

export const  shuo = () =>{
    return weather({
        url:"/api.php?key=free&appid=0&msg=你好"
    })
}
