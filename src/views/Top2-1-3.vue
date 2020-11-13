<template>
  <div id="app">
    <Center title="预约挂号"></Center>
    <div class="cent">
      <div class="cent-top">
        <div class="button">
          <router-link to="top2-1-1"
            ><el-button size="mini" type="primary">返回</el-button></router-link
          >
        </div>
      </div>
      <div class="cent-top2">
        <div class="cent2-cent">
          <p>湘雅第一医院</p>
          <p><span>地址：xxxxx</span> <span>电话：120</span></p>
        </div>
        <div class="cent2-input">
          <div class="sele">
            <el-select v-model="value1" size="mini" placeholder="请选择科室">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="sele">
            <el-select v-model="value2" size="mini" placeholder="请选择医生">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="sele">
            <el-select v-model="value3" size="mini" placeholder="请选择日期">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="sele">
            <el-select v-model="value4" size="mini" placeholder="请选择时段">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="tab">
          <div class="tab1">
            <p>请选择患者</p>
            <p>新增</p>
          </div>
          <div class="tab2">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column
                prop="dan"
                label="单选"
                width="166"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="nub"
                label="序号"
                width="166"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="166"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="phone"
                label="联系方式"
                width="166"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="zheng"
                label="证件类型"
                width="167"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="sheng"
                label="身份证号"
                width="168"
                align="center"
              >
              </el-table-column>
            </el-table>
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
          <div class="que">
            <el-popover placement="right" width="400" trigger="click">
             
            <el-button slot="reference">确认</el-button>
            </el-popover>
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

.button {
  float: left;
  line-height: 40px;
  margin-left: 20px;
}
.cent-top2 {
  width: 1000px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
  line-height: 20px;
}
.cent2-cent {
  height: 80px;
  border-bottom: 1px solid rgb(167, 167, 167);
}
.cent2-cent p:nth-of-type(1) {
  font-size: 25px;
  font-weight: bold;
}
.cent2-cent p:nth-of-type(2) span {
  font-size: 15px;
  font-weight: bold;
  margin: 0px 40px;
}
.cent2-input {
  height: 80px;
  line-height: 80px;
}
.cent2-input div {
  float: left;
  margin: 0px 12px;
}
.tab {
  height: 300px;
}

.tab1 p {
  float: left;
  margin-left: 20px;
  font-size: 14px;
}
.tab1 p:nth-of-type(2) {
  color: blue;
  font-weight: bold;
  text-decoration: underline;
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
.que {
    margin-top: 20px;
  float: right;
}
</style>
<script>
import Center from "../components/Center";
export default {
  name: "Top2-1-3",
  data() {
    return {
      tableData: [
        {
          dan: "",
          nub: "1",
          name: "张三",
          phone: "110",
          zheng: "身份证",
          sheng: "437984669505261510",
        },
        {
          dan: "",
          nub: "1",
          name: "张三",
          phone: "110",
          zheng: "身份证",
          sheng: "437984669505261510",
        },
        {
          dan: "",
          nub: "1",
          name: "张三",
          phone: "110",
          zheng: "身份证",
          sheng: "437984669505261510",
        },
        {
          dan: "",
          nub: "1",
          name: "张三",
          phone: "110",
          zheng: "身份证",
          sheng: "437984669505261510",
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
      options2: [
        {
          value: "选项1",
          label: "医生1",
        },
        {
          value: "选项2",
          label: "医生2",
        },
        {
          value: "选项3",
          label: "医生3",
        },
      ],
      options3: [
        {
          value: "选项1",
          label: "请选择日期",
        },
      ],
      options4: [
        {
          value: "选项1",
          label: "请选择时段",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  components: {
    Center,
  },
};
</script>