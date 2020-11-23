<template>
    <div id="app">
        <Center title="智能开门"></Center>
        <div class="box1">
             <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="height:800px">
                <el-tab-pane label="开门统计" name="first">
                    <img src="../assets/t9.png" width="95%">
                </el-tab-pane>
                <el-tab-pane label="开门记录" name="second">
                    <div class="center-box1">
                         <span class="demonstration" style="margin-right:20px;margin-left:50px">开始日期:</span>
                            <el-date-picker v-model="value1" size="mini" type="date" placeholder="年/月/日" style="width:200px">
                            </el-date-picker>
                            <span class="demonstration" style="margin-right:20px;margin-left:50px">结束日期:</span>
                            <el-date-picker v-model="value2" size="mini" type="date" placeholder="年/月/日" style="width:200px">
                            </el-date-picker>
                            <el-date-picker v-model="value3" size="mini" type="date" placeholder="年/月/日" style="margin-left:30px;width:200px">
                            </el-date-picker>
                            <span class="center-box2">查询</span>
                    </div>
                    <div class="center-box3">
                        <span>抓拍图片</span>
                        <span>卡号</span>
                        <span>刷卡事件</span>
                        <span>设备名称</span>
                        <span>设备号</span>
                        <span>进出动作</span>
                        <span>验证方式</span>
                        <span>持卡人</span>
                        <span>房屋号</span>
                        <span>所在楼栋</span>
                    </div>
                    <div class="center-box4">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="center-box5 block">
                             <el-pagination style="margin-top:20px"
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
import Center from '../components/Center'
export default {
    name:"Zhinkm",
    components:{
        Center
    },
    data() {
      return {
        activeName: 'first',
         value1: '',
        value2: '',value3: '',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
.box1{
    float: left;
    margin-left: 10px;
    margin-top: 8px;
    border: 1px solid #d4d4ff;
    width: 80%;
    height: 710px;
}
.center-box2{
    padding: 10px 30px;
    background-color: #b6a4fe;
    color: #fff;
    margin-left: 50px;
}
.center-box3{
    margin-top: 50px;
}
.center-box3 span{
    width:115px;
    height: 60px;
    font-weight: 900;
    text-align: center;
    line-height: 60px;
    color: #fff;
    background-color: #c0c0ff;
    border-right: 1px solid #fff;
    float: left;
    font-size: 18px;
}
.center-box3>span:nth-of-type(10){
    border-right: 1px solid #c0c0ff;
}
.center-box4 span{
    width: 114px;
    height: 60px;
    font-weight: 900;
    text-align: center;
    line-height: 60px;
    color: #fff;
    border: 1px solid #c0c0ff;
    float: left;
    font-size: 18px;
}
.center-box5{
    text-align: center;
    clear: both;
    height: 70px;
    width: 100%;
    border: 1px solid #c0c0ff;
    float: left;
    margin-top: 196px;
}
#app{
    height: 500px;
}
</style>