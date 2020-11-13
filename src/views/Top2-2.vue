<template>
  <div id="app">
    <center title="健康小贴士"></center>
    <div class="cent">
      <div class="cent-top">
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
        </div>

        <div class="an">
          <div class="butt">
            <el-button size="mini" type="danger">查询</el-button>
          </div>
          <div class="butt">
            <el-button size="mini" type="danger">发布小贴士</el-button>
          </div>
        </div>

        <div class="table">
        <el-table :data="tableData" border style="width: 98%">
          <el-table-column
            prop="time"
            label="发布日期"
            width="215"
             align="center"
          ></el-table-column>
          <el-table-column
            prop="biao"
            label="健康标题"
            width="215"
             align="center"
          ></el-table-column>
          <el-table-column
            prop="nei"
            label="健康内容"
            width="215"
             align="center"
          ></el-table-column>
          <el-table-column
            prop="bei"
            label="备注"
            width="215"
             align="center"
          ></el-table-column>
          <el-table-column
            prop="cao"
            label="操作"
            width="218"
            align="center"
          ></el-table-column>
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
.time {
  float: left;
  font-size: 12px;
  line-height: 60px;
}
.time > div {
  float: left;
  margin-left: 20px;
}
.an{
    float: right;
}
.an div{
    float: left;
    line-height: 60px;
    margin: 0px 20px;
    margin-right: 30px;
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
  name: "Top2-2",
  data() {
    return {
         tableData: [
        {
          time: "2016-05-03",
          biao:"标题1",
          nei:"内容1",
          bei:"xxx",
          cao:"修改  删除"
        },
        {
           time: "2016-05-03",
          biao:"标题1",
          nei:"内容1",
          bei:"xxx",
          cao:"修改  删除"
        },
        {
          time: "2016-05-03",
          biao:"标题1",
          nei:"内容1",
          bei:"xxx",
          cao:"修改  删除"
        },
        {
           time: "2016-05-03",
          biao:"标题1",
          nei:"内容1",
          bei:"xxx",
          cao:"修改  删除"
        },
      ],
      value: "",
      value2: "",
    };
  },
  components: {
    Center,
  },
};
</script>