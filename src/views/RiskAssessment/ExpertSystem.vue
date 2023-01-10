<!-- made by domekisuzi
    @2022/12/13
-->
<template>
  <div class="top">
    <!--    <el-button>-->
    <!--      以图表展示-->
    <!--    </el-button>-->
    <MenuBackground>
      <div class="card"><span>一级指标</span>
        <el-table border :data="first" table-layout="auto" @row-click="handlerClick"
                  highlight-current-row>
          <el-table-column prop="name" label="指标名" width="180"/>
          <el-table-column prop="weight" label="权重" width="180"/>
          <el-table-column prop="score" label="加权后得分"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>
    <MenuBackground>
      <div class="card"><span>{{ tableName }}</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="指标层" width="180"/>
          <el-table-column prop="attr" label="指标属性" width="180"/>
        </el-table>
        <el-button @click="dialogGet">评价矩阵</el-button>
      </div>
    </MenuBackground>

  </div>
  <el-dialog v-model="dialogTableVisible" title="请输入你的指标属性">

    <div style="height: 400px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
              :columns="columns"
              :data="tableData"
              :width="width"
              :height="height"
              fixed
          />
        </template>
      </el-auto-resizer>
    </div>

  </el-dialog>

</template>

<script setup>

import MenuBackground from '../../components/MenuBackground.vue'
import {onBeforeMount, reactive, ref} from "vue";
import { ElInput } from 'element-plus'


onBeforeMount(() => {

})

const dialogTableVisible = ref(false)
const dialogGet = () => {
  dialogTableVisible.value = true
}

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
const tableName = ref("静态安全稳定性指标")
const staticIndex = [
  {
    name: "潮流分布",
    attr: ""
  },
  {
    name: "有功裕度",
    attr: ""
  },
  {
    name: "无功裕度",
    attr: ""
  },
  {
    name: "电压裕度",
    attr: ""
  },
]
const dynamicIndex = [
  {
    name: "故障极限切除时间",
    attr: ""
  },
  {
    name: "暂态稳定裕度",
    attr: ""
  },
  {
    name: "N-1校验",
    attr: ""
  },
  {
    name: "动态安全距离",
    attr: ""
  },
]
const deviceIndex = [
  {
    name: "通信系统可靠度",
    attr: ""
  },
  {
    name: "发电机可靠度",
    attr: ""
  },
  {
    name: "变压器可靠度",
    attr: ""
  },
]
const riskIndex = [
  {
    name: "系统负载率",
    attr: ""
  },
  {
    name: "失稳频率",
    attr: ""
  },
  {
    name: "切负荷概率",
    attr: ""
  },
  {
    name: "切负荷持续时间",
    attr: ""
  },

]
const dataAll = {
  Static: staticIndex,
  Dynamic: dynamicIndex,
  Device: deviceIndex,
  Risk: riskIndex
}


for (const dataAllKey in dataAll) {
  for (const dataAllKeyKey in dataAll[dataAllKey]) {
    dataAll[dataAllKey][dataAllKeyKey].index = dataAll[dataAllKey][dataAllKeyKey].name
    dataAll[dataAllKey][dataAllKeyKey].index = dataAll[dataAllKey][dataAllKeyKey].name
  }
}

console.log(dataAll)
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

const columns = [{
  key: "1",
  dataKey: "index",
  title: "指标层",
  width: 150,

  // length:200,
},
  {
    key: "2",
    dataKey: "attr",
    title: "指标属性",
    width: 150,
    // length:200,
  }
]

// const InputCell = ({value, onChange, forwardRef,}) => {
//   return (
//       <ElInput ref=forwardRef   onInput={onChange} modelValue={value}/>
//   )
// }
// columns[1].cellRenderer = ({rowData, column}) => {
//   const onChange = (value) => {
//     rowData[column.dataKey] = value
//   }
//   const onEnterEditMode = () => {
//     rowData.editing = true
//   }
//   const onExitEditMode = () => (rowData.editing = false)
//   const input = ref()
//   const setRef = (el) => {
//     input.value = el
//     if (el) {
//       el.focus?.()
//     }
//   }
//   return rowData.editing ? (<InputCell
//       forwardRef={setRef}
//       value={rowData[column.dataKey]}
//       onChange={onChange}
//       onBlur={onExitEditMode}
//       onKeydownEnter={onExitEditMode}
//   />) : (
//       <div className="table-v2-inline-editing-trigger" onClick={onEnterEditMode}>
//         {rowData[column.dataKey]}
//       </div>
//   )
// }


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
}
</style>
