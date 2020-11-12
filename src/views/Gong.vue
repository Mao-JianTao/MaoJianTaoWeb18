<template>
  <div id="app">
    <Center title="公告管理"></Center>
    <div class="gong">
      <div class="gong-top">
        <div class="time">
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
          </div>

          <div class="sele">
            <el-select v-model="value" size="mini" placeholder="公告类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>

          <div class="text">
            <el-input
              size="mini"
              v-model="input"
              placeholder="请输入公告标题"
            ></el-input>
          </div>

          <div class="butt">
            <el-button size="mini" type="danger">查询</el-button>
          </div>
          <div class="butt">
            <el-button size="mini" type="danger">添加</el-button>
          </div>
        </div>

        <div class="tab">
            <el-table :data="tableData" border style="width: 98%">
                <el-table-column prop="nub" label="序号" width="92" align="center"></el-table-column>
                <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
                <el-table-column prop="lei" label="公告类型" width="160" align="center"></el-table-column>
                <el-table-column prop="biao" label="公告标题" width="160" align="center"></el-table-column>
                <el-table-column prop="nei" label="公告内容" width="160" align="center"></el-table-column>
                <el-table-column prop="fa" label="发布者" width="160" align="center"></el-table-column>
                <el-table-column prop="cao" label="操作" width="160" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Center from "../components/Center";
export default {
  name: "Gong",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "公告类型",
        },
        {
          value: "选项2",
          label: "业委会公告",
        },
        {
          value: "选项3",
          label: "物业公告",
        },
        {
          value: "选项4",
          label: "街道办公告",
        },
      ],

      tableData: [{
          nub: '1',
          date: '2019-09-12 16:12:20',
          lei: '物业公告',
          biao:'标题1',
          nei:'内容1',
          fa:'张三',
          cao:'修改  删除  详情',
        }, {
           nub: '2',
          date: '2019-09-12 16:12:20',
          lei: '物业公告',
          biao:'标题2',
          nei:'内容2',
          fa:'张三',
          cao:'修改  删除  详情',
        }, {
           nub: '3',
          date: '2019-09-12 16:12:20',
          lei: '物业公告',
          biao:'标题3',
          nei:'内容3',
          fa:'张三',
          cao:'修改  删除  详情',
        }, {
          nub: '4',
          date: '2019-09-12 16:12:20',
          lei: '物业公告',
          biao:'标题4',
          nei:'内容4',
          fa:'张三',
          cao:'修改  删除  详情',
        }],

      value: "",
      value1: "",
      value2: "",
      input: "",
    };
  },
  components: {
    Center,
  },
};
</script>


<style scoped>
.gong {
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 1100px;
  height: 705px;
  border: 1px solid rgba(168, 168, 168, 0.548);
}
.gong-top {
  margin-top: 20px;
}
.time {
  height: 30px;
  font-size: 12px;
}
.time > div {
  float: left;
  margin-left: 5px;
}
.tab{
    margin-left: 5px;
    margin-top: 20px;
}
</style>