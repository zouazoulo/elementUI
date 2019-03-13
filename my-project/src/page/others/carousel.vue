<template>
  <div class="carousel">
    <selectHeader></selectHeader>
    <div class="">
      <h3>基础用法</h3><p>结合使用el-carousel和el-carousel-item标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在el-carousel-item标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置trigger属性为click，可以达到点击触发的效果。</p>
       <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px" >
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="">
      <h3>指示器</h3><p>indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。</p>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="">
      <h3>卡片化</h3><p>将type属性设置为card即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
      <el-carousel :interval="4000" type="card" height="200px" arrow="always">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <p>indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。</p>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'carousel',
    components:{
      selectHeader
    },
    data() {
      return {

        }
    },
   }
</script>

<style>
.carousel > div {
   margin-top:70px;
}
.el-carousel{
    width:500px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
