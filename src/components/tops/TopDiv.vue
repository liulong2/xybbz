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
            <a-menu-item key="app">
                <!--                <a-icon type="appstore"/>-->
                第二个首页
            </a-menu-item>
            <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
<!--            <a-icon type="setting"/>-->
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
            </a-sub-menu>
            <a-menu-item key="alipay">
                <a href="javaScript:void(0)" target="_blank" rel="noopener noreferrer"
                >第四个首页</a
                >
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "TopDiv",
        data() {
            return {
                current: ['mail'],
            };
        }
    }
</script>

<style scoped>
    p {
         margin-top: 0;
         margin-bottom: 0;
    }
    .icon{
        font-family:"楷体",serif;
        font-size: 31px;
    }
    .topDiv {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #5e3d3d;
        box-shadow:2px 2px 2px #656363;
    }

    .ant-menu {
        width: 30%;
        justify-content: center;

    }

    ul {
        display: flex;
        justify-content: center;
        background-color: #5e3d3d;
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
