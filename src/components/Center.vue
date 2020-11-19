<template>
  <div class="center-box">
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
    name:"Center",
    props:{
        title:{
            type:String,
            default:'物业缴费'
        }
    }
}
</script>

<style scoped>
.center-box {
  width: 1100px;
  height: 30px;
  float: left;
  margin-left: 10px;
  margin-top: 21px;
  background: linear-gradient(90deg, #baa8fe, #ffffff);
  line-height: 30px;
  font-weight: 900;
  color: #ffffff;
  font-size: 12px;
  text-indent: 20px;
}
.qihun{
  

}

</style>