<template>
  <div id="app">
    <Center title="故障保修"></Center>
    <div class="cent">
      <div class="tab">
        <el-tabs type="border-card">
          <el-tab-pane label="公共报销（4|2）">
            <div class="tab1">
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
                  <el-select v-model="value" size="mini" placeholder="状态">
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
                    placeholder="请输入报修人姓名"
                  ></el-input>
                </div>

                <div class="butt">
                  <el-button size="mini" type="danger">查询</el-button>
                </div>
              </div>

              <div class="table">
                <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="date" label="序号" width="75" height="10" align="center"></el-table-column>
                  <el-table-column prop="time" label="报修时间" width="112" align="center"></el-table-column>
                  <el-table-column prop="di" label="报修位置" width="112" align="center"></el-table-column>
                  <el-table-column prop="nei" label="报修内容" width="112" align="center"></el-table-column>
                  <el-table-column prop="peo" label="报修人" width="96" align="center"></el-table-column>
                  <el-table-column prop="li" label="受理状态" width="112" align="center"></el-table-column>
                  <el-table-column prop="xiu" label="修复状态" width="112" align="center"></el-table-column>
                  <el-table-column prop="xiuTime" label="修复时间" width="112" align="center"></el-table-column>
                  <el-table-column prop="jie" label="解决人" width="112" align="center"></el-table-column>
                  <el-table-column prop="cao" label="操作" width="112" align="center"></el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="个人保修（4|2）">
            <div class="tab1">
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
                  <el-select v-model="value" size="mini" placeholder="状态">
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
                    placeholder="请输入报修人姓名"
                  ></el-input>
                </div>

                <div class="butt">
                  <el-button size="mini" type="danger">查询</el-button>
                </div>
              </div>

              <div class="table">
                <el-table :data="tableData2" border style="width: 100%">
                  <el-table-column prop="date2" label="序号" width="75" height="10" align="center"></el-table-column>
                  <el-table-column prop="time2" label="报修时间" width="112" align="center"></el-table-column>
                  <el-table-column prop="di2" label="报修位置" width="112" align="center"></el-table-column>
                  <el-table-column prop="nei2" label="报修内容" width="112" align="center"></el-table-column>
                  <el-table-column prop="peo2" label="报修人" width="96" align="center"></el-table-column>
                  <el-table-column prop="li2" label="受理状态" width="112" align="center"></el-table-column>
                  <el-table-column prop="xiu2" label="修复状态" width="112" align="center"></el-table-column>
                  <el-table-column prop="xiuTime2" label="修复时间" width="112" align="center"></el-table-column>
                  <el-table-column prop="jie2" label="解决人" width="112" align="center"></el-table-column>
                  <el-table-column prop="cao2" label="操作" width="112" align="center"></el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Center from "../components/Center";
export default {
  name: "Gu",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "已受理",
        },
        {
          value: "选项2",
          label: "等待受理",
        },
        {
          value: "选项3",
          label: "正在进行",
        },
        {
          value: "选项4",
          label: "已修复",
        },
        {
          value: "选项5",
          label: "等待修复",
        },
      ],
      
      tableData: [{
          date: '1',
          time: '2019-09-12 16:12:20',
          di: 'A区 地下停车场',
          nei:'吃屎卡住喉咙',
          peo:'李佳龙',
          li:'等待受理',
          xiu:'-',
          xiuTime:'-',
          jie:'许涛',
          cao:'查看详情'
        }, {
          date: '2',
          time: '2019-09-12 16:12:20',
          di: 'A区 地下停车场',
          nei:'马桶堵塞',
          peo:'汤麟',
          li:'已受理',
          xiu:'-',
          xiuTime:'-',
          jie:'许涛',
          cao:'查看详情'
        }, {
           date: '3',
          time: '2019-09-12 16:12:20',
          di: 'A区 地下停车场',
          nei:'上厕所没纸',
          peo:'王嘉怡',
          li:'等待受理',
          xiu:'-',
          xiuTime:'-',
          jie:'许涛',
          cao:'查看详情'
        }, {
          date: '4',
          time: '2019-09-12 16:12:20',
          di: 'A区 地下停车场',
          nei:'手机没电',
          peo:'胡凯',
          li:'等待受理',
          xiu:'-',
          xiuTime:'-',
          jie:'许涛',
          cao:'查看详情'
        }],
        tableData2:[{
          date2: '1',
          time2: '2019-09-12 16:12:20',
          di2: 'A区 一栋 1202',
          nei2:'吃屎卡住喉咙',
          peo2:'李佳龙',
          li2:'等待受理',
          xiu2:'-',
          xiuTime2:'-',
          jie2:'许涛',
          cao2:'查看详情'
        }],
      value: "",
      value1: "",
      value2: "",
      input:""
    };
  },
  components: {
    Center,
  },
};
</script>

<style scoped>
.cent {
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  width: 1100px;
  height: 705px;
  border: 1px solid red;
}
.time {
    height: 30px;
  font-size: 12px;
}
.time > div {
  float: left;
  margin-left: 10px;
}
.tab1{
    height: 500px;
}
.table{
    margin-top: 20px;
    font-size: 10px;
}
</style>