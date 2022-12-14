<!-- made by domekisuzi
    @2022/12/7
-->
<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          :default-active="$route.path"
          :collapse-transition="false"
          router
      >

        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>账号管理</span>
          </template>

          <el-menu-item index="/menu/usermanagement" >用户设置</el-menu-item>
          <el-menu-item index="/menu/usersetting">用户管理</el-menu-item>

        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span>数据查询</span>
          </template>

          <el-menu-item index="/menu/currentdata">实时数据</el-menu-item>
          <el-menu-item index="/menu/historydata">历史数据</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3" >
          <template #title>
            <el-icon>
              <document/>
            </el-icon>
            <span>配网风险评估</span>
          </template>

          <el-menu-item index="/menu/expert">专家系统</el-menu-item>
          <el-menu-item index="/menu/assessment">评价系统</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            <span>配网风险预警</span>
          </template>
          <el-menu-item index="1-7">专在线预警匹配</el-menu-item>
          <el-menu-item index="1-8">评价典型故障环境场景模式库系统</el-menu-item>
          <el-menu-item index="/menu/liveweather">实时天气信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            <span>配网数据录入</span>
          </template>

          <el-menu-item index="1-10">评价参数录入</el-menu-item>
          <el-menu-item index="1-11">预警参数录入</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            <span>调度决策信息</span>
          </template>
          <el-menu-item index="1-12">暂定</el-menu-item>
          <el-menu-item index="1-13">暂定</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
// import {menuList} from '@/api/menu.js'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


</script>

<style scoped>
.el-row {
  height: 100%;
}

.el-menu {
  height: 100%;
}
/*.el-menu:not(.el-menu--collapse) {*/
/*  width: 200px;*/
/*  min-height: 400px;*/
/*}*/
</style>
