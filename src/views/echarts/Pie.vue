<!-- made by domekisuzi
    @2022/12/12
-->
<template>
  <el-container id="pie"  style="  height:100% ; width:100%">

  </el-container>
</template>

<script setup>

import {onMounted} from "vue";
import * as echarts from "echarts";
import geoJSON from "../../assets/map.json";
import China from "./China.vue";



const option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      // dataView: { show: true, readOnly: false },
      // restore: { show: true },
      // saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [30, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
};

var myChart

import elementResizeDetectorMaker from "element-resize-detector";


onMounted(()=>{
  initCharts
  let _this = this
  // var erd = elementResizeDetectorMaker()
  // erd.listenTo(document.getElementById("pie"),function (element){
  //   _this.$nextTick(function (){
  //     if(myChart!==undefined){
  //       myChart.resize()
  //     }
  //   })
  // })
  window.addEventListener('resize',function (){
    myChart.resize()
  })
})
const  initCharts = setTimeout(()=>{
      if(myChart !=null && myChart !=="" && myChart !==undefined){
        myChart.dispose()
      }
      myChart = echarts.init(document.getElementById('pie'),'dark'  );
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    ,2500)

</script>

<style scoped>

/*注意这里一定要在元素上直接设置宽高为100%，否则会出现绘制问题*/
.el-container{
  height: 100%;
  width: 100%;
}
</style>
