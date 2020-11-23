<template>
  <div id="app">
    <Center title="角色管理"></Center>
    <div class="box1">
      <p class="box2">
        <span><input type="input" /></span>
        <span>查询</span>
        <span>添加</span>
      </p>
      <p class="box3">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="name" label="角色名称" width="318" align="center">
          </el-table-column>
          <el-table-column prop="province" label="角色备注" width="318" align="center">
          </el-table-column>
          <el-table-column label="操作" width="318" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </p>
      <div class="box5">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center"
export default {
  name: "Juesgl",
  components: {
    Center
  },
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "1",
          name: "zhangsan",
          province: "系统管理员",
        },
        {
          date: "2",
          name: "lisi",
          province: "社区管理员",
        },
        {
          date: "3",
          name: "wangwu",
          province: "运维人员",
        },
        {
          date: "4",
          name: "zhaoliu",
          province: "物业人员",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
<style scoped>

.box1 {
  width: 80%;
  height: 710px;
  border: 1px solid #dfdff9;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.box2 {
  width: 100%;
  height: 60px;
  margin-top: 20px;
}
.box2 input {
  height: 30px;
  width: 200px;
  margin-left: 660px;
}
.box2 span:nth-of-type(2) {
  margin-left: 20px;
  padding: 10px 35px;
  background-color: #c0c0ff;
  color: #fff;
  border-radius: 7px;
}
.box2 span:nth-of-type(3) {
  margin-left: 20px;
  padding: 10px 35px;
  background-color: #c0c0ff;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
}
.box3 {
  width: 86%;
  margin: 0px auto;
}
.box5 {
  text-align: center;
  width: 100%;
  height: 70px;
  border-top: 1px solid #b6a4fe;
  margin-top: 267px;
}
.box5 div {
  margin-top: 20px;
}
</style>