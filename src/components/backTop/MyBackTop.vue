<template>
    <div id="components-back-top-demo-custom">
        <a-back-top>
            <div class="ant-back-top-inner">
                <a-icon type="vertical-align-top" />
            </div>
        </a-back-top>
        <strong style="color: #1088e9"></strong>
    </div>
</template>

<script>
    export default {
        name: "MyBackTop"
    }
</script>

<style scoped>
    #components-back-top-demo-custom .ant-back-top {
        bottom: 100px;
    }
    #components-back-top-demo-custom .ant-back-top-inner {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 20px;
        background-color: #1088e9;
        color: #fff;
        text-align: center;
        font-size: 20px;
    }
</style>
