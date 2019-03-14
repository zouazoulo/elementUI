<template>
  <div class="form">
    <selectHeader></selectHeader>
    <div class="">
      * 如果 Select 的绑定值为对象类型，请务必指定 value-key 作为它的唯一性标识。,<br>
      使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。<br> 本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。 <br>
      <h3>远程搜索</h3>
      为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。
      <h3>可搜索</h3>
      为el-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
    </div>
    <div class="basic-usage">
      <h3>基础用法</h3><p>v-model的值为当前被选中的el-option的 value 属性值</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="disabled-select">
      <h3>有禁用选项</h3><p>在el-option中，设定disabled值为 true，即可禁用该选项</p>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div class="disabled_select">
      <h3>禁用状态</h3><p>为el-select设置disabled属性，则整个选择器不可用</p>
      <el-select v-model="value3" disabled placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="clearable-single-select">
      <h3>可清空单选</h3><p>为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。</p>
      <el-select v-model="value4" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          collapse-tags='false'>
        </el-option>
      </el-select>
    </div>
    <div class="Basic multiple select">
      <h3>基础多选</h3><p>为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</p>
      <el-select v-model="value5"  placeholder="请选择"  multiple :multiple-limit='2'	>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>

      <el-select
        v-model="value11"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="grouping">
      <h3>分组</h3><p>使用el-option-group对备选项进行分组，它的label属性为分组名</p>
      <el-select v-model="value7" placeholder="请选择">
        <el-option-group
          v-for="group in options3"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'selectQ',
    components:{
      selectHeader
    },
    data() {
      return {
        options: [{
        value: '选项1',
        label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }, {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',
        value3:'',
        value4: '',
        value5: [],
        value11: [],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: ''
      }
    },
   }
</script>

<style>
.form > div{
  margin-top:70px;
}
</style>
