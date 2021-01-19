<template>
    <div class="myBotton">
        <div class="childen">
            这是一个咸鱼写的网站
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyBotton"
    }
</script>

<style scoped>
.myBotton{
    width: 100%;
    height: 15%;
    margin-top: 5%;
    /*position: relative;*/
    /*bottom: 0;*/
    text-align: center;
    /*background-color: rgba(146, 132, 132, 0.2) !important;*/
    box-shadow: 0 -1px 3px rgba(18, 18, 18, .1);
}
    .childen{
        margin-top: 5px;
        text-align:left;
        width: 40%;
        margin-right: auto;
        margin-left: auto;
    }
</style>