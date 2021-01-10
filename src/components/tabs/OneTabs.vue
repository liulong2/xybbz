<template>
    <div class="internal">
        <a-tabs default-active-key="1" @change="callback" size="default" :tab-bar-gutter="30">
            <a-tab-pane key="1" class="">
                <template slot="tab">
                    <p class="pSize">网站公告</p>
                </template>
                Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" force-render>
                <template slot="tab">
                    <p class="pSize">最新记录</p>
                </template>
                Content of Tab Pane 2
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    export default {
        name: "OneTabs",
        data() {
            return {};
        },
        methods: {
            callback(key) {
                console.log(key);
            },
        },
    }
</script>

<style scoped>
.internal{
    padding: 20px;
    width: 100%;
    /*background-color: #555454;*/
    background: rgba(229, 229, 230, 0.7);
    /*opacity: .4;*/
}
    .pSize{
        /*color: black;*/
        /*opacity: 1.2;*/
    }
    p {
        font-weight: bolder;
        font-size: 15px;
    }
</style>