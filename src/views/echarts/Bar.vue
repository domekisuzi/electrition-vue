<!-- made by domekisuzi
    @2022/12/12
-->
<template>
<el-container style="width: 100%;height: 100%" id="bar">

</el-container>

</template>

<script setup>

import * as echarts from "echarts";

var myChart


let colorList = ['#468FF7', '#00FED2', '#FFD37A','#468FF7', '#00FED2', '#FFD37A']
let result = [
  {name:'0-14岁',value:25},
  {name:'5-14岁',value:55},
  {name:'15-44岁',value:85},
  {name:'45-59岁',value:65},
  {name:'≥60岁',value:45},
  {name:'未填写',value:85},
]
let option = {
  color:colorList,

  tooltip: {
    show: true,
    trigger: 'item',
    padding: [8, 15],
    backgroundColor: 'rgba(12, 51, 115,0.8)',
    borderColor: 'rgba(3, 11, 44, 0.5)',
    textStyle: {
      color: 'rgba(255, 255, 255, 1)'
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: '200',
    right: '16%',
    top: '15%',
    bottom: '8%',
  },
  xAxis: [
    {
      splitLine: {
        show: false,
      },
      type: 'value',
      show: false,
    },
  ],
  yAxis: [
    {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      type: 'category',
      axisTick: {
        show: false,
      },
      inverse: true,
      data: result.map((item)=>item.name),
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        margin: 10,
      },
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
        formatter: function (value) {
          return value + '%';
        },
      },
      data: result.map((item)=>item.value),
    },
  ],
  series: [
    {
      name: '率',
      type: 'bar',
      barWidth: 10, // 柱子宽度
      MaxSize: 0,
      showBackground: true,
      backgroundStyle: {
        color:'#194B72',
        borderRadius: 5,
      },
      label: {
        show: false,
      },
      itemStyle: {
        borderRadius: 5,
      },
      data: result.map((item,index)=>{
        return{
          name:item.name,
          value:item.value,
          itemStyle:{
            color:colorList[index]
          }
        }
      }),
    },
  ],
};


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
      myChart = echarts.init(document.getElementById('bar')  );
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    ,2500)

</script>

<style scoped>

</style>
