<script setup>
import { ref } from 'vue'

var show = ref(true)
defineProps({
  msg: String

})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card" >
    <button type="button" @click="  show=!show">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>


  <el-collapse-transition name="el-fade-in-linear">
  <p v-show="show" style="background-color: red">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  </el-collapse-transition>

  <div style="margin-top: 20px; height: 200px">
    <el-collapse-transition>
      <div v-show="show">
        <div class="transition-box">el-collapse-transition</div>
        <div class="transition-box">el-collapse-transition</div>
      </div>
    </el-collapse-transition>
  </div>


  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
