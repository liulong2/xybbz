<template>
    <div class="myOneTabs">
        <clock></clock>
<!--        <div class="internal">-->
            <a-tabs default-active-key="1" @change="callback" size="default" :tab-bar-gutter="30">
                <a-tab-pane key="1" class="">
                    <template slot="tab">
                        <p class="pSize">追番进度</p>
                    </template>

                        <!--                        <p class="contentBulletin" v-html="bulletin"></p>-->
<!--                    <vue-scroll :ops="ops" style="width:100%;height:30%">-->
                        <p class="contentBulletin"># elsearch

                            下载地址

                            ```
                            http://tomcat01.qfjava.cn:81
                            ```
                            啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
                                <br><br><br>111111111111111111111111111<br><br>11111111111111111111111111<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                        </p>
<!--                    </vue-scroll>-->

                </a-tab-pane>
                <a-tab-pane key="2" force-render>
                    <template slot="tab">
                        <p class="pSize">最新观看</p>
                    </template>
                    <vue-scroll :ops="ops" style="width:100%;height:100%">
<!--                        v-html="bulletin"-->
                        <p class="contentBulletin" ></p>
                    </vue-scroll>
                </a-tab-pane>
                <a-button slot="tabBarExtraContent">
                    查看更多
                </a-button>
            </a-tabs>
<!--        </div>-->
        <div style="height: 100%">;allllllllllllllllll</div>
    </div>

</template>

<script>
    import {getLatest} from '@/api/bulletin/api'
    import Clock from "@/components/clock/Clock";

    export default {
        name: "OneTabs",
        components: {Clock},
        data() {
            return {
                bulletin: '',
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {
                        keepShow: true
                    },
                    bar: {
                        hoverStyle: true,
                        onlyShowBarOnScroll: true, //是否只有滚动的时候才显示滚动条
                        background: "#F5F5F5",//滚动条颜色
                        opacity: .9,//滚动条透明度
                        "overflow-x": "hidden"
                    }
                }
            };
        },
        methods: {
            callback(key) {
                console.log(key);
            },
            initData() {
               /* getLatest().then(res => {
                    this.bulletin = res.data.data.bulletinContent
                }).catch(error => {

                })*/
            }
        },
        created() {
            this.initData()
        }
    }
</script>

<style scoped>
    .ant-tabs {
        padding: 10px;
        width: 100%;
        height: 80%;
        background: linear-gradient(to left, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .3) 100%);
    }

    .pSize {
        font-weight: bolder;
        font-size: 15px;
    }

    .myOneTabs {
        height: 100%;
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*justify-content: flex-end;*/
        /*flex-direction: column;*/
        width: 50%;
        /*height: 100%;*/
    }

    .contentBulletin {
        width: 100%;
        /*height: 169px;*/
        /*height: 209px;*/
        height: 100%;
        /*overflow: hidden;*/
        /*align-items: start;*/
        /*text-overflow: ellipsis;*/
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1920px) {
        .myOneTabs{
            width: 100%;
        }
    }
</style>
