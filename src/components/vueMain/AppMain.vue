<template>
    <my-lay-out class="mainApp"></my-lay-out>
</template>

<script>
    import MyLayOut from "@/components/LayOut/MyLayOut";
    export default {
        name: "AppMain",
        components: {
            MyLayOut
        },
        methods: {
            clickImage() {

            }
        }
    }
</script>

<style scoped>
.mainApp{
    min-height: 800px;
}
</style>
