<template>
    <div id="app">
        <Center title="预约挂号"></Center>
        <div class="cent">
            <div class="cent1-top">
                    <div class="button">
                        <router-link to="top2-1-1"><el-button size="mini" type="primary">返回</el-button></router-link>
                    </div>
                <div class="cent1-top2">
                    <p>
                        类型：
                        <el-radio v-model="radio" label="1">全部医院</el-radio>
                        <el-radio v-model="radio" label="2">省级医院</el-radio>
                         <el-radio v-model="radio" label="3">市级医院</el-radio>
                        <el-radio v-model="radio" label="4">专科医院</el-radio>
                         <el-radio v-model="radio" label="5">重点医院</el-radio>
                    </p>
                </div>
                <div class="cent1-top3">
                   <p><el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></p>
                   <p><el-button size="mini" type="primary">主要按钮</el-button></p>
                </div>
            </div>
            <div class="cent1-cent">
                <div class="cent1-cent1">
                    <p>佑姆塘社区医院</p>
                </div>
                <div class="cent1-cent1">
                    <router-link to="/top2-1-3" tag="p">湘雅一医院</router-link>
                </div>
                <div class="cent1-cent1">
                    <p>长沙光大医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>长沙爱尔眼科</p>
                </div>
                <div class="cent1-cent1">
                    <p>湖南省中医附属医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>岳麓区人民医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>佑姆塘社区医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>湘雅一医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>长沙光大医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>长沙爱尔眼科</p>
                </div>
                <div class="cent1-cent1">
                    <p>湖南省中医附属医院</p>
                </div>
                <div class="cent1-cent1">
                    <p>岳麓区人民医院</p>
                </div>
            </div>

            <div class="cent-bot">
                <div class="cent-bot1">
                    <p>总记录数:100/条</p>
                    <p>页数:1/9</p>
                    <p>每页:12/条</p>
                </div>
                <div class="cent-bot2">
                    <el-pagination background layout=" pager, next" :total="50"></el-pagination>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import Center from '../components/Center'
export default {
    name:'Top2-1',
    data() {
        return {
            radio: '1'
        }
    },
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
.cent1-top{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid  rgba(168, 168, 168, 0.548);
}
.button{
    float: left;
    margin-left: 20px;
}
.cent1-top2{
    float: left;
    line-height:30px;
    margin-left: 20px;
    color: #000000;
    font-size: 12px;
    font-weight: bold;
}
.cent1-top3{
    float: right;
    line-height: 10px;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
    color: rgb(76, 74, 184);
    cursor: pointer;
}
.cent1-top3 p{
    float: left;
}
.cent1-cent{
    height: 500px;
    border-bottom: 1px solid rebeccapurple;
    margin-top: 10px;
}
.cent1-cent1{ 
    cursor: pointer;
    float: left;
    width: 220px;
    height: 100px;
    border-radius: 10px;
    line-height: 70px;
    text-align: center;
    margin: 30px 26px;
    border: 1px solid rgb(151, 151, 151);
}
.cent-bot{
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid rgb(151, 151, 151);
}
.cent-bot p{
    float: left;
    font-size: 13px;
    margin: 0px 12px;
    font-weight: bold;
}
.cent-bot2{
    float: right;
    margin-top: 10px;
}
</style>