<template>
  <div id="app">
      <Center title="房屋信息"></Center>
    <div class="box1">
      <div>
        <el-select
          v-model="formInline.region"
          placeholder="房产类型"
          size="mini"
          class="box2"
          width="100px"
        >
          <el-option label="一手房" value="shanghai"></el-option>
          <el-option label="二手房" value="beijing"></el-option>
        </el-select>
        <el-select v-model="formInline.region" placeholder="区域"  size="mini" class="box2">
          <el-option label="A区" value="shanghai"></el-option>
          <el-option label="B区" value="beijing"></el-option>
        </el-select>
        <el-select v-model="formInline.region" placeholder="装修"  size="mini" class="box2">
          <el-option label="毛坯" value="shanghai"></el-option>
          <el-option label="精装" value="beijing"></el-option>
        </el-select>
        <el-select
          v-model="formInline.region"
          placeholder="房屋类型"
           size="mini"
          class="box2"
        >
          <el-option label="商品房" value="shanghai"></el-option>
          <el-option label="经济房" value="beijing"></el-option>
        </el-select>
        <input class="box3"  size="mini" placeholder="请输入房屋编号" />
        <span class="box4">查询</span>
        <span class="box4" @click="dialogFormVisible = true">添加</span>
      </div>
      <div class="box5">
        <el-table :data="tableData" border style="width: 96%">
          <el-table-column prop="date" label="序号" width="55" align="center">
          </el-table-column>
          <el-table-column prop="name" label="房产类型" width="120" align="center">
          </el-table-column>
          <el-table-column prop="province" label="区域" width="120" align="center">
          </el-table-column>
          <el-table-column prop="mianji" label="面积" width="120" align="center">
          </el-table-column>
          <el-table-column prop="shi" label="几室几厅" width="120" align="center">
          </el-table-column>
          <el-table-column prop="lou" label="楼层索引(房屋编号)" width="150" align="center">
          </el-table-column>
          <el-table-column prop="zhuang" label="装修" width="120" align="center">
          </el-table-column>
          <el-table-column prop="fang" label="房屋类型" width="140" align="center">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template>
              <el-button type="text" >修改</el-button>
              <el-button type="text" >删除</el-button>
              <el-button type="text" >详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="box6">
        <div class="block" style="margin-top: 10px">
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
      <div>
        <el-dialog
          title="添加房屋"
          :visible.sync="dialogFormVisible"
          width="450px"
        >
          <el-form :model="form">
            <el-form-item label="房产类型:" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="运动管理员" value="shanghai"></el-option>
                <el-option label="社区管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="几室几厅:" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="运动管理员" value="shanghai"></el-option>
                <el-option label="社区管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <p style="margin-left: 75px; padding-bottom: 10px">
              面积:<el-input
                v-model="input"
                placeholder="请输入内容"
                class="changdu"
              ></el-input>
            </p>
            <el-form-item label="房屋编号:" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="运动管理员" value="shanghai"></el-option>
                <el-option label="社区管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <p style="margin-left: 75px; padding-bottom: 10px">
              面积:<el-input
                v-model="input"
                placeholder="请输入内容"
                class="changdu"
              ></el-input>
            </p>
            <el-form-item label="装修:" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="运动管理员" value="shanghai"></el-option>
                <el-option label="社区管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋类型:" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="运动管理员" value="shanghai"></el-option>
                <el-option label="社区管理员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <span style="margin-left:47px">房屋备注:</span><el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="textarea2"
             class="changdu">
            </el-input>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Fangwxx",
  components: {
      Center
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },

      tableData: [
        {
          date: "1",
          name: "二手房",
          province: "A区",
          mianji: "98/平米",
          shi: "2室2厅",
          lou: "1栋101室",
          zhuang: "毛坯",
          fang: "商品房",
        },
        {
          date: "2",
          name: "二手房",
          province: "A区",
          mianji: "98/平米",
          shi: "2室2厅",
          lou: "1栋101室",
          zhuang: "毛坯",
          fang: "商品房",
        },
        {
          date: "3",
          name: "二手房",
          province: "A区",
          mianji: "98/平米",
          shi: "2室2厅",
          lou: "1栋101室",
          zhuang: "毛坯",
          fang: "商品房",
        },
        {
          date: "4",
          name: "二手房",
          province: "A区",
          mianji: "98/平米",
          shi: "2室2厅",
          lou: "1栋101室",
          zhuang: "毛坯",
          fang: "商品房",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.changdu {
  width: 200px;
  margin-left: 15px;
}
.chang {
  width: 200px;
  margin-left: 15px;
}

.box1 {
  width: 80%;
  height: 500px;
  border: 1px solid #dfdff9;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.box2 {
  margin-left: 20px;
  margin-top: 30px;
  width: 150px;
}
.box3 {
  border: 1px solid #bfc0c0;
  height: 25px;
  width: 220px;
  border-radius: 4px;
  margin-left: 30px;
}
.box4 {
  background-color: #b6a4fe;
  color: #fff;
  padding: 9px 35px;
  border-radius: 8px;
  margin-left: 20px;
}
.box5 {
  margin-top: 30px;
  margin-left: 30px;
}
.bo5 table {
  text-align: center !important;
}
.box6 {
  width: 100%;
  text-align: center;
  margin-top: 54px;
  height: 50px;
  border: 1px solid #dfdff9;
  border-right: 0px;
  border-left: 0px;
}
</style>