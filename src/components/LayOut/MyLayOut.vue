<template>
    <a-layout id="components-layout-demo-top">
        <!--<a-layout-header class="lo" mode="horizontal" :style="{ /*position: 'fixed',*/ zIndex: 1, width: '100%' }">
            <div class="logo">
                &lt;!&ndash;                <span id="title">&ndash;&gt;
                <a-avatar id="avatarImage" class="ant-dropdown-link" @click="e => e.preventDefault()" :size="50"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                &lt;!&ndash;                </span>&ndash;&gt;
            </div>
            <a-topmenu></a-topmenu>
            <div id="ant-dropdown">
                <a-avatar class="ant-dropdown-link" @click="e => e.preventDefault()" :size="50"
                          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1109664045,340305092&fm=26&gp=0.jpg"/>
                <my-dropdown></my-dropdown>
            </div>
        </a-layout-header>-->
        <a-layout-content id="layOut" :style="{ padding: '0 10px', padding: '2rem'}">

            <!--            处理路由面包屑-->
            <a-breadcrumb :routes="breadlist" :style="{ margin: '16px 20px' }">
                <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
                    <!--                    {{paths}}-->
                    <span v-if="routes.indexOf(route) === routes.length - 1">
                      {{ route.name }}
                    </span>
                    <router-link v-else :to="`/${paths[paths.length - 1]}`">
                        {{ route.name }}
                    </router-link>
                </template>
            </a-breadcrumb>
            <div :style="{minHeight: '100px', display: 'flex', }">

<!--                分割线-->
<!--                <a-divider id="divider" style="height: 100%" type="vertical" />-->
                <slot name="myrouter">
                </slot>

                <router-view></router-view>
                <one-tabs class="OneTabs"/>
            </div>
            <!--<a-layout-footer :style="{ textAlign: 'center'  }">
                乱七八糟的网站
            </a-layout-footer>-->
        </a-layout-content>

    </a-layout>

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

    export default {
        name: "MyLayOut",
        components: {
            AnimatedVerticalTabs,
            ATopmenu,
            MyDropdown,
            test2,
            OneTabs
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

    .OneTabs{
        width: 40%;
    }
    #layOut{
        margin-top: 10%;
        margin-right: auto;
        margin-left: auto;
    }

    body {

    }

    #ant-dropdown {
        margin-left: auto;
    }

    .lo {
        display: flex;
    }

    #avatarImage {
        height: 100%;
    }

    .logo {
        width: 120px;
        height: 100%;
        float: left;
        text-align: center;
        z-index: 1024;
    }

    #components-layout-demo-top {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        margin: 0 24px 16px 0;
        float: left;
        z-index: 1024;
    }

    #title {
        color: white;
        position: fixed;
        top: 0px;
        left: 0;
        width: 216px;
        height: 69px;
    }

    .ant-dropdown-link {
        /**鼠标变成小手**/
        cursor: pointer;
        margin-top: 6px;
        margin-right: 20px;
        margin-bottom: 5px;
    }

    #ant-dropdown {
        display: flex;
    }

    @media (max-width: 1919px) {
        .ant-dropdown-link {
            width: 0;
        }
        #ant-dropdown {
            width: 0;
        }
        #divider{
            width: 0;
        }
    }
</style>
