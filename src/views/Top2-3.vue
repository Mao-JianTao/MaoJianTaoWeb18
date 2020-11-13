<template>
    <div id="app">
        <center title="医生简介"></center>
        <div class="cent">
            <div class="cent-left">
                <div class="cent-left1">
                    <p><el-input v-model="input" size="mini" placeholder="请输入医院名称"></el-input></p>
                    <p><el-button size="mini" type="primary">Go</el-button></p>
                </div>
                <div class="cent-left2">
                    <el-tree :data="data" size="mini" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div>
            </div>
            <div class="cent-right">
                <div class="cent-right1">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cent {
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 1100px;
  height: 705px;
  border: 1px solid rgba(168, 168, 168, 0.548);
}
.cent-left{
    float: left;
    width: 250px;
    height:700px;
    border: 1px solid  rgba(168, 168, 168, 0.548);
}
.cent-left1{
    height:40px;
    border-bottom: 1px solid rgba(168, 168, 168, 0.548);
}
.cent-left1 p{
    float: left;
    margin: 5px 10px;
}
.cent-left1 p:nth-of-type(1){
    width: 150px;
   float: left;
}
.cent-left2{
    font-size: 12px;
}
.cent-right{
    width: 848px;
    float: right;
    height: 700px;
}
.cent-right1{
    height: 41px;
    border-bottom: 1px solid  rgba(168, 168, 168, 0.548);
}
</style>

<script>
import Center from '../components/Center'
export default {
    name:'Top2-3',
    data() {
        return {
             data: [{
          label: '当前位置',
          children: [{
            label: '佑姆塘社区医院',
          },
          {
            label: '湘雅一医院',
          },
          {
            label: '长沙光大医院',
          },
          {
            label: '长沙爱耳眼科',
          },
          {
            label: '湖南省中医附属医院',
          },
          {
            label: '岳麓区人民医院',
          },
          ],
        },
        {
          label: '省级医院',
          children: [{
            label: '湖南省人民医院',
          },
          {
            label: '湖南省儿童医院',
          },
          {
            label: '湖南省妇幼保键院',
          },
          {
            label: '湖南省xxx医院',
          },
          ],
        },
        {
          label: '市级医院',
          children: [{
            label: '长沙市一医院',
          },
          {
            label: '长沙市二医院',
          },
          {
            label: '长沙市三医院',
          },
          {
            label: '长沙市四医院',
          },
           {
            label: '长沙市妇幼保键医',
          },
           {
            label: '长沙xxx医院',
          },
          ],
        },
        {
          label: '专科医院',
          children: [{
            label: 'xxx牙科医院',
          },
          {
            label: 'xxx口腔医院',
          },
          {
            label: 'xxx皮肤病医院',
          },
          {
            label: 'xxx眼科医院',
          },
          ],
        },
        {
          label: '重点医院',
          children: [{
            label: '湘雅一医院',
          },
          {
            label: '湘雅二医院',
          },
          {
            label: '湘雅三医院',
          },
          {
            label: '湘雅四医院',
          },
          {
            label: '湘雅五医院',
          },
          ],
        },
         ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
            input:''
        }
    },
    components:{
        Center
    }
}
</script>