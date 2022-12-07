<script setup>
import { ref } from 'vue'

import { useDark, useToggle } from '@vueuse/core'
const theme = ref(false)
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: 'useDarkKEY',
  // 暗黑class名字
  valueDark: 'dark',
  // 高亮class名字
  valueLight: 'light',

})
const toggle = useToggle(isDark);

</script>

<template >
  <div class="demo">
    <div>这是一个深色模式的切换demo</div>
    <el-switch
        inline-prompt
        v-model="theme"
        @click="toggle()"
    >
    </el-switch>
  </div>


</template>

<style scoped>

.demo {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
