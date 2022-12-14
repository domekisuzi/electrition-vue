<!-- made by domekisuzi
    @2022/12/10 用于展示echarts大屏幕
-->

<template>

  <!--  <el-container>-->
  <!--    <div class="china">-->
  <!--      <China></China>-->
  <!--    </div>-->
  <!--    <div class="pie">-->
  <!--      <Pie></Pie>-->
  <!--    </div>-->

  <!--  </el-container>-->
  <div class="container">

    <el-row class="top-row" >
      <el-col :span="6" class="top-col">
        <div class="top-div">
          <Pie></Pie>
        </div>
<!--        <div class="top-div">-->
<!--        </div>-->
      </el-col>
      <el-col :span="12" class="top-col">
        <China/>
      </el-col>
      <el-col :span="6" class="top-col">
        <div class="top-div">
          <Bar></Bar>
        </div>
        <div class="top-div">
          <Bar1></Bar1>
        </div>
      </el-col>
    </el-row>
    <el-row class="bottom-row" >
      <el-col :span="6" class="bottom-col">
        <Line1></Line1>
      </el-col>
      <el-col :span="6" class="bottom-col">
        <Line></Line>
      </el-col>
      <el-col :span="6" class="bottom-col">
        <Pie1> </Pie1>
      </el-col>
      <el-col :span="6" class="bottom-col">
        <Flowers/>
      </el-col>
    </el-row>
  </div>

</template>

<script setup>
import China from '../views/echarts/China.vue'
import Pie from '../views/echarts/Pie.vue'
import {onMounted, ref} from "vue";
import Bar from '../views/echarts/Bar.vue'
import Bar1 from "../views/echarts/Bar1.vue";

import Flowers from "../views/echarts/Flowers.vue";
import Pie1 from "../views/echarts/Pie1.vue";
import Line1 from '../views/echarts/Line1.vue'
import Line from "../views/echarts/Line.vue";




</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: #100c2A;
}


.top-row {
  height: calc(60%);
}

.bottom-row {
  height: calc(40%);
}

.top-col {
  height: 100%;
}
.top-col{
  display: flex;
  flex-direction: column;
}
.top-div{
  height: 100%;
  width: 100%;
}


</style>
