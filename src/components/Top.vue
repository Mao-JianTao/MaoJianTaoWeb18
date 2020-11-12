<template>
  <header id="app">
    <div class="top">
        <img src="../../public/img/logo.png" class="center1" height="80px" />
        <span class="center2" >XXXX智慧社区管理系统</span >
    </div>
    <div class="center3">
     <p> 
        <el-col :span="12">
            <el-dropdown trigger="click">
            <span class="el-dropdown-link"><i class="el-icon-user-solid"></i>
                admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <hr />
                <el-dropdown-item>个人资料</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      </p>
      <p>
        <el-col :span="12">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link"><i class="el-icon-question"></i>
            帮助<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>帮助文档</el-dropdown-item>
            <hr />
            <el-dropdown-item>关于系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <i class="el-icon-switch-button"></i>
      </p>
    </div>
  </header>
</template>
<script>
export default {
  name: "Top",
};
</script>
<style scoped>
.el-icon-switch-button{
    font-size: 33px;
    float: right;
    margin-top: -32px;
    cursor: pointer;
}
.el-icon-user-solid{
    font-size: 30px;
}
.el-icon-question{
    font-size: 30px;
}
#app{
  width: 100%;
  height: 100px;
  background: #623bfed1;
  color: #fff;
}
.top{
    float: left;
    margin-left: 18px;
}
.center1 {
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}
.center2 {
  float: left;
  font-size: 38px;
  font-weight: 900;
  margin-top: 25px;
  margin-left: 20px;
}
.center3 {
    margin-top: 20px;
    width: 400px;
    float: right;
    margin-right: 30px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 23px;
}
.el-icon-arrow-down {
  font-size: 20px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>