<template>
<div>
   <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">{{$t('message.indexTitle[0]')}}</el-menu-item>
        <el-menu-item index='2' >
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

      <h1>{{$t('message.title')}}</h1>
      <p>{{$t('message.text')}}</p>
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
       activeIndex: '1',
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
</style>
