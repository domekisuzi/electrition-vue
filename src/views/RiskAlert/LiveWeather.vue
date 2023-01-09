<!-- made by domekisuzi
    @2022/12/13
-->
<template>
  <MenuBackground>
    <div id="weather-container" style="height:  100%;width:100%"/>
<!--    <div id="test" style="height:  50%;width:50%"/>-->

  </MenuBackground>



</template>

<script setup>

import {onBeforeMount, onMounted} from "vue";
import MenuBackground from '../../components/MenuBackground.vue'

  onBeforeMount(()=>{
    window._AMapSecurityConfig = {
      securityJsCode:'b451a322f96a0b3b42a0d9edb097b314',
    }


    //TODO("是否需要优化?算了，先暂时不动它")
    window.onLoad  = function(){
      var map = new AMap.Map('weather-container') ;


      var position = [  93.530986,  42.736553]
      map.setCenter(position)
      map.on('click',function (ev) {
        console.log(ev.lnglat)
        AMap.plugin('AMap.Geocoder', function() {
          var geocoder = new AMap.Geocoder({
            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          })
          //
          // var lnglat =   [  93.530986,  42.736553]
          var lnglat = ev.lnglat
          geocoder.getAddress(lnglat, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              console.log(result)

              //----------------  可行
              AMap.plugin('AMap.Weather', function() {
                //创建天气查询实例
                var weather = new AMap.Weather();

                //执行实时天气信息查询
                weather.getLive(result.regeocode.addressComponent.adcode, function(err, data) {
                  console.log(err, data);
                });
              });
              //----------------
            }
          })
        })
      })

      // map.off('click', clickHandler)
    }
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=c25532a19335e2227db2f56343185e16&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  })


      // onMounted(()=>{
      //   (function(){
      //     var iframe = document.getElementById('weather-container').contentWindow;
      //     document.getElementById('weather-container').onload = function(){
      //       iframe.postMessage('hello','https://m.amap.com/picker/');
      //     };
      //     window.addEventListener("message", function(e){
      //       alert('您选择了:' + e.data.name + ',' + e.data.location)
      //     }, false);
      //   }())
      // })


</script>

<style scoped>
.el-card{
  height: 100%;
  width: 100%;
}
.el-card :deep(.el-card__body){
  height: 100%;
  width: 100%;
}
</style>
