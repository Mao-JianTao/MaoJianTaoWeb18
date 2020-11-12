<template>
  <div id="app">
    <Center title="缴费查询"></Center>
    <div class="center-bom">
      <div class="time">
        <div class="block">
          <span class="demonstration">开始日期: </span>
          <el-date-picker v-model="value1" size="mini" type="date" placeholder="选择日期"></el-date-picker>
        </div>

        <div class="block">
          <span class="demonstration">结束日期: </span>
          <el-date-picker v-model="value2" size="mini" type="date" placeholder="选择日期"></el-date-picker>
        </div>

        <div class="sele">
          <el-select v-model="value" size="mini" placeholder="缴费类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="butt">
          <el-button size="mini" type="danger">查询</el-button>
        </div>

      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 98%">
          <el-table-column
            prop="date"
            label="日期"
            width="162"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="缴费类型"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="住户楼室"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="缴费金额"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="缴费人"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="缴费状态"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="缴费方式"
            width="150"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import Center from "../components/Center"
export default {
  name: "Yuyue",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "水费",
          address: "6栋1202",
        },
        {
          date: "2016-05-02",
          name: "水费",
          address: "6栋1202",
        },
        {
          date: "2016-05-04",
          name: "水费",
          address: "6栋1202",
        },
        {
          date: "2016-05-01",
          name: "水费",
          address: "6栋1202",
        },
      ],
       options: [{
          value: '选项1',
          label: '水费'
        }, {
          value: '选项2',
          label: '电费'
        }, {
          value: '选项3',
          label: '停车费'
        }, {
          value: '选项4',
          label: '燃气费'
        }, {
          value: '选项5',
          label: '固话宽带'
        },
        {
          value: '选项6',
          label: '有线电视'
        },
                {
          value: '选项7',
          label: '物业费'
        }
        ],
        value:'',
        value1: '',
        value2: '',
    };
  },
  components: {
    Center
  },
};
</script>
<style scoped>
.center-box {
  width: 1100px;
  height: 30px;
  float: left;
  margin-left: 10px;
  margin-top: 21px;
  background: linear-gradient(90deg, #baa8fe, #ffffff);
  line-height: 30px;
  font-weight: 900;
  color: #ffffff;
  font-size: 12px;
  text-indent: 20px;
}

.time {
  font-size: 12px;
  line-height: 60px;
}
.time>div{
  float: left;
  margin-left: 60px;
}

.center-bom {
  width: 1100px;
  height: 650px;
  border: 1px solid beige;
  float: left;
  margin-left: 10px;
  margin-top: 25px;
}
.table {
  margin-top: 10px;
  margin-left: 15px;
}
table {
  text-align: center;
}
</style>