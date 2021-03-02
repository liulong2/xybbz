<template>
    <div class="topDiv" v-if="getIsDisplay()">
        <div class="icon">
            <p>
                <b>咸鱼</b>
            </p>
        </div>
        <a-menu v-model="current" :default-selected-keys="getDefaultCurrent" mode="horizontal">
            <!--<a-menu-item key="mail" @click="jumpClick(obj)">
                &lt;!&ndash;                <a-icon type="mail"/>&ndash;&gt;
                首页
            </a-menu-item>-->
            <a-menu-item v-for="(item, value) in currents" :key="item.iconHref" @click="jumpClick(item)">
                <!--                <a-icon type="appstore"/>-->
                {{item.iconName}}
            </a-menu-item>
        </a-menu>
        <my-weather></my-weather>
        <my-search></my-search>
    </div>
</template>

<script>
    import MyWeather from "@/views/xybbz/MyWeather/MyWeather";
    import global from "@/config/global";
    import {isNull} from "@/utils/utils";
    import {getLocalToken, setLocalToken} from "@/utils/local";
    import MySearch from "@/components/search/MySearch";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "TopDiv",
        components: {
            MyWeather,
            MySearch
        },
        inject: ['reload'],
        data() {
            return {
                current: [],
                defaultCurrent: ['mail'],
                currents: global.hrefs,
                isEnable: false
            };
        },
        created() {
            this.getDisplay()
            console.log("测试组件生成")

        },
        mounted() {

        },
        computed: {
            getDefaultCurrent() {
                this.defaultCurrent = []
                this.defaultCurrent.push(this.getCurrents()[0].iconHref)
                console.log(this.defaultCurrent)
                this.current = this.defaultCurrent
                return this.defaultCurrent
            },
        },
        methods: {
            ...mapGetters(['getIsDisplay', 'getCurrents']),
            ...mapActions(['setDisplay', 'setTopSwitch']),
            getDisplay() {
                let keyName = global.topBottomEnableName
                let type = false
                const obj = {keyName, type}
                if (!isNull(getLocalToken(obj))) {
                    this.setDisplay(true)
                }
            },
            // todo 判断是否为刷新 刷新的话从缓存中获取
            jumpClick(val) {

                // const routerPath = val.routerPath
                this.setTopSwitch(val)

                const routerPath = val.routerPath
                this.current = []
                this.current.push(val.iconHref)

                //存储到缓存中
                let context = this.getCurrents();
                let keyName = global.current;
                let type = false
                const enableObj = {keyName, context, type}
                setLocalToken(enableObj)
                console.log(routerPath);
                console.log("这里是加载路由的地方 isNull(routerPath) ? '/' : ")
                this.$router.push(routerPath).catch(error => error)
                this.reload()
            }
        },
        watch: {
            $route(to, from) {
                if (to.path !== '/mylogin') {
                    this.getDisplay()
                }
                console.log(to.path)
                console.log(from.path)
            }
        }
    }
</script>

<style scoped>
    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .icon {
        font-family: "楷体", serif;
        font-size: 31px;
        color: rgb(0, 132, 255);;
    }

    .topDiv {
        width: 100%;
        display: flex;
        justify-content: center;
        /*background-color: #5e3d3d;*/
        box-shadow: 0 1px 3px rgba(18, 18, 18, .1);
    }

    .ant-menu {
        width: 22%;
        justify-content: center;
        background: none;
    }

    ul {
        display: flex;
        justify-content: center;
        /*background-color: #5e3d3d;*/
    }

    .ant-menu-horizontal {
        line-height: 46px;
        white-space: nowrap;
        border: 0;
        /*底部白条*/
        /*border-bottom: 1px solid #e8e8e8;*/

        /*box-shadow: none;*/
    }
</style>
