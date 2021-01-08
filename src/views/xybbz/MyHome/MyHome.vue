<template>
    <!--<div id="home">
        这是一个首页  你们知道吗
        <a-button type="primary" @click="submitForm()">
            登陆
        </a-button>

    </div>-->
    <dev id="home">
        <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide id="one">紅紅火火1</swiper-slide>
            <swiper-slide id="two">紅紅火火2</swiper-slide>
            <swiper-slide id="thre">紅紅火火3</swiper-slide>
            <swiper-slide id="ids">紅紅火火4</swiper-slide>
<!--            <div class="swiper-pagination"  slot="pagination"></div>-->
            <!-- 上一页 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next" slot="button-next"></div>
            <!-- 滚动条，建议不加 -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </dev>

</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "MyHome",
        data() {
          return {
              swiperOption: {
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
                  // 设置自动轮播
                  autoplay: {  //自动轮播
                      delay: 11000,
                      disableOnInteraction: false
                  },
                  // initialSlide: ,
                  centeredSlides: true,
                  // some swiper options/callbacks
                  // 所有的参数同 swiper 官方 api 参数
                  // 设置分页器
                  pagination: {
                      el: '.swiper-pagination',
                      // 设置点击可切换
                      clickable :true
                  },
                  // 设置轮播可循环
                  loop : true
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
            // this.swiper.slideTo(0, 1000, false)
        },
        methods: {
            submitForm() {
                this.$router.push("/generator")
            }
        }
    }
</script>

<style scoped>
    #home{
        width: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 50px;
    }
    #one{
        width: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 50px;
    }
    .swiper-container{
        width: 100%;
        --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
        --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px;/* 设置按钮大小 */
    }
</style>
