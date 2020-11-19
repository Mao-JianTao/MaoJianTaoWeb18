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
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="日期" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停车场位置" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ting }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车库位置" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.wei }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车位标识" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.biao }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车位照片" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.zhao }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车位业主" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="停放车辆" align="center" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.fang }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
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
            <el-pagination background layout=" pager, next" :total="50"></el-pagination>
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
.cent-bot{
    height: 50px;
    line-height: 50px;
}
.cent-bot p{
    float: left;
    font-size: 13px;
    margin: 0px 12px;
    font-weight: bold;
}
.cent-bot2{
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
          date: "2019-09-01",
          ting: "A区 停车场",
          wei: "位置一.....",
          biao: "xxx标识1",
          zhao: "照片1",
          name: "张xx",
          fang: "京A ~F0236",
        },
        {
          date: "2019-09-01",
          ting: "B区 停车场",
          wei: "位置二.....",
          biao: "xxx标识2",
          zhao: "照片2",
          name: "许xx",
          fang: "京A ~F0236",
        },
        {
          date: "2019-09-01",
          ting: "A区 停车场",
          wei: "位置二.....",
          biao: "xxx标识3",
          zhao: "照片3",
          name: "王xx",
          fang: "京A ~F0236",
        },
        {
          date: "2019-09-01",
          ting: "C区 停车场",
          wei: "位置一.....",
          biao: "xxx标识1",
          zhao: "照片四",
          name: "李xx",
          fang: "京A ~F0236",
        },
      ],
      value1:'',
  value2:'',
  value3:'',
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