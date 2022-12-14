<!-- made by domekisuzi
    @2022/12/12
-->
<template>
  <el-container id="flower" style="width: 100%;height: 100%"></el-container>
</template>

<script setup>

let option = {
  legend: {
    top: 'bottom',

    textStyle:{
      color:'gray'
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
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
        borderRadius: 60
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 40, name: 'rose 2' },
        { value: 40, name: 'rose 3' },
        { value: 40, name: 'rose 4' },
        { value: 40, name: 'rose 5' },
      ]
    },
    {
      name: 'xx',
      type: 'pie',
      radius: [40, 10],
      center: ['30%', '60%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      data: [
        { value: 60, name: '1' },
        { value: 60, name: '2' },
        { value: 60, name: '3' },
      ]
    },
    {
      name: 'xxx',
      type: 'pie',
      radius: [40, 10],
      center: ['38%', '24%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      data: [
        { value: 20, name: '4' },
        { value: 30, name: '5' },
        { value: 14, name: '6' },
      ]
    }
  ]
};


import * as echarts from "echarts";

var myChart

onMounted(()=>{
  initCharts
  window.addEventListener('resize',function (){
    myChart.resize()
  })
})
const  initCharts = setTimeout(()=>{
      if(myChart !=null && myChart !=="" && myChart !==undefined){
        myChart.dispose()
      }
      myChart = echarts.init(document.getElementById('flower')  );
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    ,2500)

</script>

<style scoped>

</style>
