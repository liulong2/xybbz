<template>
    <div class="learn">
        <div class="learnChild">
            <!--            :locale="{emptyText: '暂无数据'}"-->
            <!--            使用jsx修改 locale 属性-->
            <a-list item-layout="horizontal" :data-source="data" :bordered="true" :locale="{emptyText: createEmpty()}">
                <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                    <a-badge style="cursor:pointer;" slot="extra" v-if="item.replayContent !== 0"
                             :count="item.replayContent <10 ? 0 + '' + item.replayContent : item.replayContent"
                             @mouseleave="deleteAvatarClass(index)"
                             @mouseenter="updateAvatarClass(index)"
                             :number-style="index === isAvatar ?  mouseenterStyle : badgeStyle"/>
                    <a-list-item-meta>
                        <div slot="title" style="cursor:pointer;" :class="{titleClass: index === isTitle}"
                             @mouseleave="deleteTitleClass(index)"
                             @mouseenter="updateTitleClass(index)"
                             @click="clickTitle(item.id)">{{ item.blogTitle }}
                        </div>
                        <!--a-avatar 详细
                                slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />-->
                        <span slot="description" class="detailed">

                                <a-tag style="cursor:pointer;" color="#57575f">
                                    #f50
                                </a-tag>
                            <div style="cursor:pointer;" :class="{createClass: index === isCreate}"
                                 @mouseleave="deleteCreateClass(index)"
                                 @mouseenter="updateCreateClass(index)">
                                <strong>{{item.userName}}</strong>
                            </div>
                            •
                            <div style="color: #ccc;">{{getTime(item.createTime)}}</div>

                            <div v-if="(item.lastReply)" style="color: #ccc;">
                                •最后回复来自

                            </div>
                            <div :class="{replayClass: index === isReplay}" @mouseleave="deleteRewplayClass(index)"
                                 @mouseenter="updateReplayClass(index)" style="cursor:pointer;">
                                <strong>{{item.lastReply}}</strong>
                            </div>
                            <!--                           {{item.blogContext}}-->
                        </span>
                        <a-avatar style="cursor:pointer;" slot="avatar"
                                  shape="square" :size="64" @click="userClick" icon="user" :src="item.userIcon"/>

                    </a-list-item-meta>
                </a-list-item>
            </a-list>
            <div class="middle"></div>
            <i-page :current="current" :pageSize="pageSize" :total="total" @updateDate="updateDateNew"></i-page>

            <!--            <user-infor></user-infor>-->
        </div>
        <!--<a-pagination v-model="current" :page-size="pageSize" :total="total" @change="onChange" show-less-items
                      :hide-on-single-page="true"/>-->
        <slot name="user"></slot>

    </div>
</template>

<script>
    import {getSort} from "@/api/sort/api";
    import {getBlogPageType} from "@/api/blog/api";
    import global from "@/config/global";
    import {setLocalToken} from "@/utils/local";
    import {mapActions, mapGetters} from "vuex";
    import UserInfor from "@/views/xybbz/user/UserInfor";
    import {isNull} from "@/utils/utils";
    import IPage from "@/components/page/IPage";
    //学习
    export default {
        name: "MyLearn",
        data() {
            return {
                data: [],
                current: 1,
                pageSize: 20,
                total: 0,
                isCreate: '',
                isReplay: '',
                isTitle: '',
                isAvatar: '',
                badgeStyle: {
                    backgroundColor: '#aab0c6'
                },
                mouseenterStyle: {
                    backgroundColor: '#57575f'
                }

            };
        },
        components: {
            UserInfor,
            IPage
        },
        created() {
            this.setTopSwitch({
                iconHref: '#icon-xuexi',
                iconName: '学习',
                routerPath: '/learn'
            },)
            let context = this.getCurrents();
            let keyName = global.current;
            let type = false
            const enableObj = {keyName, context, type}
            setLocalToken(enableObj)

            this.getSortData()
        },
        methods: {
            ...mapGetters(['getCurrents']),
            ...mapActions(['setTopSwitch']),
            // jsx修改属性
            createEmpty() {
                return ( <a-empty description = {false}/>)
            },
            updateDateNew(val) {
                console.log(val)
                this.current = val
                this.getSortData()
            },
            deleteAvatarClass(val) {
                this.isAvatar = ''
            },
            updateAvatarClass(val) {
                this.isAvatar = val
            },
            updateTitleClass(val) {
                this.isTitle = val
            },
            deleteTitleClass(val) {
                this.isTitle = ''
            },
            deleteRewplayClass(val) {
                this.isReplay = ''
            },
            updateReplayClass(val) {
                this.isReplay = val
            },
            deleteCreateClass(val) {
                this.isCreate = ""
            },
            updateCreateClass(val) {
                this.isCreate = val
            },
            clickTitle(val) {
                this.$router.push({path: "/detailed", query: {key: val}})
                //跳转详细页
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
            onChange(current) {
                this.current = current;
                this.getSortData()
            },
            userClick() {
                // todo 点击跳转个人资料
            },
            getSortData() {
                getBlogPageType("learn_type", this.current, this.pageSize).then(res => {
                    this.total = res.data.data.total
                    this.data = res.data.data.records
                }).catch(error => {
                    this.$message.error("获取失败")
                })
            }
        }
    }
</script>

<style scoped>
    .middle{
        height: 20px;
    }
    .avatarClass {
        background-color: rgb(131, 135, 151) !important;
    }

    .titleClass {
        text-decoration: underline;
    }

    .replayClass {
        text-decoration: underline;
    }

    .createClass {
        text-decoration: underline;
    }

    .detailed {
        width: 100%;
        display: flex;
        font-size: 13px;
        /*color: #ccc;*/
    }

    .learn {
        display: flex;
        /*width: 100%;*/
        justify-content: space-between;
        min-height: 800px;
        margin-top: 5%;
        width: 50%;
        height: auto;
        margin-right: auto;
        margin-left: auto;
    }

    .learnChild {
        /*display: flex;*/
        width: 68%;
        /*justify-content: space-between;*/
    }

    .ant-pagination-item-link {
        display: block;
        height: 100%;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        outline: none;
        transition: all .3s;
    }

    .ant-list {
        /*width: 68%;*/
        background-color: rgba(255, 255, 255, .6);
    }

    .ant-list-item-meta-description {
        color: rgba(0, 0, 0, 0.45);
        margin-top: 14px;
        font-size: 14px;
        line-height: 22px;
    }
</style>