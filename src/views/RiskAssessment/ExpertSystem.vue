<!-- made by domekisuzi
    @2022/12/13
-->
<template>
  <div class="top">
    <el-button>
      以图表展示
    </el-button>
    <MenuBackground>
      <div class="card"><span>一级指标</span>
        <el-table border :data="tableData" table-layout="auto">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>
    <MenuBackground>
      <div class="card"><span>电能质量</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>
    <MenuBackground>
      <div class="card"><span>网架结构</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>
  </div>

  <div class="bottom">
    <MenuBackground>
      <div class="card"><span>供电可靠性</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>

    <MenuBackground>
      <div class="card"><span>供电能力</span>
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
        <el-button>评价矩阵</el-button>
      </div>
    </MenuBackground>
  </div>

</template>

<script setup>

import MenuBackground from '../../components/MenuBackground.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
.bottom{
  display: flex;
}
.top{
  display: flex;
}
</style>
