<template>
    <div class="myOneTabs">
        <clock></clock>
        <!--        <div class="internal">-->
        <a-tabs default-active-key="1" @change="callback" size="default" :tab-bar-gutter="30">
            <a-tab-pane key="1" class="">
                <template slot="tab">
                    <p class="pSize">追番进度</p>
                </template>
                <vue-scroll :ops="ops" style="width:100%;" :style="{height: scrollHeight}">
                    <!--        class="contentBulletin"                 <p class="contentBulletin" v-html="bulletin"></p>-->
                    <div id="scrollJd" v-html="bulletin">
                    </div>
                </vue-scroll>

            </a-tab-pane>
            <a-tab-pane key="2" force-render>
                <template slot="tab">
                    <p class="pSize">最新观看</p>
                </template>
                <vue-scroll :ops="ops" style="width:100%;height:100%">
                    <p class="contentBulletin" v-html="bulletin"></p>
                </vue-scroll>
            </a-tab-pane>
            <a-button slot="tabBarExtraContent">
                查看更多
            </a-button>
        </a-tabs>
        <!--        </div>-->

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
                scrollHeight: '',
                bulletin: '',
                ops: {
                    vuescroll: {
                    },
                    scrollPanel: {
                        bouncing: false,
                    },
                    rail: {
                        keepShow: false
                    },
                    bar: {
                        hoverStyle: true,
                        onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
                        background: "#000000",//滚动条颜色
                        opacity: .9,//滚动条透明度
                        size: '6px',
                        "overflow-x": "hidden"
                    }
                }
            };
        },
        methods: {
            getScrollStyle() {
                // window.getComputedStyle(this.$refs.scrollStyle).height
                const elementsByClassName = window.document.getElementById('scrollJd');
                console.log();
                const height = Number.parseInt(window.getComputedStyle(elementsByClassName)
                    .height.replace('px',''));
                console.log(height);
                let count = 0.0;
                if (height <= 1176) {
                    count = 0.07
                }
                if (height <= 1050) {
                    count = 0.08
                }
                if (height <= 903) {
                    count = 0.09
                }
                if (height <= 819) {
                    count = 0.1
                }
                if (height <= 672) {
                    count = 0.11
                }
                if (height <= 609) {
                    count = 0.12
                }
                if (height <= 567) {
                    count = 0.13
                }
                if(height <= 525) {
                    count = 0.16
                }
                if (height <= 378) {
                    count = 0.23
                }
                if (height <= 336) {
                    count = 0.25
                }
                if (height >= 2016) {
                    count = 0.04
                }
                if (height >= 2331) {
                    count = 0.03
                }

                console.log(count);
                this.scrollHeight = (Number.parseInt((((380 * 0.8) / height) - count) * 100 + '') === 0 ? (100)
                    : Number.parseInt((((380 * 0.8) / height) - count) * 100 + ''))  + "%";
            },
            callback(key) {
                console.log(key);
            },
            initData() {
                getLatest().then(res => {
                    this.bulletin = res.data.data.bulletinContent
                }).catch(error => {

                })
            }
        },
        mounted() {
            this.getScrollStyle();
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
        float: top;
        height: 100%;
        /*max-height: 380px;*/
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
