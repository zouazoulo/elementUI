<template>
<div>
   <div class="fixed-header">
      <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"> <router-link tag='span' to="home">{{$t('message.indexTitle[0]')}}</router-link></el-menu-item>
        <el-submenu index='2'>
            <template slot="title">组件</template>
              <el-submenu index="2-1">
                <template slot="title">基础</template>
                 <el-menu-item index="2-1-1"> <router-link tag='span' to="layout">布局Layout</router-link></el-menu-item>
                 <el-menu-item index="2-1-2"> <router-link tag='span' to="container">布局容器</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">表单</template>
                <el-menu-item index="2-2-1"> <router-link tag='span' to="radio">单选框</router-link></el-menu-item>
                <el-menu-item index="2-2-2"> <router-link tag='span' to="checkout">多选框</router-link></el-menu-item>
                <el-menu-item index="2-2-3"> <router-link tag='span' to="select">选择器</router-link></el-menu-item>
                <el-menu-item index="2-2-4"> <router-link tag='span' to="input">输入框</router-link></el-menu-item>
                <el-menu-item index="2-2-5"> <router-link tag='span' to="inputNumber">计数器</router-link></el-menu-item>
                <el-menu-item index="2-2-6"> <router-link tag='span' to="rate">评分</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="2-3">
                <template slot="title">数据</template>
                <el-menu-item index="2-3-1"> <router-link tag='span' to="progress">进度条</router-link></el-menu-item>
                <el-menu-item index="2-3-2"> <router-link tag='span' to="badge">标记</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="2-4">
                <template slot="title">通知</template>
                <el-menu-item index="2-4-1"> <router-link tag='span' to="loading">加载</router-link></el-menu-item>
                <el-menu-item index="2-4-2"> <router-link tag='span' to="message">消息提醒</router-link></el-menu-item>
                <el-menu-item index="2-4-3"> <router-link tag='span' to="messageBox">弹框</router-link></el-menu-item>
              </el-submenu>
               <el-submenu index="2-5">
                <template slot="title">导航</template>

              </el-submenu>
              <el-submenu index="2-6">
                <template slot="title">其他</template>
              </el-submenu>
        </el-submenu>
        <el-menu-item index='3' >
          <el-select v-model="selectValue" @change="langChange" placeholder="请选择" id="select-lang">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
          </el-select>
        </el-menu-item>
      </el-menu>
    </div>
</div>
</template>

<script>
export default {
  name: 'selectT',
  data () {
    return {
      selectValue:'cn',
      options:[
        {
        value: 'cn',
        label: '中文'
        }, {
        value: 'en',
        label: 'English'
        }
      ],
    }
  },
  created() {
        let that = this;
        console.log(localStorage.lang)
        that.selectValue = localStorage.lang == undefined?'cn':localStorage.lang
    },
  methods: {
     //语言切换
    langChange(e){
    // console.log(e)
    localStorage.setItem('lang',e);
    this.$i18n.locale = e;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch:{
    selectValue(val){
      let webTitle = document.getElementById('web-title')
       if(val == 'en'){
          webTitle.innerText = 'Index'
       }else{
          webTitle.innerText = '主页'
       }
    }
  },
  updated(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#select-lang{
  display: inline-block;
  padding:0;
  border: 0;
  width: 100px;
  text-indent: 20px;
}
.langs-style{
  color: #409EFF;
}
.el-menu-item{
  padding: 0;
  width: 100px;
  text-align: center;
}
.el-menu-item span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.fixed-header{
  position: fixed;
  top:0;
  left:0;
  background-color: #fff;
  z-index: 100000000;
}
</style>
