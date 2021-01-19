<template>
    <div id="app">
        <top-div></top-div>
        <!--    <keep-alive>-->
        <!--        <vue-scroll :ops="ops" style="height: 100%; width: 100%">-->
        <router-view></router-view>
        <my-botton @click="thiClick"></my-botton>
        <!--        </vue-scroll>-->
        <!--    </keep-alive>-->
    </div>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
    import TopDiv from "@/components/tops/TopDiv";
    import MyBotton from "@/components/botton/MyBotton";

    export default {
        name: 'App',
        components: {
            TopDiv,
            MyBotton
        },
        data() {
            return {
                locale: zhCN,
                isDisplay: true
            }
        },
        methods: {
            thiClick() {
                this.$route.path
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

    html, body {
        width: 100%;
        height: 100%;
    }
    body {
        margin: 0;
        background-size: cover;
        background-color: #ffffff !important;
        /*background-image: url("./static/images/sqy/sqy.jpg");*/
        background-position: 0 -145px
    }
</style>
