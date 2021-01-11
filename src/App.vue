<template>
    <div id="app">
        <!--    <keep-alive>-->
        <router-view></router-view>
        <!--    </keep-alive>-->
    </div>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';

    export default {
        name: 'App',
        data() {
            return {
                locale: zhCN,
                isDisplay: true
            }
        }
    }
</script>

<style>
    #app {
        height: 100%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    html,body{
        width: 100%;
        height: 100%;
    }
    body{
        margin: 0;
        background-size: cover;
        background-image: url("./static/images/user/login.png");
    }
</style>
