<template>
    <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['1']"
            :style="{ lineHeight: '64px' }"
    >
        <a-menu-item key="1">
            首页
        </a-menu-item>
        <a-menu-item key="2">
            添加
        </a-menu-item>
        <a-menu-item key="3">
            三方
        </a-menu-item>
    </a-menu>
</template>

<script>

    export default {
        name: "ATopmenu"
    }
</script>

<style scoped>

</style>
