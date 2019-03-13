<template>
  <div class="steps">
    <selectHeader></selectHeader>
    <div class="">
      <h3>基础用法</h3><p>设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可，它接受Boolean，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。</p>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="">
      <h3>含状态步骤条</h3><p>也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。</p>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="">
      <h3>有描述的步骤条</h3><p>每个步骤有其对应的步骤状态描述。</p>
      <el-steps :active="1" align-center>
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      </el-steps>
    </div>
    <div class="">
      <h3>带图标的步骤条</h3><p>通过icon属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名slot来使用自定义的图标。</p>
      <el-steps :active="1">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
    <div class="">
      <h3>竖式步骤条</h3><p>只需要在el-steps元素中设置direction属性为vertical即可。</p>
      <div style="height: 300px;">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="">
      <h3>简洁风格的步骤条</h3><p>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</p>
      <el-steps :active="1" simple>
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>

      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="步骤 1" ></el-step>
        <el-step title="步骤 2" ></el-step>
        <el-step title="步骤 3" ></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import selectHeader from '../../components/select1.vue';
  export default {
    name:'steps',
    components:{
      selectHeader
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
   }
</script>

<style>
.steps > div {
   margin-top:70px;
}
</style>
