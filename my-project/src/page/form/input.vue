<template>
  <div class="form">
    <selectHeader></selectHeader>
    <div class="basic-usage">
      <h3>基础用法</h3><p>Input 为受控组件，它总会显示 Vue 绑定值。通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。不支持 v-model 修饰符。</p>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="disabled">
      <h3>禁用状态</h3><p>通过 disabled 属性指定是否禁用 input 组件</p>
      <el-input
        placeholder="请输入内容"
        v-model="input1"
        :disabled="true">
      </el-input>
    </div>
    <div class="clearable">
      <h3>可清空</h3><p>使用clearable属性即可得到一个可清空的输入框</p>
        <el-input
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
    </div>
    <div class="password-box">
      <h3>密码框</h3><p>使用show-password属性即可得到一个可切换显示隐藏的密码框</p>
      <el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'inputQ',
    components:{
      selectHeader
    },
    data() {
      return {
        input: '',
        input1: '',
        input10: '',
        input11: ''
      }
    },
   }
</script>

<style>
.form > div{
  margin-top:70px;
}
</style>
