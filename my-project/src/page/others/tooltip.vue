<template>
  <div class="tooltip">
    <selectHeader></selectHeader>
    <div class="">
      <h3>基础用法</h3><p>使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
      <div class="box">
        <div class="top">
          <el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="Top Center 提示文字" placement="top">
            <el-button>上边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="Top Right 提示文字" placement="top-end">
            <el-button>上右</el-button>
          </el-tooltip>
        </div>
        <div class="left">
          <el-tooltip class="item" effect="light" content="Left Top 提示文字" placement="left-start">
            <el-button>左上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="Left Center 提示文字" placement="left">
            <el-button>左边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="Left Bottom 提示文字" placement="left-end">
            <el-button>左下</el-button>
          </el-tooltip>
        </div>

        <div class="right">
          <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <el-button>右上</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <el-button>右边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <el-button>右下</el-button>
          </el-tooltip>
        </div>
        <div class="bottom">
          <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <el-button>下左</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <el-button>下边</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <el-button>下右</el-button>
          </el-tooltip>
        </div>
      </div>
    </div>
    <p>Tooltip 组件提供了两个不同的主题：dark和light。</p>
    <h3>高级扩展</h3><p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。

事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
<p>tooltip 内不支持 router-link 组件，请使用 vm.$router.push 代替。</p>
<p>tooltip 内不支持 disabled form 元素，参考MDN，请在 disabled form 元素外层添加一层包裹元素。</p>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'tooltip',
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
.tooltip > div {
   margin-top:70px;
}
  .box {
    width: 400px;
  }
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
</style>
