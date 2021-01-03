<template>
    <div id="layer">
        <a-layout id="components-layout-demo-top" class="layout">
            <a-layout-header>
                <div class="logo" >
                    <span id="title">
                        我是你爸爸
                    </span>
                </div>
                <a-menu
                        theme="dark"
                        mode="horizontal"
                        :default-selected-keys="['1']"
                        :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">
                        首页
                    </a-menu-item>
                    <a-menu-item key="2">
                        添加
                    </a-menu-item>
                    <a-menu-item key="3">
                        三方
                    </a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content id="layout-content" style="padding: 0 50px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item><a @click="isDisplayClick">Home</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a @click="isDisplayClick">Home</a></a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
<!--                    <generator v-if="isDisplay"></generator>-->
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                乱七八糟的网站
            </a-layout-footer>
        </a-layout>
    </div>
    
</template>

<script>
    import LogIn from "../../views/xybbz/user/LogIn";
    import Generator from "../../views/xybbz/generator/Generator";
    export default {
        name: "BottomLayer",
        components: {
            LogIn,
            Generator
        },
        data() {
            return {
                isDisplay: true
            }
        },
        methods: {
            isDisplayClick() {
                this.isDisplay = true
            },
            clickPath() {
                this.$router.push('/generator')
            }
        }
    }
</script>

<style scoped>
     .logo {
        width: 120px;
        height: 31px;
        /*background: rgba(255, 255, 255, 0.2);*/
        margin: 16px 24px 16px 0;
         top: 10px;
        float: left;
         text-align:center;
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
    #layer{
        width: 100%;
        height: 100%;
    }
    #title{
        color: white;
        position: fixed;
        top: 15px;
        left: 0;
        width: 216px;
        height: 69px;
    }
</style>