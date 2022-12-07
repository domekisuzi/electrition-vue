<!-- made by domekisuzi
    @2022/12/7
-->
<template>
<el-row style="min-height: 100vh">
  <el-col :span="16" class="left">left</el-col>
  <el-col :span="8" class="right">右</el-col>
</el-row>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
.left{
  background-color: blue;
}
.right{
  background-color: red;
}
</style>
