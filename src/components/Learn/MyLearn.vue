<template>
    <div class="learn">
        <a-list item-layout="horizontal" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                <a-list-item-meta
                        :description="item.blogContext"
                >
                    <a slot="title" href="https://www.antdv.com/">{{ item.blogTitle }}</a>
                    <a-avatar
                            slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </a-list-item-meta>
            </a-list-item>
        </a-list>

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
            onChange(current) {
                this.current = current;
                this.getSortData()
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
        background-color: rgba(255, 255, 255, .6);
        /*margin-bottom: 3%;*/
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
</style>