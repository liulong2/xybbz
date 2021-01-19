<template>
    <div class="topDiv">
        <div class="icon">
            <p>
                <b>咸鱼</b>
            </p>
        </div>
        <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail">
                <!--                <a-icon type="mail"/>-->
                首页
            </a-menu-item>
            <a-menu-item v-for="(item, value) in currents" :key="item.iconHref" @click="jumpClick(item.routerPath)">
                <!--                <a-icon type="appstore"/>-->
                {{item.iconName}}
            </a-menu-item>
            <!--<a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
&lt;!&ndash;            <a-icon type="setting"/>&ndash;&gt;
            第三个首页
        </span>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">
                        Option 1
                    </a-menu-item>
                    <a-menu-item key="setting:2">
                        Option 2
                    </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">
                        Option 3
                    </a-menu-item>
                    <a-menu-item key="setting:4">
                        Option 4
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>-->
        </a-menu>
        <my-weather></my-weather>
        <my-search></my-search>
    </div>
</template>

<script>
    import MyWeather from "@/views/xybbz/MyWeather/MyWeather";
    import global from "@/config/global";
    import {isNull} from "@/utils/utils";
    import MySearch from "@/components/search/MySearch";

    export default {
        name: "TopDiv",
        components: {
            MyWeather,
            MySearch
        },
        data() {
            return {
                current: ['mail'],
                currents: global.hrefs
            };
        },
        methods: {
            jumpClick(val) {
                this.$router.push(isNull(val) ? '/' : val)
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
        width: 30%;
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
