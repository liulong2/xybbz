<template>
    <div class="detaile">
        我是你爸爸吧啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <slot name="user"></slot>
    </div>
</template>

<script>
    export default {
        name: "MyDetailedLearn",
        created() {
            console.log(this.$route.query.key);
        }
    }
</script>

<style scoped>
    .detaile {
        margin-top: 5%;
        width: 50%;
        background-color: rgba(255, 255, 255, .6);
    }
</style>