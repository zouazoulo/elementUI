<template>
  <div class="notice">
    <selectHeader></selectHeader>
    <h3>区域加载</h3><p>Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令v-loading，只需要绑定Boolean即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加body修饰符，可以使遮罩插入至 DOM 中的 body 上。</p>
    <div class="loading"  v-loading="loading">

    </div>
    <h3>自定义</h3><p>在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。</p>
    <div class="loading"
     v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    </div>
    <div class="full-screen-loading">
      <h3>整页加载</h3><p>当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用lock修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
      <el-button
          type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          指令方式
        </el-button>
        <el-button
          type="primary"
          @click="openFullScreen2">
          服务方式
        </el-button>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'loading',
    components:{
      selectHeader
    },
    data() {
      return {
          loading: true,
          loading2:true,
          fullscreenLoading: false
        }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
     }
    }
</script>

<style >
.notice > div{
  margin-top:70px;
}
.loading{
  width: 100%;
  height:300px;
  background-color:#000;
}
</style>
