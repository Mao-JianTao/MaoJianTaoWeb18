<template>
  <div id="app">
    <center title="医生简介"></center>
    <div class="cent">
      <div class="cent-left">
        <div class="cent-left1">
          <p>
            <el-input
              v-model="input"
              size="mini"
              placeholder="请输入医院名称"
            ></el-input>
          </p>
          <p><el-button size="mini" type="primary">Go</el-button></p>
        </div>
        <div class="cent-left2">
          <el-tree
            :data="data"
            size="mini"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </div>
      </div>

      <div class="cent-right">
        <div class="cent-right1">
          <div class="cent-rightI">
            <span>长沙</span> <span>切换城市</span>
          </div>
          <div class="cent-right2">
            <div class="sele">
              <el-select v-model="value1" size="mini" placeholder="请选择科室">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="sele">
              <el-input
                v-model="value2"
                size="mini"
                placeholder="请输入医生名称"
              ></el-input>
            </div>
            <div class="sele">
              <el-button size="mini" type="primary">搜索</el-button>
            </div>
          </div>
        </div>

        <div class="cent-cent2">
            <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>

             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>

             <div class="cent-name">
              <p>xxx科室</p>
              <p><img src="../../public/img/logo.png" alt=""></p>
              <p>主任医生: 张xx</p>
            </div>
        </div>


        <div class="cent-bot">
            <div class="cent-bot1">
              <p>总记录数:100/条</p>
              <p>页数:1/9</p>
              <p>每页:12/条</p>
            </div>
            <div class="cent-bot2">
              <el-pagination
                background
                layout=" pager, next"
                :total="50"
              ></el-pagination>
            </div>
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
.cent-left {
  float: left;
  width: 250px;
  height: 700px;
  border: 1px solid rgba(168, 168, 168, 0.548);
}
.cent-left1 {
  height: 40px;
  border-bottom: 1px solid rgba(168, 168, 168, 0.548);
}
.cent-left1 p {
  float: left;
  margin: 5px 10px;
}
.cent-left1 p:nth-of-type(1) {
  width: 150px;
  float: left;
}
.cent-left2 {
  font-size: 12px;
}
.cent-right {
  width: 848px;
  float: left;
  height: 700px;
}
.cent-right1 {
  height: 41px;
  font-size: 14px;
  border-bottom: 1px solid rgba(168, 168, 168, 0.548);
}
.cent-rightI{
  float: left;
  line-height: 41px;
}
.cent-rightI span {
  float: left;
  margin: 0px 8px;
}
.cent-rightI span:nth-of-type(2) {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.cent-right2{
  float: right;
  line-height: 41px;
}
.sele {
  float: left;
  margin: 0px 5px;
}
.cent-name{
  float: left;
  width: 200px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid rgb(201, 201, 201);
  margin: 30px 30px;
  line-height: 1px;
}
.cent-name p:nth-of-type(1){
  height: 10px;
  font-size: 12px;
  line-height: 5px;
  padding-left: 10px;
  border-bottom: 1px solid  rgb(201, 201, 201);
}
.cent-name P:nth-of-type(2){
  text-align: center;
}
.cent-name P:nth-of-type(3){
  font-size: 12px;
  text-align: center;
}
.cent-bot {
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}
.cent-bot p {
  float: left;
  font-size: 13px;
  margin: 0px 12px;
  font-weight: bold;
}
.cent-bot2 {
  float: right;
  margin-top: 10px;
}
</style>

<script>
import Center from "../components/Center";
export default {
  name: "Top2-3",
  data() {
    return {
      data: [
        {
          label: "当前位置",
          children: [
            {
              label: "佑姆塘社区医院",
            },
            {
              label: "湘雅一医院",
            },
            {
              label: "长沙光大医院",
            },
            {
              label: "长沙爱耳眼科",
            },
            {
              label: "湖南省中医附属医院",
            },
            {
              label: "岳麓区人民医院",
            },
          ],
        },
        {
          label: "省级医院",
          children: [
            {
              label: "湖南省人民医院",
            },
            {
              label: "湖南省儿童医院",
            },
            {
              label: "湖南省妇幼保键院",
            },
            {
              label: "湖南省xxx医院",
            },
          ],
        },
        {
          label: "市级医院",
          children: [
            {
              label: "长沙市一医院",
            },
            {
              label: "长沙市二医院",
            },
            {
              label: "长沙市三医院",
            },
            {
              label: "长沙市四医院",
            },
            {
              label: "长沙市妇幼保键医",
            },
            {
              label: "长沙xxx医院",
            },
          ],
        },
        {
          label: "专科医院",
          children: [
            {
              label: "xxx牙科医院",
            },
            {
              label: "xxx口腔医院",
            },
            {
              label: "xxx皮肤病医院",
            },
            {
              label: "xxx眼科医院",
            },
          ],
        },
        {
          label: "重点医院",
          children: [
            {
              label: "湘雅一医院",
            },
            {
              label: "湘雅二医院",
            },
            {
              label: "湘雅三医院",
            },
            {
              label: "湘雅四医院",
            },
            {
              label: "湘雅五医院",
            },
          ],
        },
      ],
      options: [
        {
          value: "选项1",
          label: "1科",
        },
        {
          value: "选项2",
          label: "2科",
        },
        {
          value: "选项3",
          label: "3科",
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      input: "",
      value1: "",
      value2:""
    };
  },
  components: {
    Center,
  },
};
</script>