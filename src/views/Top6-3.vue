<template>
  <div id="app">
    <Center title="权限管理"></Center>
    <div class="box1">
      <div class="box2">
        <div>角色管理</div>
        <div>系统管理员</div>
        <div>社区管理员</div>
        <div>运维人员</div>
        <div>物业人员</div>
      </div>
      <table style="margin-left: 10px; margin-top: 10px; width: 1030px;float:left">
        <tr>
          <td width="100px"><input type="checkbox" /></td>
          <td width="150px">功能菜单</td>
          <td width="150px">二级菜单</td>
          <td width="150px">三级菜单</td>
          <td width="700px">操作功能</td>
        </tr>
        <tr>
          <td rowspan="4"><input type="checkbox" /></td>
          <td rowspan="4">智慧物业</td>
          <td><input type="checkbox"><span>物业缴费</span></td>
          <td>-</td>
          <td><p><input type="checkbox">水费</p><p><input type="checkbox">电费</p><p><input type="checkbox">停车费</p>
          <p><input type="checkbox">燃气费</p><br><p><input type="checkbox">固定宽带</p><p><input type="checkbox">有事电视</p>
          <p><input type="checkbox">物业费</p><p><input type="checkbox">查看历史账单</p></td>
        </tr>
        <tr>
            <td><input type="checkbox"><span>缴费查询</span></td><td>-</td><td>-</td>
        </tr>
        <tr>
            <td><input type="checkbox"><span>物业报修</span></td>
            <td>-</td>
            <td><p><input type="checkbox">公共报修</p><p><input type="checkbox">个人报修</p><p><input type="checkbox">查询</p>
            <p><input type="checkbox">查看详情</p></td>
        </tr>
        <tr>
            <td><input type="checkbox"><span>公告管理</span></td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p><br><p><input type="checkbox">详情</p></td>
        </tr>
        <tr>
            <td rowspan="4"><input type="checkbox"></td>
            <td rowspan="4">社区医疗</td>
            <td><input type="checkbox">预约挂号</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td><input type="checkbox">健康小贴士</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">发布</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">养生之道</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td><input type="checkbox">医生简介</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="5"><input type="checkbox"></td>
            <td rowspan="5">智能应用</td>
            <td rowspan="3"><input type="checkbox">停车</td>
            <td>车位录入</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">车辆管理</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p><br><p><input type="checkbox">详情</p></td>
        </tr>
        <tr>
            <td>停车记录</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">调用监控录像</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">开门</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">调用监控录像</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">家居</td>
            <td>-</td>
            <td><p><input type="checkbox">开门统计</p><p><input type="checkbox">开门记录</p></td>
        </tr>
        <tr>
            <td rowspan="2"><input type="checkbox"></td>
            <td rowspan="2">数据统计</td>
            <td><input type="checkbox">房屋分类统计</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td><input type="checkbox">缴费分析统计</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="3"><input type="checkbox"></td>
            <td rowspan="3">基本信息</td>
            <td><input type="checkbox">房屋信息</td>
            <td>-</td>
            <td></td>
        </tr>
        <tr>
            <td><input type="checkbox">人口信息</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">设备信息</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td rowspan="3"><input type="checkbox"></td>
            <td rowspan="3">系统管理</td>
            <td><input type="checkbox">用户管理</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">角色管理</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
        <tr>
            <td><input type="checkbox">角色管理</td>
            <td>-</td>
            <td><p><input type="checkbox">查询</p><p><input type="checkbox">添加</p><p><input type="checkbox">修改</p>
            <p><input type="checkbox">删除</p></td>
        </tr>
      </table>
      <div class="biao"></div>
      <div class="cen">
          <span>更新权限</span>
      </div>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Quanxgl",
  components: {
    Center
  },
};
</script>
<style scoped>
.cen{
    width: 100%;
    height: 70px;
    margin-top: 30px;
    border-top: 1px solid #b6a4fe;
    border-bottom: 1px solid #b6a4fe;
    float: left;
}
.cen span{
    float:right;
    padding:15px 50px;
    color: #fff;
    margin-right: 40px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: #169bd5;
}
td p{
    margin-left: 5px;
    float: left;
    width: 100px;
    height: 20px;
}
input{
    margin-left: 0px;
}
table {
    width: 200px;
    border-top: 1px solid #b6a4fe;
    border-left: 1px solid #b6a4fe;
    border-spacing: 0;/*去掉单元格间隙*/
     white-space : nowrap
}
table td {
    padding: 10px 30px;
    border-bottom: 1px solid #b6a4fe;
    border-right: 1px solid #b6a4fe;
    text-align: center;
}
table>tr:nth-of-type(1) td{
  background:#b6a4fe;
    border-right: 1px solid #fff;
  color: #fff;
  font-weight: 900;
}
table tr{
  height: 50px;
}
.box1 {
  width: 80%;
  height: 2160px;
  border: 1px solid #dfdff9;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.box2 {
  width: 150px;
  height: 900px;
  border: 1px solid #dedeff;
  font-size: 16px;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.box2 div {
  padding: 17px 0px;
  border: 1px solid #dedeff;
}
.box2 div:nth-of-type(1) {
  background-color: #bcabff;
  font-weight: 900;
  color: #fff;
}
.box2 div:nth-of-type(2) {
  background-color: #666699;
  color: #fff;
}
.biao {
  margin-left: 30px;
  float: left;
  margin-top: 10px;
}
.b {
  border: 1px solid #666699;
}
</style>