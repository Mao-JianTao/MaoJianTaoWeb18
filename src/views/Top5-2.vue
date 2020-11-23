<template>
  <div id="app">
      <Center title="人口信息"></Center>
    <div class="box1">
      <p class="box2">
        <span><input type="input" /></span>
        <span>查询</span>
        <span @click="dialogFormVisible = true">添加</span>
      </p>
      <p class="box3">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="序号" width="82" align="center">
          </el-table-column>
          <el-table-column prop="name" label="业主姓名" width="150" align="center">
          </el-table-column>
          <el-table-column prop="province" label="性别" width="150" align="center">
          </el-table-column>
          <el-table-column prop="city" label="身份证号" width="150" align="center">
          </el-table-column>
          <el-table-column prop="address" label="联系方式" width="150" align="center">
          </el-table-column>
          <el-table-column prop="zip" label="住址" width="150" align="center">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template>
              <el-button type="text" size="small" @click="dialogFormVisible = true">修改</el-button>
              <el-button type="text" size="small" @click="open">删除</el-button>
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
    <el-dialog title="修改人口信息" :visible.sync="dialogFormVisible"  style="width:900px;margin-left:550px">
      <el-form :model="form">
        <el-form-item label="人员姓名:" :label-width="formLabelWidth" style="width:338px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="系统管理员">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="身份证号:" :label-width="formLabelWidth" style="width:338px">
          <el-input v-model="form.date2" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="联系方式:" :label-width="formLabelWidth" style="width:338px">
          <el-input v-model="form.date1" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="住址:" :label-width="formLabelWidth" style="width:338px">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Renkxx",
  components: {
    Center
  },
  data() {
    return {
      input: "",
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''  
        },
        formLabelWidth: '120px',
      tableData: [
        {
           date: "1",
          name: "lisi",
          province: "社区管理员",
          city: "李四",
          address: "13574955513",
          zip: "1栋102室",
        },
        {
          date: "2",
          name: "lisi",
          province: "社区管理员",
          city: "李四",
          address: "13574955513",
          zip: "1栋102室",
        },
        {
          date: "3",
          name: "wangwu",
          province: "运维人员",
          city: "王五",
          address: "13578955513",
          zip: "1栋103室",
        },
        {
          date: "4",
          name: "zhaoliu",
          province: "物业人员",
          city: "赵六",
          address: "13578955513",
          zip: "1栋104室",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
     open() {
        this.$confirm('您确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
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
  width: 180px;
  margin-left: 680px;
}
.box2 span:nth-of-type(2) {
  margin-left: 20px;
  padding: 10px 30px;
  background-color: #c0c0ff;
  color: #fff;
  border-radius: 7px;
}
.box2 span:nth-of-type(3) {
  margin-left: 20px;
  padding: 10px 30px;
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
  height: 60px;
  border: 1px solid #b6a4fe;
  margin-top: 277px;
}
.box5 div {
  margin-top: 20px;
}
</style>