<template>
    <div id="app">
        <Center title="预约挂号"></Center>
        <div class="cent">
                <div class="cent1-1">
                   <router-link to="/top2-1-1" tag="p">快速预约</router-link>
                </div>
            <div class="cent1-1 cent1-2">
                <p>快速预约</p>
            </div>
            <div class="ma">
                <p><img src="../../public/img/ma.png" alt="" width="150px"> </p>
            </div>
            <div class="cent1-text">
                <p><span class="hong">温馨提示：</span> <span class="lv">预约完成后，预约结果将已社区公众号推送给您。如果您未关注公众号，则以短信方式发送到您的手机</span> </p>
            </div>
        </div>
        
    </div>
</template>


<script>
import Center from '../components/Center'
export default {
    name:'Top2-1',
    components:{
        Center
    }
}
</script>
<style scoped>
.cent{
    float: left;
    margin-left: 10px;
    margin-top: 20px;
    width: 1100px;
    height: 705px;
    border: 1px solid rgba(168, 168, 168, 0.548);
}
.cent1-1{
    float: left;
    width: 250px;
    height: 150px;
    text-align: center;
    line-height: 120px;
    border-radius: 5px;
    color: #ffffff;
    margin-left: 200px;
    margin-top: 100px;
    cursor: pointer;
    background: rgb(73, 224, 139);
}
.cent1-2{
    color: #000000;
    background: rgb(185, 185, 185);
}
.ma{
    margin-left: 480px;
    margin-top: 280px;
}
.cent1-text{
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
}
.hong{
    color: red;
}
.lv{
    color: #957BFE;
}
</style>