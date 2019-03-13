<template>
  <div class="notice">
    <selectHeader></selectHeader>
    <div>
      <p>从场景上说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p>
    </div>
    <div class="alert">
      <h3>消息提示</h3><p>调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title。值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。</p>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
    <div class="confirm">
      <h3>确认消息</h3><p>调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。Message Box 组件也拥有极高的定制性，我们可以传入options作为第三个参数，它是一个字面量对象。type字段表明消息类型，可以为success，error，info和warning，无效的设置将会被忽略。注意，第二个参数title必须定义为String类型，如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。</p>
      <el-button type="text" @click="open2">点击打开 Message Box</el-button>
    </div>
    <div class="prompt">
      <h3>提交内容</h3><p>调用$prompt方法即可打开消息提示，它模拟了系统的 prompt。可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，可以返回Boolean或String，返回false或字符串时均表示校验未通过，同时返回的字符串相当于定义了inputErrorMessage字段。此外，可以用inputPlaceholder字段来定义输入框的占位符。</p>
       <el-button type="text" @click="open3">点击打开 Message Box</el-button>
    </div>
    <div class="customization">
      <h3>自定义</h3><p>以上三个方法都是对$msgbox方法的再包装。本例直接调用$msgbox方法，使用了showCancelButton字段，用于显示取消按钮。另外可使用cancelButtonClass为其添加自定义样式，使用cancelButtonText来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了beforeClose属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：action、实例本身和done方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加loading状态等；此时若需要关闭实例，可以调用done方法（若在beforeClose中没有调用done，则实例不会关闭）。</p>
      <el-button type="text" @click="open4">点击打开 Message Box</el-button>
    </div>
    <div class="use-html-string">
      <h3>使用 HTML 片段</h3><p>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</p>
      <p>message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。</p>
      <el-button type="text" @click="open5">点击打开 Message Box</el-button>
    </div>
    <div class="cancel-close">
      <h3>区分取消与关闭</h3><p>默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和callback回调的参数均为 'cancel'。如果将distinguishCancelAndClose属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。</p>
      <el-button type="text" @click="open6">点击打开 Message Box</el-button>
    </div>
    <div class="global-method">
      <h3>居中布局</h3><p>将 center 设置为 true 即可开启居中布局</p>
       <el-button type="text" @click="open7">点击打开 Message Box</el-button>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'messageBox',
    components:{
      selectHeader
    },
    data() {
      return {

        }
    },
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
       open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
       open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
       open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
       open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      },
       open6() {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
      },
      open7() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
   }
</script>

<style>
.notice > div{
  margin-top:70px;
}
</style>
