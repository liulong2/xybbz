<template>
    <!--            此处的maxHeight非常重要,关系到 one-tabs的高度-->

    <div>
            <top-div></top-div>
        <vue-scroll :ops="ops" style="height: 100%; width: 100%">
                <div class="myindex">
                    <my-home class="layOut-home"></my-home>
                    <one-tabs class="newTabs"/>
                    <my-weather></my-weather>
                </div>
            <my-back-top></my-back-top>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </vue-scroll>
    </div>


</template>

<script>
    import OneTabs from "../tabs/OneTabs";
    import MyHome from "../../views/xybbz/MyHome/MySwiper";
    import TopDiv from "../tops/TopDiv";
    import MyWeather from "@/views/xybbz/MyWeather/MyWeather";
    import MyBackTop from "@/components/backTop/MyBackTop";

    export default {
        name: "MyLayOut",
        components: {
            OneTabs,
            MyHome,
            TopDiv,
            MyWeather,
            MyBackTop
        },
        data() {
            return {
                // basePath: '/components/breadcrumb',
                breadlist: [], //路由集合,
                ops: {
                    vuescroll: {
                    },
                    scrollPanel: {

                    },
                    rail: {
                        keepShow: true
                    },
                    bar: {
                        keepShow: false,
                        hoverStyle: true,
                        onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
                        background: "#F5F5F5",//滚动条颜色
                        opacity: .9,//滚动条透明度
                        "overflow-x": "hidden"
                    }
                }
            }
        },
        created() {
        },
        methods: {
            mosuseWheel() {

            }
        },
        watch: {
        }
    }
</script>

<style scoped>

    .myindex {
        display: flex;
        justify-content: center;
        align-items: stretch;
        width: 40%;
        height: 380px;
        /*height: 380px;*/
        margin-top: 19.5%;
        margin-right: auto;
        margin-left: auto;
        /*background: rgba(255, 255, 255, 0.2);*/
        z-index: 1024;
    }

    #components-layout-demo-top {
        width: 100%;
        height: 100%;

    }

    /*.newTabs {
        !*width: 100%;*!
        height: 380px;
    }*/

    @media (max-width: 1920px) {
        .myindex {
            width: 56%;
        }
    }

</style>
<style>
    .__view{
        width: 100% !important;
    }
</style>
