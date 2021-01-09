<template>
    <!--<div id="home">
        这是一个首页  你们知道吗
        <a-button type="primary" @click="submitForm()">
            登陆
        </a-button>

    </div>-->
    <div id="home">
        <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide id="one">紅紅火火1</swiper-slide>
            <swiper-slide id="two">紅紅火火2</swiper-slide>
            <swiper-slide id="thre">紅紅火火3</swiper-slide>
            <swiper-slide id="ids">紅紅火火4</swiper-slide>
            <!--            <div class="swiper-pagination"  slot="pagination"></div> @mouseenter=""-->
            <!-- 上一页 -->
            <div class="swiper-button-prev styleClass" :class="{'shadow': isShadow}" slot="button-prev" @mouseleave="deleteClass"
                 @mouseenter="updateClass"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next styleClass" slot="button-next"></div>
            <!-- 滚动条，建议不加 -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>

</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "MyHome",
        data() {
            return {
                isShadow: false,
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
                        clickable: true
                    },
                    // 设置轮播可循环
                    loop: true
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
            updateClass() {
                this.isShadow = true
            },
            deleteClass() {
                this.isShadow = false
            },
            clckname() {
                // eslint-disable-next-line no-undef
                console.log(2222222)
            }
        }
    }
</script>

<style scoped>
    #home {
        width: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 50px;
    }

    #one {
        width: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 50px;
    }

    .swiper-container {
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
        --swiper-navigation-color: #00ff2d; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 15px; /* 设置按钮大小 */
    }

    .swiper-button-prev, .swiper-button-next {
        position: absolute;
        top: 0;
        width: calc(var(--swiper-navigation-size) / 44 * 27);
        height: var(--swiper-navigation-size);
        margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--swiper-navigation-color, var(--swiper-theme-color));
    }
    .styleClass {
        height: 100%;
        width: 10%;

    }
    .shadow {
        transition: .4s;
        background: -webkit-linear-gradient(right, white, lightblue, skyblue)
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
