<!-- made by domekisuzi
    @2022/12/13
-->
<template>
  <MenuBackground>


    <div class="top">
      <div class="block">
        <span class="demonstration">工作照片</span>
        <el-image/>
      </div>
      <div class="block">
        <div class="wrapper">
          <span>工号</span>
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>

        <div class="wrapper">

          <span>姓名</span>
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="wrapper">
          <span>岗位</span>
          <el-input v-model="input" placeholder="Please input" clearable/>
        </div>
        <div class="wrapper">
          <span>班组</span>
          <el-input v-model="input" placeholder="Please input" clearable/>
        </div>
        <div class="wrapper">
          <span>职位</span>
          <el-input v-model="input" placeholder="Please input" clearable/>
        </div>
      </div>
    </div>


    <div class="bottom">
      <el-button type="primary">保存</el-button>
    </div>

  </MenuBackground>
</template>

<script setup>

import MenuBackground from "../../components/MenuBackground.vue";

const input = ref('')
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
  justify-content: center;
}

.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  writing-mode: horizontal-tb;
  margin: 15px;
}

.wrapper .span {
  margin-right: 15px;
}

.el-button {
  margin-right:20px;
}

.bottom{
  display: flex;
  justify-content: center;
  align-items: center;
}


.el-input {
  width: 214.8px;
}
</style>
