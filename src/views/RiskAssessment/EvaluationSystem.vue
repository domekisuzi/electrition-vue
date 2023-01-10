<!-- made by domekisuzi
    @2022/12/13
-->
<template>
  <div class="top">
    <MenuBackground>
      <div class="card"><span>一级指标</span>
        <el-table border :data="first" table-layout="auto" @row-click="handlerClick"
                  highlight-current-row
        >
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="weight" label="weight" width="180"/>
          <el-table-column prop="score" label="score"/>
        </el-table>

      </div>
    </MenuBackground>
    <MenuBackground>
      <div class="card"><span>{{ tableName }}</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="指标层" width="180"/>
          <el-table-column prop="10" label="10%" width="90"/>
          <el-table-column prop="20" label="20%" width="90"/>
          <el-table-column prop="30" label="30%" width="90"/>
          <el-table-column prop="40" label="40%" width="90"/>
          <el-table-column prop="50" label="50%" width="90"/>
        </el-table>
      </div>
    </MenuBackground>
  </div>
</template>

<script setup>
import MenuBackground from '../../components/MenuBackground.vue'
import {ref} from 'vue'

const first = [{
  weight: '2016-05-03',
  name: "静态安全稳定性指标",
  score: "内容"
},
  {
    weight: '2016-05-03',
    name: "动态安全稳定性",
    score: "内容"
  },
  {
    weight: '2016-05-03',
    name: "设备可靠性指标",
    score: "内容"
  },
  {
    weight: '2016-05-03',
    name: "风险" +
        "指标",
    score: "内容"
  },
]
const dynamicIndex = [
  {
    name: "故障极限切除时间",
    10: "	3.8 "
    , 20: "s	0.21 s	"
    , 30: "0.42 s"
    , 40: "	0.16 s"
    , 50: "	1.1 s"
    ,
  },
  {
    name: "暂态稳定裕度",
    10: "	0.952	"
    , 20: "0.576"
    , 30: "	0.801	"
    , 40: "0.822"
    , 50: "	0.751"
    ,
  },
  {
    name: "N-1校验",
    10: "	94.34"
    , 20: "	88.25"
    , 30: "	90	"
    , 40: "91.55	"
    , 50: "85.64"
    ,
  },
  {
    name: "动态安全距离	",
    10: "2.1582	"
    , 20: "1.1323	"
    , 30: "1.6862"
    , 40: "	1.8949"
    , 50: "	1.3308"
    ,
  },

]

const staticIndex = [
  {
    name: "潮流分布",
    10: "5.2424",
    20: "5.4104",
    30: "5.1823",
    40: "5.1669",
    50: "5.1883"
  },
  {
    name: "有功裕度",
    10: "1.8707"
    , 20: "1.7579"
    , 30: "2.1326"
    , 40: "2.2551"
    , 50: "1.9024"
    ,
  },
  {
    name: "潮流分布	",
    10: "5.2424"
    , 20: "	5.4104	"
    , 30: "5.1823"
    , 40: "	5.1669"
    , 50: "	5.1883"
    ,
  },
  {
    name: "无功裕度",
    10: "	0.9931"
    , 20: "	1.2122	"
    , 30: "1.2129"
    , 40: "	1.5762	"
    , 50: "1.0259"
    ,
  },
  {
    name: "电压裕度	",
    10: "0.0282"
    , 20: "	0.1081	"
    , 30: "0.0474"
    , 40: "	0.0692"
    , 50: "	0.0395"
    ,
  },

]
const deviceIndex = [
  {
    name: "通信系统可靠度	",
    10: "66.7 %	"
    , 20: "41.4 %"
    , 30: "	36.7 %	"
    , 40: "13.6 %"
    , 50: "	27.2 %"
    ,
  },
  {
    name: "发电机可靠度",
    10: "	3.8 %"
    , 20: "	0.21 %"
    , 30: "	0.42 %	"
    , 40: "0.16 %	"
    , 50: "1.1 %"
    ,
  },
  {
    name: "变压器可靠度",
    10: "2.7 %	"
    , 20: "0.32 %	"
    , 30: "0.54 %	"
    , 40: "0.27 %	"
    , 50: "0.98 %"
    ,
  },

]
const riskIndex = [
  {
    name: "系统负载率	",
    10: "0.92	"
    , 20: "0.95	"
    , 30: "0.95	"
    , 40: "0.97	"
    , 50: "0.9"
    ,
  },
  {
    name: "失稳频率",
    10: "	1.38	"
    , 20: "1.31"
    , 30: "	1.34	"
    , 40: "1.36"
    , 50: "	1.38"
    ,
  },
  {
    name: "切负荷概率	",
    10: "0.1025"
    , 20: "	0.0953"
    , 30: "	0.0899"
    , 40: "	0.0818	"
    , 50: "0.1007"
    ,
  },
  {
    name: "切负荷持续时间	",
    10: "897.9	"
    , 20: "834.8	"
    , 30: "787.5"
    , 40: "	716.6"
    , 50: "	794.5"
    ,
  },
]
const dataAll = {
  Static: staticIndex,
  Dynamic: dynamicIndex,
  Device: deviceIndex,
  Risk: riskIndex
}
const tableName = ref("静态安全稳定性指标")
const tableData = ref(dataAll.Risk)
const handlerClick = (row) => {
  console.log(row)
  tableName.value = row.name
  switch (tableName.value) {
    case "静态安全稳定性指标":
      tableData.value = dataAll.Static
      break;
    case "动态安全稳定性":
      tableData.value = dataAll.Dynamic
      break;
    case "设备可靠性指标":
      tableData.value = dataAll.Device
      break;
    case "风险指标":
      tableData.value = dataAll.Risk
      break;
  }
}


</script>

<style scoped>

span {
  /*  改改字体颜色*/
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.bottom {
  display: flex;
}

.top {
  display: flex;
  justify-content: center;
}
</style>
