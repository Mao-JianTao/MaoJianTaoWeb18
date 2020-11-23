<template>
  <div id="app">
    <Center title="房屋分类统计"></Center>
    <div class="center-box2">
      <div class="center">
        <p>
          <img src="../assets/z2.png" /><span style="font-size: 30px">1000</span
          ><br />毛坯数
        </p>
        <p>
          <img src="../assets/z3.png" style="margin-top: 10px" /><span
            style="font-size: 30px"
            >500</span
          ><br />精装数
        </p>
        <p>
          <img src="../assets/z4.png" style="margin-top: 10px" /><span
            style="font-size: 30px"
            >100</span
          ><br />豪华精装数
        </p>
        <p>
          <img src="../assets/z5.png" /><span style="font-size: 30px">100</span
          ><br />入住数
        </p>
      </div>
      <div class="center1">
        <select style="width:200px;float:right;margin-right:70px;height:30px;font-size:15px">
          <option value="volvo">所有年份</option>
          <option value="saab">2001</option>
          <option value="opel">2002</option>
          <option value="audi">2003</option>
        </select>
      </div>
      <div class="center2">
          <img src="../assets/z1.png" width="100%">
      </div>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Fangwfl",
  components: {
Center
  },
};
</script>
<style scoped>

.center-box2 {
  float: left;
  width: 80%;
  height: 700px;
  border: 1px solid #e0dfdf;
  margin-left: 10px;
  margin-top: 20px;
}
.center {
  height: 200px;
}
.center p {
  float: left;
  width: 250px;
  border: 1px solid;
  height: 90px;
  border-radius: 10px;
  margin-left: 40px;
  margin-top: 40px;
}
.center p img {
  float: left;
  margin-left: 10px;
  margin-right: 40px;
}
.center2{
    clear: both;
    text-align: center;
    padding: 30px;
}
</style>