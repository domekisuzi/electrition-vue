<!-- made by domekisuzi
    @2022/12/12
-->
<template>
<el-container id="bar1" style="height: 100%;width: 100%"></el-container>
</template>

<script setup>

// var data = [57399,
//   60228,
//   64529,
//   69947,
//   73269,
//   76236,
//   81122,
// ];

let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['发电总量', '发电总量', '增速']
  },
  xAxis: [
    {
      type: 'category',
      data: [2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
      ],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '发电总量',
      min: 0,
      max: 90000,
      interval: 10000,
      axisLabel: {
        formatter: '{value} 亿千瓦'
      }
    },
    {
      type: 'value',
      name: '增速',
      min: 0,
      max: 0.09,
      interval: 0.01,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '发电总量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' （亿千瓦）';
        }
      },
      data: [
        57399,
        60228,
        64529,
        69947,
        73269,
        76236,
        81122,

      ]
    },

    {
      name: '增速',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [0.049,
        0.071,
        0.084,
        0.047,
        0.04,
        0.064,
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
      myChart = echarts.init(document.getElementById('bar1')  );
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    ,2500)

</script>

<style scoped>

</style>
