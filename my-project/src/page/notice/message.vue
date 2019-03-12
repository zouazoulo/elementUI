<template>
  <div class="notice">
    <selectHeader></selectHeader>
    <div class="basic-usage">
      <h3>基础用法</h3><p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个$message方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</p>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
      <h3>不同状态 可关闭</h3><p>用来显示「成功、警告、消息、错误」类的操作反馈。可以添加关闭按钮。</p>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
      <h3>使用 HTML 片段</h3><p>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</p>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
    </div>
    <p><span>ps:</span>message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。</p>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'message',
    components:{
      selectHeader
    },
    data() {
      return {

        }
    },
    methods: {
        open() {
          this.$message('这是一条消息提示');
        },

        openVn() {
          const h = this.$createElement;
          this.$message({
            message: h('p', null, [
              h('span', null, '内容可以是 '),
              h('i', { style: 'color: teal' }, 'VNode')
            ])
          });
        },
        open1() {
          this.$message({
            showClose: true,
            message: '这是一条消息提示'
          });
        },

        open2() {
          this.$message({
            showClose: true,
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        },

        open3() {
          this.$message({
            showClose: true,
            message: '警告哦，这是一条警告消息',
            type: 'warning'
          });
        },

        open4() {
          this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
          });
        },
        openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>正儿八经</i> 片段</strong>'
        });
      }
      }
   }
</script>

<style scoped>
</style>
