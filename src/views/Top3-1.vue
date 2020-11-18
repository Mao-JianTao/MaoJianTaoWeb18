<template>
  <div id="app">
    <div class="app-right">
      <Center title="停车" class="center"></Center>
      <div class="app1">
         <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-1.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>5</span> <br />
            <span>停车场数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-2.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>1000</span> <br />
            <span>总车位数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-3.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>999</span> <br />
            <span>场内车辆数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-4.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>55</span> <br />
            <span>今日停车数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-5.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>1000</span> <br />
            <span>今日入数</span>
          </p>
        </div>
        <div class="cent-cent1">
          <p class="cent-cent1-img">
            <img src="../../public/img/top3-6.png" alt="" />
          </p>
          <p class="cent-cent1-text">
            <span>1000</span> <br />
            <span>月卡数</span>
          </p>
        </div>
      </div>

      <div class="app2">
        <div class="app2-1">
          <div class="app2-1-text">
            <p>收入对比</p>
            <p>
              <label><input type="checkbox" value="按日" />按日</label>
              <label><input type="checkbox" value="按周" />按周</label>
              <label><input type="checkbox" value="按月" />按月</label>
            </p>
          </div>
          <div class="app2-1-img">
            <p>
              <img
                src="../../public/img/top3-ti.png"
                width="100%"
                height="330px"
                alt=""
              />
            </p>
          </div>
        </div>

        <div class="app2-2">
          <div class="app2-1-text">
            <p>车辆监控</p>
          </div>
          <div class="app2-1-img">
            <p>
              <img src="../../public/img/top3-ti2.png" width="100%" alt="" />
            </p>
          </div>
        </div>

        <div class="app2-1">
          <div class="app2-1-text">
            <p>免费/异常抬杠</p>
            <p>
              <label><input type="checkbox" value="按日" />按日</label>
              <label><input type="checkbox" value="按周" />按周</label>
              <label><input type="checkbox" value="按月" />按月</label>
            </p>
          </div>
          <div class="app2-1-img">
            <p>
              <img
                src="../../public/img/top3-ti3.png"
                width="100%"
                height="330px"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>

      <div class="app2">
        <div class="app2-1">
          <div class="app2-1-text">
            <p>车辆出入场情况</p>
          </div>
          <div class="app2-1-img">
            <p>
              <img
                src="../../public/img/top3-ti4.png"
                width="100%"
                height="330px"
                alt=""
              />
            </p>
          </div>
        </div>

        <div class="app2-2">
          <div class="app2-1-text">
            <p>车辆停靠点</p>
          </div>
          <div class="app2-1-img">
            <p>
              <img src="../../public/img/top3-ti5.png" width="100%" alt="" />
            </p>
          </div>
        </div>

        <div class="app2-1">
          <div class="app2-1-text">
            <p>免费/异常抬杠</p>
            <p>
              <label><input type="checkbox" value="按日" />按日</label>
              <label><input type="checkbox" value="按周" />按周</label>
              <label><input type="checkbox" value="按月" />按月</label>
            </p>
          </div>
          <div class="app2-1-img">
            <p>
              <img
                src="../../public/img/top3-ti6.png"
                width="100%"
                height="330px"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-right {
  float: right;
  width: 80%;
  height: 950px;
  margin-top: 20px;
  border: 1px solid rgba(175, 175, 175, 0.582);
}
.center {
  margin: 0px;
}
.app1 {
  margin-top: 50px;
  height: 100px;
}
.cent-cent1{
  margin-top: 10px;
  width: 190px;
  height: 80px;
  float: left;
  margin-left: 8px;
}
.cent-cent1-img {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
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
.app2 {
  width: 98%;
  height: 380px;
  margin-left: 12px;
  margin-top: 10px;
}
.app2-1 {
  float: left;
  width: 280px;
  margin: 0px 3px;
  height: 380px;
  border: 1px solid rgba(175, 175, 175, 0.582);
  margin-top: 5px;
}
.app2-1-text {
  height: 30px;
  border-bottom: 1px solid rgba(175, 175, 175, 0.582);
}
.app2-1-text p {
  line-height: 10px;
  font-size: 12px;
}
.app2-1-text p:nth-of-type(1) {
  float: left;
  margin-left: 5px;
}
.app2-1-text p:nth-of-type(2) {
  margin-top: 5px;
  float: right;
  margin-right: 5px;
}
.app2-2 {
  float: left;
  width: 580px;
  margin: 0px 3px;
  height: 380px;
  border: 1px solid rgba(175, 175, 175, 0.582);
  margin-top: 5px;
}
</style>


<script>
import Center from "../components/Center";
export default {
  name: "Top3-1",
  components: {
    Center,
  },
};
</script>