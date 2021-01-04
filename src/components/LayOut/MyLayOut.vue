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
            <a-breadcrumb :style="{ margin: '16px 0' }">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
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
    export default {
        name: "MyLayOut",
        components: {
            ATopmenu,
            MyDropdown
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
