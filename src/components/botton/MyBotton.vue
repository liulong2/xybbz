<template>
    <div class="myBotton" v-if="getIsDisplay">
        <div class="childen">
            这是一个咸鱼写的网站
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "MyBotton",
        data() {
            return {
                isEnable: false
            }
        },
        computed: {
            ...mapGetters(['getIsDisplay']),
        },
        methods: {

            // ...mapActions(['addBreadListState', 'removeBreadListState', 'addAllBreadListState']),
        },
        created(){
            /*console.log(this.getIsDisplay + "111111111111111111");
            this.isEnable = this.getIsDisplay
            console.log(this.isEnable)*/
        }
    }
</script>

<style scoped>
.myBotton{
    width: 100%;
    height: 15%;
    margin-top: 5%;
    /*position: fixed;*/
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