<template>
    <!--            此处的maxHeight非常重要,关系到 one-tabs的高度-->

    <div>
            <top-div></top-div>
        <vue-scroll :ops="ops" style="height: 100%; width: 100%">
<!--            <div style="height: 100%; width: 100%">-->
                <div class="myindex">
                    <my-home class="layOut-home"></my-home>
                    <one-tabs class="newTabs"/>
                </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<!--            </div>-->
        </vue-scroll>
    </div>


</template>

<script>
    import OneTabs from "../tabs/OneTabs";
    import MyHome from "../../views/xybbz/MyHome/MyHome";
    import TopDiv from "../tops/TopDiv";

    export default {
        name: "MyLayOut",
        components: {
            OneTabs,
            MyHome,
            TopDiv
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
        height: 100%;
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
 /*.newTabs{
     width: 100%;
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
