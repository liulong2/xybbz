<template>
    <div id="home">
        这是一个首页  你们知道吗
        <a-button type="primary" @click="submitForm()">
            登陆
        </a-button>
    </div>
</template>

<script>
    export default {
        name: "MyHome",
        methods: {
            submitForm() {
                this.$router.push("/generator")
            }
        }
    }
</script>

<style scoped>

</style>
