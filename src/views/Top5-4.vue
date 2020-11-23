<template>
  <div id="app">
      <Center title="电子地图"></Center>
    <div class="box1">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" >
        <el-tab-pane label="用户管理" name="first">
            <img src="../assets/z.jpg" width="100%" height="50%">
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second" style="height:700px">
            <div class="box2">
                <span>创建资源</span>
                <input placeholder="输入设备ID或名称">
                <span>搜索</span>
            </div>
            <div class="box3">
                <el-table :data="tableData" border style="width: 100%" > 
          <el-table-column prop="date" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="name" label="设备ID" width="180" align="center">
          </el-table-column>
          <el-table-column prop="province" label="资源名称" width="180" align="center">
          </el-table-column>
          <el-table-column prop="mianji" label="详细地址" width="180" align="center">
          </el-table-column>
          <el-table-column prop="shi" label="地理位置" width="180" align="center">
          </el-table-column>
          <el-table-column prop="lou" label="备注" width="170" align="center">
          </el-table-column>
          <el-table-column label="操作" width="200" align="center">
            <template>
              <el-button type="text" >修改</el-button>
              <el-button type="text" @click="open" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
            </div>
            <div class="block box4">
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Dianzdt",
  components: {
    Center
  },
  data(){
      return {
        activeName: 'first',
        tableData: [
        {
          date: "1",
          name: "id1",
          province: "名称1",
          mianji: "地址1",
          shi: "经度xxx，纬度xxx",
          lou: "备注1",
        },
        {
          date: "2",
          name: "id2",
          province: "名称2",
          mianji: "地址2",
          shi: "经度xxx，纬度xxx",
          lou: "备注2",
        },
      ],
      }
  },
  methods: {
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
.box1{
    float: left;
    width: 80%;
    margin-left: 10px;
    margin-top: 10px;
}
.box2 span{
    padding: 2px 20px;
    border: 1px solid;
    border-radius: 6px;
    margin-right: 10px;
    margin-left: 10px;
}
.box2 input{
    height: 20px;
    margin-left: 800px;
}
.box3{
    margin-top: 10px;
}
.box4{
    text-align: center;
    margin-top: 450px;
}
</style>