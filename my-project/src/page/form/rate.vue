<template>
  <div class="form">
    <selectHeader></selectHeader>
    <div class="basic-usage">
      <h3>基础用法</h3><p>评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。</p>
      <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
      </div>
      <div class="block">
        <span class="demonstration">区分颜色</span>
        <el-rate
          v-model="value2"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
    </div>
    <div class="">
      <h3>辅助文字</h3><p>为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。</p>
      <el-rate
        v-model="value3"
        show-text
        text-color='#B95EEE'
        :texts="['菜鸟','初出茅庐','小有名声','名誉天下','声名远扬']" >
      </el-rate>
    </div>
    <div class="">
      <el-rate
        v-model="value4"
        :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
        void-icon-class="icon-rate-face-off"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
    <div class="read-only">
      <h3>只读</h3><p>为组件设置 disabled 属性表示组件为只读，支持小数分值。此时若设置 show-score，则会在右侧显示目前的分值。可以提供 score-template 作为显示模板，模板为一个包含了 {value} 的字符串，{value} 会被解析为分值。</p>
      <el-rate
        v-model="value5"
        disabled
        show-score
        text-color="#ff9900"
        disabled-void-color='#000000'
        score-template="{value}">
      </el-rate>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'rate',
    components:{
      selectHeader
    },
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value5: 3.9,
        value4: null
        }
    },
   }
</script>

<style>
.form > div{
  margin-top:70px;
}
.el-rate__item,
.el-rate__item i{

  width: 20px;
  height:20px;
}
</style>
