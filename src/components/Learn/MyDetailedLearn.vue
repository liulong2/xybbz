<template>
    <div class="detaile">
        <div class="detaileLeft">
            <div class="detaileTitleNew">
                <div>
                    <div >
                        <div style="color: #ccc;">首页</div> > <a>标签</a>
                    </div>
                    <div class="detaileTitle" >
                        <!--                    <div class="detaileTitleChilden">-->
                        <div>
                            <h1>
                                <strong>{{detailedData.blogTitle}}</strong>
                            </h1>
                        </div>
                        <div class="titleBottom" style="color: #ccc;">

                            {{detailedData.userName}} ·
                            {{getTime(detailedData.addTime)}}
                        </div>
                        <!--                    </div>-->
                    </div>
                </div>
                <a-avatar shape="square" :size="64" icon="user" :src="detailedData.userIcon" />
            </div>

            <a-divider/>
            <div class="detaileContent" v-html="detailedData.blogContext">

            </div>

            <!--            <div v-for=""></div>-->

        </div>
        <slot name="user"></slot>
    </div>
</template>

<script>
    import {getBlogDetailed} from '@/api/blog/api'
    import {isNull} from "@/utils/utils";

    export default {
        name: "MyDetailedLearn",
        data() {
            return {
                detailedData: {}
            }
        },
        created() {
            console.log(this.$route.query.key);
            this.getDetailed(this.$route.query.key)
            //获得接口
        },
        methods: {
            getDetailed(id) {
                getBlogDetailed(id).then(res => {
                    console.log(res);
                    this.detailedData = res.data.data
                }).catch(error => {
                    console.log(error);
                })
            },
            getTime(lastTime) {
                ////时间差的毫秒数
                const newTime = new Date()
                const timeDiffer = newTime.getTime() - new Date(lastTime).getTime();
                //计算相差天数
                const day = Math.floor(timeDiffer / (24 * 3600 * 1000))
                //计算天数后剩余毫秒数
                const surplus = timeDiffer % (24 * 3600 * 1000)
                //计算小时
                const hours = Math.floor(surplus / (3600 * 1000))
                //计算相差分钟数
                const minute = surplus % (3600 * 1000)        //计算小时数后剩余的毫秒数
                const minutes = Math.floor(minute / (60 * 1000))
                //计算相差秒数
                const second = minute % (60 * 1000)      //计算分钟数后剩余的毫秒数
                const seconds = Math.round(second / 1000)
                let desc = ""
                if (!isNull(day)) {
                    desc = desc + day + "天"
                }
                if (!isNull(hours)) {
                    desc = desc + hours + "小时"
                }
                if (!isNull(minutes)) {
                    desc = desc + minutes + "分钟"
                }
                if (isNull(day) && isNull(hours) && !isNull(seconds)) {
                    desc = desc + "几秒钟前"
                }
                return (desc + "前")


            },
        }
    }
</script>

<style scoped>
    .detaileContent {
        word-wrap:break-word;

        word-break:normal;
    }
    .titleBottom {
        font-size: 13px;
    }

    .detaileTitleNew {
        display: flex;
        justify-content: space-between;
    }

    .detaileTitle {
        border-radius: 4px;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        /*padding: 10px;*/
        /*align-items: center;*/
        height: auto;
    }

    .detaileTitle h1 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        margin: 0 0 10px;
        padding: 0;
    }

    .detaileLeft {
        padding: 10px;
        height: 10%;
        background-color: rgba(255, 255, 255, .6);
        width: 68%;
    }

    .detaile {

        min-height: 800px;
        display: flex;
        justify-content: space-between;
        height: auto;
        margin-right: auto;
        margin-left: auto;
        margin-top: 5%;
        width: 50%;
        /*background-color: rgba(255, 255, 255, .6);*/
    }
</style>