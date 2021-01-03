<template>
    <div id="alert">
        <a-alert v-if="isDisplaySuccess" message="Success Tips" type="success" :banner="true" show-icon closable="true" />
        <a-alert v-if="isDisplayError" type="error" message="删除失败" banner />
    </div>
</template>

<script>
    export default {
        name: "PublicAlert",
        props: {
            isDisplaySuccess: {
                type: Boolean,
                default: false
            },
            isDisplayError: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
#alert{
    z-index: 3;
}
</style>