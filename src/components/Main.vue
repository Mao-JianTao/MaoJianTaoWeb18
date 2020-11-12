<template>
    <div id="app">
        <Top></Top>
        <Left></Left>
    <router-view></router-view>
    </div>
</template>
<script>
import Top from './Top'
import Left from './Left'
export default {
    components:{
        Top,
        Left,
    }
}
</script>