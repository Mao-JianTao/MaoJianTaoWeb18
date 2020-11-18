<template>
  <div id="cent-left">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/shou" tag="p"
            ><el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item></router-link
          >
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>智慧物业</span>
            </template>
            <el-menu-item-group>
              <router-link to="/wuye" tag="p"><el-menu-item index="2-1">物业缴费</el-menu-item></router-link>
              <router-link to="/yuyue" tag="p" ><el-menu-item index="2-2">缴费查询</el-menu-item></router-link>
              <router-link to="/gu" tag="p"><el-menu-item index="2-3">故障报修</el-menu-item></router-link>
              <router-link to="/gong" tag="p"><el-menu-item index="2-4">公告管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-first-aid-kit"></i>
              <span slot="title">社交医疗</span>
            </template>
            <el-menu-item-group>
              <router-link to="/top2-1" tag="p"><el-menu-item index="3-1">预约挂号</el-menu-item></router-link>
              <router-link to="/top2-2" tag="p"><el-menu-item index="3-2">健康小贴士</el-menu-item></router-link>
              <router-link to="/top2-3" tag="p"><el-menu-item index="3-3">医生简介</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">智能应用</span>
            </template>
            <el-menu-item-group>
              <p @mouseenter="zhi" @mouseleave="zhi1"><router-link to="/top3-1" tag="p" ><el-menu-item index="4-1">智能停车</el-menu-item></router-link></p>
              <el-menu-item index="4-2">智能开门</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">房屋分类统计</el-menu-item>
              <el-menu-item index="5-2">缴费分析系统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span slot="title">基本信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">房屋信息</el-menu-item>
              <el-menu-item index="6-2">人口信息</el-menu-item>
              <el-menu-item index="6-3">设备信息</el-menu-item>
              <el-menu-item index="6-4">电子地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              <span slot="title">系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">用户管理</el-menu-item>
              <el-menu-item index="6-2">角色管理</el-menu-item>
              <el-menu-item index="6-3">权限管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>

     <div class="zhi2" v-show="gg" @mouseenter="zhi3" @mouseleave="zhi4">
      <router-link to="/top3-1-1" tag="p">车位录入</router-link>
      <router-link to="/top3-1-2" tag="p">车辆管理</router-link>
      <p>停车记录</p>
    </div>
  </div>
</template>

<style scoped>
template{
  position: relative;
}
#cent-left {
  float: left;
  margin-left: 25px;
  width: 251px;
  margin-top: 20px;
  height: 755px;
  overflow-x: hidden;
  background: rgb(185, 109, 255);
}
.tac {
  width: 503px;
}
#cent-left::-webkit-scrollbar {
  width: 10px;
}
#cent-left::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgb(133, 133, 133);
  background: rgb(133, 133, 133);
}
#cent-left::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  border-radius: 0;
  background: rgb(109, 109, 109);
}

.zhi2{
  position: absolute;
  width: 100px;
  top: 383px;
  z-index: 1000;
  left: 284px;
  height: 150px;
  border: 1px solid rgba(131, 131, 131, 0.829);
  background: rgb(109, 109, 109);
}
.zhi2 p{
  cursor: pointer;
  text-align: center;
  line-height: 25px;
  height: 37px;
  font-size: 12px;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}
.zhi2 p:nth-of-type(3){
  border: none;
}
</style>
<script>
export default {
  name: "Left",
   data() {
    return {
      gg:false,

    }
  },
  methods: {
    zhi:function(){
      this.gg=true;
    },
     zhi1:function(){
      this.gg=false;
    },
    zhi3:function(){
      this.gg=true;
    },
     zhi4:function(){
      this.gg=false;
    },
  },
};
</script>