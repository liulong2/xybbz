<template>
    <div class="film">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxi"></use>
        </svg>
    </div>
</template>

<script>
    import {iconAli} from "@/static/images/film/iconfont";
    //电影
    export default {
        name: "MyFilm",
        created() {
            iconAli()
        }
    }
</script>

<style scoped>
    .film{
        height: 60px;
        width: 60px;
        line-height: 60px;
        border-radius: 30px;
        /*background-color: rgba(16, 136, 233, .5);*/
        /*color: #fff;*/
        text-align: center;
        font-size: 30px;
    }

    .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        border-radius: .75em;
        box-shadow:0 1px 3px rgba(18,18,18,.1);
        fill: currentColor;
        overflow: hidden;
    }
</style>
