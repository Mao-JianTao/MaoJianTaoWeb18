<template>
  <div id="app">
    <Center title="物业缴费"></Center>
    <div class="center">
        <div class="center-top">
            <p class="wu">缴费类型</p>
        </div>
        <div class="center-top2">
           
        </div>
    </div>
    <div class="center-bom">
        
    </div>
    
    
  </div>
</template>

<script>
import Center from '../components/Center'
export default {
    name :"Wuye",
    components:{
        Center
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.center{
    width: 1100px;
    height: 50px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}
.wu{
    float: left;
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    font-size: 14px;
    background: rgb(96, 96, 255);
}
.center-top2{
    width: 900px;
    float: left;
    margin-left: 30px;
    border: 1px solid red;
}
.nav{
    float: left;
}
.nav li{
    list-style: none;
    float: left;
    padding: 0px 20px;
}
.center-bom {
  width: 1100px;
  height: 650px;
  border: 1px solid beige;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}

</style>