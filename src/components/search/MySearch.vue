<template>
    <div class="search">
        <a-input-search placeholder="请输入搜索内容" style="width: 200px" @search="onSearch"/>
    </div>
</template>

<script>
    export default {
        name: "MySearch",
        methods: {
            onSearch(value) {
                console.log(value);
            },
        }
    }
</script>

<style scoped>
    .search {
        height: 46px;
        text-align: center;
        line-height: 46px;
        border-radius: 40px
        /*margin:0 auto;*/
    }


</style>
<style>
    .ant-input {
        border-radius: 20px
    }
</style>