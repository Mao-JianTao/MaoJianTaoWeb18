<template>
  <div id="app">
    <div class="img">
      <img src="../../public/img/bg.png" alt="" width="100%" height="749px" />
    </div>
    <h2>XXX智慧社区管理系统</h2>
    <div class="deng">
      <div class="deng-left">
        <img src="../../public/img/deng.png" alt="" width="100%" />
      </div>
      <div class="deng-right">
        <p>
          <el-input
            class="input1"
            v-model="name"
            placeholder="请输入用户名"
          ></el-input>
        </p>
        <p>
          <el-input
            placeholder="请输入密码"
            v-model="pass"
            show-password
          ></el-input>
        </p>
        <p><el-checkbox v-model="checked">记住密码</el-checkbox></p>
        <p><el-button type="primary" @click="butt" round size="medium" >登录</el-button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dengLu",
  data() {
    return {
      name: "",
      pass: "",
      radio: 3,
    };
  },
  methods: {
    butt() {
      if (this.name == "" || this.pass == "") {
        this.$message({
          message: "请输入账号和密码",
          type: "warning",
        });
      } else if (this.name == "admin" && this.pass == "123456") {
        this.$router.push({
            path:'/main',
        })
      } else {
        this.$message({
          message: "账号或密码错误",
          type: "warning",
        })
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
}
.img {
  position: relative;
}
h2 {
  position: absolute;
  top: 20%;
  left: 42%;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
}
.deng {
  position: absolute;
  width: 550px;
  height: 250px;
  border-radius: 5px;
  top: 26%;
  left: 32%;
  background: white;
}
.deng-left {
  float: left;
  width: 200px;
  height: 250px;
  overflow: hidden;
  border-right: 1px solid #1978ca;
}
.deng-left img {
  margin-top: 15%;
}
.deng-right {
  float: right;
}
.deng-right p:nth-of-type(1) {
  margin-top: 40px;
  margin-right: 100px;
  box-shadow: 1px 1px 3px 1px #a3a2a2;
}
.deng-right p:nth-of-type(2) {
  margin-top: 20px;
  margin-right: 100px;
  box-shadow: 1px 1px 3px 1px #a3a2a2;
}
.deng-right p:nth-of-type(3) {
  float: right;
  margin-right: 100px;
  margin-top: 10px;
}
.deng-right p:nth-of-type(4) {
  float: left;
  margin-left: 50px;
  margin-top: 30px;
}
</style>


