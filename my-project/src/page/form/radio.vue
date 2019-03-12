<template>
  <div class="form">
    <selectHeader></selectHeader>
    <div class="basic-usage">
      <h3>基础用法</h3><span>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</span>
      <p>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
      <el-radio v-model="radio" label="1">备选项A</el-radio>
      <el-radio v-model="radio" label="2">备选项B</el-radio>
    </div>
    <div class="disabled">
      <h3>禁用状态</h3><span>单选框不可用的状态。</span>
      <p>只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。</p>
      <el-radio disabled v-model="radio1" label="禁用">备选项A</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项B</el-radio>
    </div>
    <div class="radio-button-group">
      <h3>单选框组</h3><span>适用于在多个互斥的选项中选择的场景</span>
      <p>结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value</p>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    <div class="button-style">
      <h3>按钮样式</h3><span>按钮样式的单选组合。</span>
      <p>只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性。</p>
      <div>
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="上海" ></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled ></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio6" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="with-borders">
      <h3>带有边框</h3><span>设置border属性可以渲染为带有边框的单选框。</span>
        <div>
          <el-radio v-model="radio7" label="1" border>Option A</el-radio>
          <el-radio v-model="radio7" label="2" border>Option B</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio8" label="1" border size="medium">Option A</el-radio>
          <el-radio v-model="radio8" label="2" border size="medium">Option B</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio9" size="small">
            <el-radio label="1" border>Option A</el-radio>
            <el-radio label="2" border disabled>Option B</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio10" size="mini" disabled>
            <el-radio label="1" border>Option A</el-radio>
            <el-radio label="2" border>Option B</el-radio>
          </el-radio-group>
        </div>
      </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'radio',
    components:{
      selectHeader
    },
    data() {
      return {
          radio: '1',
          radio1: '选中且禁用',
          radio2: 3,
          radio3: '上海',
          radio4: '上海',
          radio5: '上海',
          radio6: '上海',
          radio7: '1',
          radio8: '1',
          radio9: '1',
          radio10: '1'
        }
    },
   }
</script>

<style>
.form > div{
  margin-top:70px;
}
</style>
