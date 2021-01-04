<template>
    <a-layout id="components-layout-demo-fixed">
        <a-layout-header class="lo" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo">
                <span id="title">
                    <a-avatar class="ant-dropdown-link" @click="e => e.preventDefault()" :size="50"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                </span>
            </div>
            <a-topmenu></a-topmenu>
            <div id="ant-dropdown">
                <a-avatar class="ant-dropdown-link" @click="e => e.preventDefault()" :size="50"
                          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1109664045,340305092&fm=26&gp=0.jpg"/>
                <my-dropdown></my-dropdown>
            </div>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', overflowY: 'scroll' }">

            <a-breadcrumb :routes="breadlist" :style="{ margin: '16px 0' }">
                <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
                    <span v-if="routes.indexOf(route) === routes.length - 1">
                      {{ route.name }}
                    </span>
                    <router-link v-else :to="`/${paths.join('/')}`">
                        {{ route.name }}
                    </router-link>
                </template>
            </a-breadcrumb>

            <!--<a-breadcrumb :style="{ margin: '16px 0' }">

                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>-->
            <div :style="{ background: '#fff', padding: '24px', minHeight: '100px' }">
                <slot name="myrouter">
                </slot>
                <router-view></router-view>
            </div>
            <a-layout-footer :style="{ textAlign: 'center'  }">
                乱七八糟的网站
            </a-layout-footer>
        </a-layout-content>

    </a-layout>
</template>

<script>
    import ATopmenu from "@/components/Amenu/ATopmenu";
    import MyDropdown from "@/components/Dropdown/MyDropdown";
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import {getLocalToken, setLocalToken} from "../../utils/local";

    export default {
        name: "MyLayOut",
        components: {
            ATopmenu,
            MyDropdown
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
                const breadLength = this.getBreadListState.length //获得breadList集合数组个数
                const curName = this.$route.name
                const curPath = this.$route.fullPath
                const newBread = {name: curName, path: curPath}
                // const ishome = curName ==='首页'
                if (breadNumber === 0 || breadNumber === 1) {
                    // this.$store.dispatch('removeBreadListState',1)
                    this.removeBreadListState(1) //初始化,只有首页面包屑按钮
                    if (breadNumber === 1) { //点击一级菜单
                        this.addBreadListState(newBread) //当前页面添加到breadList集合
                    }
                } else { //如果不是一级导航,并且breadList集合个数等于或小于当前层数
                    if (!isReload) {
                        if (breadNumber <= breadLength) {
                            this.addBreadListState( newBread)
                        } else {
                            this.removeBreadListState(parseInt(breadNumber) + 1) //如果往回点面包屑导航,截取
                        }
                    } else {
                        this.addAllBreadListState(getLocalToken(global.breadListStorage, false))
                    }
                }
                this.breadlist = this.getBreadListState()
                console.log(this.breadlist + 11111)
                setLocalToken(global.breadListStorage, this.breadlist, false)

                console.log(this.breadlist );
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
    #ant-dropdown {
        margin-left: auto;
    }

    .lo {
        display: flex;
    }

    .logo {
        width: 120px;
        height: 31px;
        /*background: rgba(255, 255, 255, 0.2);*/
        margin: 16px 24px 16px 0;
        top: 10px;
        float: left;
        text-align: center;
        /*color: red;*/
        /*left: 10px;*/
        z-index: 1024;
    }

    #components-layout-demo-fixed {
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
        margin-right: 10px;
        margin-bottom: 5px;
    }

    .layout {
        /*overflow-y: scroll;*/
    }

    #popo {
        /*margin-top: 80px;*/
    }
</style>
