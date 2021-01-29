<template>
    <div class="detaile">
        <div class="detaileLeft">
            <div class="detaileTitle">
                <h1>
                    我是你爸爸吧啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </h1>
            </div>
            <div></div>

        </div>
        <slot name="user"></slot>
    </div>
</template>

<script>
    export default {
        name: "MyDetailedLearn",
        created() {
            console.log(this.$route.query.key);
            //获得接口
        },
        methods:{

        }
    }
</script>

<style scoped>
    .detaileTitle{
        padding: 10px;
        display: flex;
        /*justify-content: flex-end;*/
        align-items: center;
        height: 60%;
    }
    .detaileTitle h1{
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        margin: 0 0 10px;
        padding: 0;
    }
    .detaileLeft{
        height: auto;
        background-color: rgba(255, 255, 255, .6);
        width: 68%;
    }
    .detaile {
        display: flex;
        justify-content: space-between;
        height: auto;
        margin-right: auto;
        margin-left: auto;
        margin-top: 5%;
        width: 50%;
        /*background-color: rgba(255, 255, 255, .6);*/
    }
</style>