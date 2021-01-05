<template>
    <div id="app">
        <!--    <keep-alive>-->
        <router-view></router-view>
        <!--    </keep-alive>-->
    </div>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
    import LogIn from "./views/xybbz/user/LogIn";
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        name: 'App',
        data() {
            return {
                locale: zhCN,
                isDisplay: true
            }
        },
        created() {
            this.setDisplay
        },
        components: {
            LogIn
            // HelloWorld
        },
        methods: {
            updateNewApp() {
                // this.isDisplay = false
            }
        },
        computed: {
            ...mapGetters(['getIsDisplay']),
            ...mapActions(['setDisplay'])
        }
    }
</script>

<style>
    #app {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .logo {
        width: 120px;
        height: 31px;
        /*background: rgba(255, 255, 255, 0.2);*/
        margin: 16px 24px 16px 0;
        top: 10px;
        float: left;
        text-align: center;
        /*color: red;*/
        /*left: 10px;*/
        z-index: 1024;
    }

    #components-layout-demo-top {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
        z-index: 1024;
    }

    #layer {
        width: 100%;
        height: 100%;
    }

    #title {
        color: white;
        position: fixed;
        top: 15px;
        left: 0;
        width: 216px;
        height: 69px;
    }
</style>
