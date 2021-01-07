<template>
    <!--<div id="home">
        这是一个首页  你们知道吗
        <a-button type="primary" @click="submitForm()">
            登陆
        </a-button>

    </div>-->
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

    export default {
        name: "MyHome",
        data() {
          return {
              swiperOptions: {
                  pagination: {
                      el: '.swiper-pagination'
                  },
                  // Some Swiper option/callback...
              }
          }
        },
        components: {
            Swiper,
            SwiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        },
        methods: {
            onSwiper(swiper) {
                console.log(swiper)
            },
            onSlideChange() {
                console.log('slide change')
            },
            submitForm() {
                this.$router.push("/generator")
            }
        }
    }
</script>

<style scoped>
#home{
    width: 100%;
    height: 100%;
}
</style>
