<!-- made by domekisuzi
    @2022/12/7
-->
<template>

    <el-container class="app-wrapper">
      <el-container>
        <el-aside width="200px" class="sidebar-container">
          <Menu/>
        </el-aside>
        <el-container class="container">
          <el-header><Header/></el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>

</template>

<script setup>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
// const headerHeight =  ref("200px")
</script>

<style scoped>
.app-wrapper{
  position: relative;
  width: 100%;
  /*height: 100%;*/
  min-height: 100vh;


}


.el-header{
  padding: 0;
  display: flex;
  flex-direction: column;
  --el-header-height: auto;
}
/*.el-header::after{*/
/*  clear: both;*/
/*}*/
.el-main{
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
