<template>
    <div id="app">
<!--        <a-config-provider :locale="locale">-->

            <top-div></top-div>
            <!--        <keep-alive>-->
            <!--        <vue-scroll :ops="ops" style="height: 100%; width: 100%">-->
            <router-view v-if="isRouterAlive"></router-view>
            <!--        </keep-alive>-->
            <my-botton @click="thiClick"></my-botton>
<!--        </a-config-provider>-->
        <!--        </vue-scroll>-->

    </div>
</template>

<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
    import TopDiv from "@/components/tops/TopDiv";
    import MyBotton from "@/components/bottom/MyBotton";

    export default {
        name: 'App',
        components: {
            TopDiv,
            MyBotton
        },
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                locale: zhCN,
                isDisplay: true,
                isRouterAlive: true
            }
        },
        methods: {
            thiClick() {
                this.$route.path
            },
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        },
        watch: {
            /*$route(to, from) {
                if (to.path !== '/mylogin') {

                }
                console.log(to.path)
                console.log(from.path)
            }*/
        }
    }
</script>

<style>
    @import url("/src/static/css/fontawesome-free@5.12.0/brands.min.css");

    #app {
        height: 100%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        font-family: "Font Awesome 5 Brands", monospace !important;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {


        margin: 0;
        background-size: cover;
        background-color: #e2e2e2 !important;
        /*background-color: #ffffff !important;*/
        /*background-image: url("./static/images/sqy/sqy.jpg");*/
        /*background-position: 0 -145px*/
    }
</style>
