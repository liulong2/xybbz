<template>
    <div id="app">
        <top-div></top-div>
        <!--    <keep-alive>-->
        <router-view></router-view>
        <!--    </keep-alive>-->
    </div>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
    import TopDiv from "@/components/tops/TopDiv";

    export default {
        name: 'App',
        components: {
          TopDiv
        },
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
        background-color: white;
        /*background-image: url("./static/images/sqy/sqy.jpg");*/
        background-position:0 -145px
    }
</style>
