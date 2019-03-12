<template>
  <div class="data">
    <selectHeader></selectHeader>
    <div class="badge">
      <h3>基础用法</h3><p>定义value属性，它接受Number或者String。</p>
      <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge value="new" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge is-dot class="item" >
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'badge',
    components:{
      selectHeader
    },
    data() {
      return {

        }
    },
   }
</script>

<style >
.data > div{
  margin-top:70px;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
