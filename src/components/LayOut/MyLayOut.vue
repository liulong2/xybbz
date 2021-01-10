<template>
    <!--            此处的maxHeight非常重要,关系到 one-tabs的高度-->
    <div class="myindex" :style="{maxHeight: '20em'}">
        <my-home class="layOut-home"></my-home>
        <one-tabs class="OneTabs"/>
    </div>
</template>

<script>
    import ATopmenu from "@/components/Amenu/ATopmenu";
    import MyDropdown from "@/components/Dropdown/MyDropdown";
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import {getLocalToken, setLocalToken} from "../../utils/local";
    import global from "@/config/global"
    import AnimatedVerticalTabs from "@/components/animatedVerticalTabs/AnimatedVerticalTabs";
    import test2 from "../../views/xybbz/generator/test2";
    import OneTabs from "../tabs/OneTabs";
    import MyHome from "../../views/xybbz/MyHome/MyHome";

    export default {
        name: "MyLayOut",
        components: {
            AnimatedVerticalTabs,
            ATopmenu,
            MyDropdown,
            test2,
            OneTabs,
            MyHome
        },
        data() {
            const {lang} = this.$route.params;
            return {
                // basePath: '/components/breadcrumb',
                breadlist: [] //路由集合
            }
        },
        created() {
            this.getBreadCrumb(true)
        },
        methods: {

            ...mapGetters(['getBreadListState']),
            ...mapActions(['addBreadListState', 'removeBreadListState', 'addAllBreadListState']),
            getBreadCrumb(isReload) {
                const breadNumber = typeof (this.$route.meta.breadNumber) != 'undefined' ? this.$route.meta.breadNumber : 1 //url变量breadNum记录层数,默认为1,如果大于1,要添加上变量
                const breadLength = this.getBreadListState().length //获得breadList集合数组个数
                const curName = this.$route.name
                const curPath = this.$route.fullPath
                const newBread = {name: curName, path: curPath}

                //取出本地信息
                let keyName = global.breadList;
                let type = false

                // const ishome = curName ==='首页'
                if (breadNumber === 0 || breadNumber === 1) {
                    // this.$store.dispatch('removeBreadListState',1)
                    this.removeBreadListState(1) //初始化,只有首页面包屑按钮
                    if (breadNumber === 1) { //点击一级菜单
                        this.addBreadListState(newBread) //当前页面添加到breadList集合
                    }
                } else { //如果不是一级导航,并且breadList集合个数等于或小于当前层数
                    if (!isReload) {
                        if (breadNumber >= breadLength) {
                            this.addBreadListState(newBread)
                        } else {
                            this.removeBreadListState(parseInt(breadNumber) + 1) //如果往回点面包屑导航,截取
                        }
                    } else {
                        this.addAllBreadListState(getLocalToken({keyName, type}))
                    }
                }
                this.breadlist = Array.from(new Set(this.getBreadListState()))
                // console.log(this.breadlist)
                let context = this.breadlist;

                const obj = {keyName, context, type}
                setLocalToken(obj)

                // console.log(this.breadlist);
            }
        },
        watch: {
            $route() {
                this.getBreadCrumb()
            }
        }
    }
</script>

<style scoped>

    .myindex {
        display: flex;
        width: 50%;
        height: 100%;
        margin-top: 10%;
        margin-right: auto;
        margin-left: auto;
        background: rgba(255, 255, 255, 0.2);
        /*float: auto;*/
        z-index: 1024;
    }

    #components-layout-demo-top {
        width: 100%;
        height: 100%;

    }


    /*@media (min-width: 1200px) {
        #layOut {
            max-width: 1160px;
        }
    }

    @media (min-width: 992px) {
        #layOut {
            max-width: 960px;
        }
    }*/

</style>
<style>
</style>
