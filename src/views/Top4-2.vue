<template>
    <div id="app">
        <Center title="缴费分析系统"></Center>
        <div class="box1">
            <div class="box2">
                <p><img src="../assets/t1.png" width="50px"><span>1000<br>水费</span></p>
                <p><img src="../assets/t2.png" width="50px"><span>1000<br>电费</span></p>
                <p><img src="../assets/t3.png" width="50px"><span>1000<br>煤气费</span></p>
                <p><img src="../assets/t4.png" width="50px"><span>1000<br>宽带费</span></p>
                <p><img src="../assets/t5.png" width="50px"><span>1000<br>停车费</span></p>
                <p><img src="../assets/t6.png" width="50px"><span>1000<br>物业费</span></p>
            </div>
            <div class="box3">
                <img src="../assets/t7.png" width="97%">
                <img src="../assets/t8.png" width="97%">
            </div>
        </div>
    </div>
</template>
<script>
import Center from '../components/Center'
export default {
    name:'Jiaoffx.vue',
    components:{
        Center
    }
}
</script>
<style scoped>
.box1{
    width: 80%;
    height: 1100px;
    border: 1px solid #e8e8ff;
    float: left;
    margin-left: 10px;
    margin-top: 20px;
}
.box2 p{
    float: left;
    width: 180px;
    height: 100px;
    border: 1px solid;
    border-radius: 10px;
    margin-left: 17px;
}
.box2 p>img{
    float: left;
    margin-top: 6px;
    margin-left: 10px;
}
.box2 p>span{
    font-size: 25px;
    margin-left: 20px;
    margin-top: 10px;
    float: left;
}
.box3 img{
    margin-left: 17px;
    margin-top: 10px;
}
</style>