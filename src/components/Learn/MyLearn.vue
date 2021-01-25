<template>
    <div class="learn">
        <div class="learnChild">
<!--            :locale="{emptyText: '暂无数据'}"-->
<!--            使用jsx修改 locale 属性-->
            <a-list item-layout="horizontal" :data-source="data" :bordered="true" :locale="{emptyText: createEmpty()}">
                <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                    <a-badge slot="extra" count="109" :number-style="{ backgroundColor: '#aab0c6' }" />
                    <a-list-item-meta>
                        <a slot="title" href="https://www.antdv.com/">{{ item.blogTitle }}</a>
                        <<!--a-avatar
                                slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />-->
                        <div slot="description">
                            <a href="#">
                                {{item.userName}}
                                最后发送人{{item.lastReply}}
                            </a>
                            {{item.blogContext}}</div>
                        <a-avatar style="cursor:pointer;" slot="avatar" shape="square" :size="64" @click="userClick" icon="user" :src="item.userIcon"/>

                    </a-list-item-meta>
                </a-list-item>
            </a-list>
            <user-infor></user-infor>
        </div>
        <a-pagination v-model="current" :page-size="pageSize" :total="total" @change="onChange" show-less-items
                      :hide-on-single-page="true"/>
    </div>
</template>

<script>
    import {getSort} from "@/api/sort/api";
    import {getBlogListPage} from "@/api/blog/api";
    import global from "@/config/global";
    import {setLocalToken} from "@/utils/local";
    import {mapActions, mapGetters} from "vuex";
    import UserInfor from "@/views/xybbz/user/UserInfor";
    //学习
    export default {
        name: "MyLearn",
        data() {
            return {
                data: [],
                current: 1,
                pageSize: 20,
                total: 0
            };
        },
        components: {
            UserInfor
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
            console.log("测试")
            this.getSortData()
        },
        methods: {
            ...mapGetters(['getCurrents']),
            ...mapActions(['setTopSwitch']),
            // jsx修改属性
            createEmpty(){
                return (<a-empty description={false} />)
            },
            onChange(current) {
                this.current = current;
                this.getSortData()
            },
            userClick() {
               // todo 点击跳转个人资料
            },
            getSortData() {
                getSort({name: "learn_type", type: 1}).then(res => {
                    console.log();
                    getBlogListPage(res.data.data.id, this.current, this.pageSize).then(res => {
                        this.total = res.data.data.total
                        console.log(this.total);
                        this.data = res.data.data.records
                        console.log();
                    }).catch(error => {
                        this.$message.error("获取失败")
                    })
                }).catch(error => {
                    this.$message.error("获取失败")
                })
            }
        }
    }
</script>

<style scoped>
    .learn {
        min-height: 800px;
        margin-top: 5%;
        width: 40%;
        /*padding-bottom: 10%;*/
        height: auto;
        margin-right: auto;
        margin-left: auto;
        /*background-color: rgba(255, 255, 255, .6);*/
        /*margin-bottom: 3%;*/
    }

    .learnChild {
        display: flex;
        width: 100%;
        justify-content: space-between;
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
        width: 68%;
        background-color: rgba(255, 255, 255, .6);
    }
</style>