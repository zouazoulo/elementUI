<template>
  <div class="form">
    <selectHeader></selectHeader>
    <div class="">
        true-label:选中时 value 值 <br>
        false-label:未选中 value 值

    </div>
    <div class="basic-usage">
      <h3>基础用法</h3><p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
      <el-checkbox v-model="checked" true-label='yes' false-label='no'>备选项</el-checkbox>
    </div>
    <div class="disabled-state">
      <h3>禁用状态</h3><span>多选框不可用状态.</span><p>设置disabled属性即可。</p>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>
    <div class="checkbox-group">
      <h3>多选框组</h3><span>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</span><p>checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A" ></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="indeterminate">
      <h3>indeterminate 状态</h3><p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
       <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="min-max">
        <h3>可选项目数量的限制</h3><p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
        <el-checkbox-group
          v-model="checkedCities1"
          :min="1"
          :max="2">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="button-style">
      <h3>按钮样式</h3><p>按钮样式的多选组合。</p><p>只需要把el-checkbox元素替换为el-checkbox-button元素即可。此外，Element 还提供了size属性。</p>
      <div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <div class="with-borders">
      <h3>带有边框</h3><p>设置border属性可以渲染为带有边框的多选框。</p>
      <div>
        <el-checkbox v-model="checked3" label="Option1" border ></el-checkbox>
        <el-checkbox v-model="checked4" label="Option2" border></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox v-model="checked5" label="Option1" border size="medium"></el-checkbox>
        <el-checkbox v-model="checked6" label="Option2" border size="medium"></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup5" size="small">
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
  import selectHeader from '../../components/select1.vue';
 const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name:'checkout',
    components:{
      selectHeader
    },
    data() {
      return {
        checked: false,
        checked1: false,
        checked2: true,
        checkList: ['选中且禁用','复选框 A'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkedCities1: ['上海', '北京'],
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checkboxGroup5: [],
        checkboxGroup6: []
       }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    },
    updated(){
      console.log(this.checked)
    }
  }
</script>

<style >
.form > div{
  margin-top:70px;
}
</style>
