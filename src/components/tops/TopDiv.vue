<template>
    <div class="topDiv">
        <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail">
                <!--                <a-icon type="mail"/>-->
                Navigation One
            </a-menu-item>
            <a-menu-item key="app">
                <!--                <a-icon type="appstore"/>-->
                Navigation Two
            </a-menu-item>
            <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
<!--            <a-icon type="setting"/>-->
            Navigation Three - Submenu
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
                <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
                >Navigation Four - Link</a
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
    .topDiv {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #5e3d3d;

    }

    .ant-menu {
        width: 100%;
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
        box-shadow:2px 2px 2px #656363;
        /*box-shadow: none;*/
    }
</style>