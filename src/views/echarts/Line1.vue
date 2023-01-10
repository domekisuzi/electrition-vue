<!-- made by domekisuzi
    @2022/12/12
-->
<template>
  <el-container id="line1" style="height: 100%;width: 100%"></el-container>
</template>

<script setup>

import * as echarts from "echarts";

var myChart

let option = {
  // title: {
  //   text: 'Stacked Line'
  // },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      // let colors = ['rgba(124, 124, 191, 1)', 'rgba(233, 195, 116, 1)']
      // let colors = ['blue','green','red','orange','blue']
      let returnData = '<div  style="padding: 0; ">'
      returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(210, 221, 249, 1);">' + params[0].axisValue + '</span><br/>'
      for (let i = 0; i < params.length; i++) {
        returnData += '<span style="display:inline-block; width:10px; height:8px; margin-right:5px; border-radius:1px; background-color:' + params[i].color + '"></span>'
        returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: ' + params[i].color + '">' + params[i].seriesName + '：</span><span style="font-family: Verdana; font-size: 14px; color: ' +  params[i].color + '">' + params[i].value + '</span><span style="display:inline-block; margin-left: 4px; line-height: 10px; font-family: MicrosoftYaHei; font-size: 12px; color: ' +  params[i].color + '">度</span><br/>'
      }
      returnData += '</div>'
      return returnData
    }
  },
  legend: {
    data: ['火电', '风电', '水电', '太阳能发电', '核电']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2017', '2018', '2019', '2020', '2021']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '火电',
      type: 'line',
      // stack: 'Total',
      data: [45877,
        49249,
        50465,
        51743,
        57702,
      ],
      smooth: true,
    },
    {
      name: '风电',
      type: 'line',
      // stack: 'Total',
      data: [3046,
        3658,
        4053,
        4665,
        5667,
      ],
      smooth: true,
    },
    {
      name: '水电',
      type: 'line',
      // stack: 'Total',
      data: [1178,
        1769,
        2240,
        2611,
        1837,
      ],
      smooth: true,
    },
    {
      name: '太阳能发电',
      type: 'line',
      // stack: 'Total',
      data: [11947,
        12321,
        13021,
        13552,
        11840,
      ],
      smooth: true,
    },
    {
      name: '核电',
      type: 'line',
      // stack: 'Total',
      data: [2481,
        2950,
        3487,
        3662,
        4075,
      ],
      smooth: true,
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
      myChart = echarts.init(document.getElementById('line1'), 'dark');
      myChart.showLoading();
      myChart.hideLoading();
      myChart.setOption(option);
    }
    , 2500)

</script>

<style scoped>

</style>
