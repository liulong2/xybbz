<template>
    <div class="internal">
        <a-tabs default-active-key="1" @change="callback" size="default" :tab-bar-gutter="30">
            <a-tab-pane key="1" class="">
                <template slot="tab">
                    <p class="pSize">追番进度</p>
                </template>
                <vue-scroll :ops="ops" style="width:100%;height:100%">
                    <p class="contentBulletin" v-html="bulletin"></p>
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
    </div>
</template>

<script>
    import {getLatest} from '@/api/bulletin/api'
    export default {
        name: "OneTabs",
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
                        onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
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
                getLatest().then(res =>{
                    this.bulletin = res.data.data.bulletinContent
                }).catch(error =>{

                })
            }
        },
        created() {
            this.initData()
        }
    }
</script>

<style scoped>
.internal{
    padding: 20px;
    width: 100%;
    height: 100%;
    /*background-color: #555454;*/
    background: rgba(229, 229, 230, 0.7);
    /*opacity: .4;*/
}
    .pSize{
        font-weight: bolder;
        font-size: 15px;
       /* word-wrap: break-word;
        word-break: break-all;*/
        /*color: black;*/
        /*opacity: 1.2;*/
    }
    .contentBulletin {
        /*display: flex;*/
        /*height: 100%;*/
        /*width: 280px;*/
        /*height: 100%;*/
        /*width: 100%;*/
        height: 130px;
        /*border: 1px solid red;*/
        /*overflow: hidden;*/
        text-overflow:ellipsis;
        /*white-space: nowrap;*/
    }
</style>