<!-- made by domekisuzi
    @2023/1/11
-->
<template>
  <el-container id="line3" style="height: 100%;width: 100%"></el-container>
</template>

<script setup>

import * as echarts from "echarts";

var myChart

let option   = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: [2012,
      2013,
      2014,
      2016,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021
    ]
  },
  series: [
    {
      name: '火电',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [81968,
        87009,
        93232,
        100050,
        106094,
        111009,
        114408,
        118957,
        124517,
        129678
      ]
    },
    {
      name: '风电',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [6142,
        7652,
        9657,
        13075,
        14747,
        16400,
        18427,
        20915,
        28153,
        32848,
      ]
    },
    {
      name: '水电',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [24947,
        28044,
        30486,
        31953,
        33207,
        34411,
        35259,
        35804,
        37016,
        39092,
      ]
    },
    {
      name: '太阳能发电',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [341,
        1589,
        2486,
        4318,
        7631,
        13042,
        17433,
        20418,
        25343,
        30656,
      ]
    },
    {
      name: '核电',
      type: 'bar',
      stack: 'total',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [1257,
        1466,
        2008,
        2717,
        3346,
        3582,
        4466,
        4874,
        4989,
        5326,
      ]
    }
  ]
};

onMounted(() => {
  initCharts

  window.addEventListener('resize', function () {
    myChart.resize()
  })
})


const initCharts = setTimeout(() => {
      if (myChart != null && myChart !== "" && myChart !== undefined) {
        myChart.dispose()
      }

      myChart = echarts.init(document.getElementById('line3'), 'dark');
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    , 2500)

</script>

<style scoped>

</style>
