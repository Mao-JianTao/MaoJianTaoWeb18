<template>
  <div id="app">
    <Center title="车位录入"></Center>
    <div class="cent">
      <div class="cent1">
        <div class="block">
          <span class="demonstration">开始日期: </span>
          <el-date-picker
            v-model="value1"
            size="mini"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束日期: </span>
          <el-date-picker
            v-model="value2"
            size="mini"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
          <el-date-picker
            v-model="value3"
            size="mini"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="block2">
          <el-button size="mini" type="success">查询</el-button>
        </div>
      </div>

      <div class="cent2">
        <el-table :data="tableData" border style="width: 99%">
          <el-table-column label="入库日期" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.rudate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="出库时间" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停车场名称" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车辆名称" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.che }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车辆型号" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.xing }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车辆车牌" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.pai }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停车时长" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停车费用" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.money }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停车费用" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.money }}</span>
            </template>
          </el-table-column>
           <el-table-column label="支付方式" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.zhi }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="97">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.cao }}</span>
            </template>
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
    </div>
  </div>
</template>


<style scoped>
.cent {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  width: 1100px;
  height: 705px;
  border: 1px solid rgba(168, 168, 168, 0.548);
}
.cent1 {
  height: 60px;
}
.block {
  float: left;
  line-height: 60px;
  margin: 0px 10px;
  font-size: 12px;
}
.block2 {
  float: right;
  line-height: 60px;
  margin-right: 30px;
}

.cent2 {
  margin: 0px auto;
  margin-top: 20px;
  width: 98%;
  height: 500px;
}
.cent-bot {
  height: 50px;
  line-height: 50px;
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
  name: "Top3-1-1",
  data() {
    return {
      tableData: [
        {
          rudate: "2019-09-12 15:23:12",
          date: "2019-09-13 15:23:12",
          name: "A区 停车场",
          che: "宝马1系",
          xing: "116i",
          pai: "京A~F0236",
          time: "12小时",
          money: "68",
          zhi:"微信支付",
          cao: "调用监控录像",
        },
        {
           rudate: "2019-09-12 15:23:12",
          date: "2019-09-13 15:23:12",
          name: "A区 停车场",
          che: "宝马1系",
          xing: "116i",
          pai: "京A~F0236",
          time: "12小时",
          money: "68",
          zhi:"微信支付",
          cao: "调用监控录像",
        },
        {
           rudate: "2019-09-12 15:23:12",
          date: "2019-09-13 15:23:12",
          name: "A区 停车场",
          che: "宝马1系",
          xing: "116i",
          pai: "京A~F0236",
          time: "12小时",
          money: "68",
          zhi:"微信支付",
          cao: "调用监控录像",
        },
        {
          rudate: "2019-09-12 15:23:12",
          date: "2019-09-13 15:23:12",
          name: "A区 停车场",
          che: "宝马1系",
          xing: "116i",
          pai: "京A~F0236",
          time: "12小时",
          money: "68",
          zhi:"微信支付",
          cao: "调用监控录像",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  components: {
    Center,
  },
};
</script>