<template>
  <div id="app">
    <div id="cent-right">
      <div class="cent-top">
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top1.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>200</span> <br />
            <span>楼宇数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top2.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>200</span> <br />
            <span>登记人口数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>200</span> <br />
            <span>智能设备数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top4.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>200</span> <br />
            <span>智能家居数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top5.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>200</span> <br />
            <span>预约挂号数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top6.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>100</span> <br />
            <span>系统报警数</span>
          </p>
        </div>
      </div>
      <div class="cent-cent2">
        <div class="cent-cent2-1">
          <p class="cent2-text">
            <span>房屋类比统计</span>
            <span>单位：个</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu1.png" alt="" width="100%">
          </p>
        </div>

        <div class="cent-cent2-2">
          <p class="cent2-text">
            <span>设备分布图</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu2.png" alt="" width="100%" height="318px">
          </p>
        </div>

         <div class="cent-cent2-3">
             <p class="cent2-text">
            <span>设备状态</span>
            <span>单位：个</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu3.png" alt="" width="100%">
          </p>
        </div>
      </div>

      <div class="cent-cent2">
        <div class="cent-cent2-1">
          <p class="cent2-text">
            <span>预约挂号统计</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu4.png" alt="" width="100%">
          </p>
        </div>
        
        <div class="cent-cent2-2">
          <p class="cent2-text">
            <span>设备分布图</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu5.png" alt="" width="100%" height="318px">
          </p>
        </div>

         <div class="cent-cent2-3">
             <p class="cent2-text">
            <span>设备状态</span>
            <span>单位：个</span>
          </p>
          <p class="cent2-img">
            <img src="../../public/img/tu6.png" alt="" width="100%">
          </p>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import Main from '../components/Main'
export default {
  name:'Shou',
   component:{
     Main
   },
  methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>


#cent-right {
  float: right;
  margin-top: 20px;
  width: 80%;
  height: 100vh;
  margin-right: 20px;
}
.cent-top {
  margin-left: 12px;
  width: 98%;
  height: 80px;
  border: 1px solid #727272;
}
.cent-cent1 {
  width: 190px;
  height: 80px;
  float: left;
  margin-left: 4  px;
}
.cent-cent1-img {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}
.cent-cent1-text {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.cent-cent1-text span:nth-of-type(1) {
  font-weight: bold;
  font-size: 30px;
  color: blue;
}

.cent-cent2{
  height: 360px;
  margin-left: 12px;
  width: 98%;
  margin-top: 10px;
}
.cent-cent2-1{
  float: left;
  width: 300px;
  height: 350px;
  border: 1px solid rgb(178, 88, 206);
  overflow: hidden;
}
.cent-cent2-2{
  float: left;
  margin-left: 7px;
  width: 550px;
  height: 350px;
  border: 1px solid rgb(178, 88, 206);
  overflow: hidden;
}
.cent-cent2-3{
  float: right;
  width: 300px;
  height: 350px;
  border: 1px solid rgb(178, 88, 206);
  overflow: hidden;
}
.cent2-text{
  line-height: 30px;
  font-size: 12px;
  height: 30px;
  border-bottom: 1px solid rgb(178, 88, 206);
}
.cent2-text span:nth-of-type(1){
  float: left;
  margin-left: 10px;
}
.cent2-text span:nth-of-type(2){
  float: right;
  margin-right: 10px;
}
</style>