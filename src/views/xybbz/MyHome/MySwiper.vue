<template>
    <!--<div id="home">
        这是一个首页  你们知道吗
        <a-button type="primary" @click="submitForm()">
            登陆 游戏 天气
        </a-button>

    </div>-->
    <div class="thisHome">
        <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide id="one">
                <template slot="">
                    <img src="../../../static/images/3.jpeg" alt="">
                </template>
            </swiper-slide>
            <swiper-slide style="background-color: red" id="two">
                <template slot="">
                    <img src="../../../static/images/1.jpg" alt="">
                </template>
            </swiper-slide>
            <!--<swiper-slide style="background-color: red" id="thre">
                <template slot="">
                    <img src="../../../static/images/2.jpg" alt="">
                </template>
            </swiper-slide>-->
            <swiper-slide style="background-color: red" id="ids">
                <template slot="">
                    <img src="../../../static/images/3.jpeg" alt="">
                </template>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 上一页 -->
            <div class="swiper-button-prev styleClass" :class="{'shadowNew': isShadow}" slot="button-prev"
                 @mouseleave="deleteClass"
                 @mouseenter="updateClass"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next styleClass" :class="{'next': isNext}" @mouseenter="addNextClass"
                 @mouseleave="deleteNextClass" slot="button-next"></div>
            <!-- 滚动条，建议不加 -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>

</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import {mapActions, mapGetters} from "vuex";
    import global from "@/config/global";
    import {setLocalToken} from "@/utils/local";


    export default {
        name: "MySwiper",
        data() {
            return {
                isShadow: false,
                isNext: false,
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesPerView: 1,
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
                        clickable: true,
                        // bulletClass : 'my-bullet'
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
        created() {
            this.setTopSwitch({
                iconHref: 'mail',
                iconName: '首页',
                routerPath: '/home'
            },)
            let context = this.getCurrents();
            let keyName = global.current;
            let type = false
            const enableObj = {keyName, context, type}
            setLocalToken(enableObj)
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper)
            // this.swiper.slideTo(0, 1000, false)
        },
        methods: {
            ...mapGetters(['getCurrents']),
            ...mapActions(['setTopSwitch']),

            addNextClass() {
                this.isNext = true
            },
            deleteNextClass() {
                this.isNext = false
            },
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
    .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
        width: 50%;
    }


    .swiper-pagination-bullets {
        /*bottom: 10px;*/
        top: 46%;
        left: 0;
        width: 100%;
    }

    .thisHome {
        width: 65%;
        height: 100%;
        line-height: 300px;
        text-align: center;
        font-size: 50px;
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev, .swiper-button-next {

        position: absolute;
        top: 7px;
        /*width: calc(var(--swiper-navigation-size) / 44 * 27);*/
        height: var(--swiper-navigation-size);
        /*margin-top: calc(-1 * var(--swiper-navigation-size) / 2);*/
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--swiper-navigation-color, var(--swiper-theme-color));
    }

    .styleClass {
        height: 100%;
        width: 13%;
        /*background: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .3) 100%);*/
    }

    .next {
        background: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .3) 100%);
    }

    .shadowNew {
        background: linear-gradient(to left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .3) 100%);
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        width: 100%;

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

    img {
        width: 100%;
        height: 380px;
        /*height: 100%;*/
        /*border-style: none !important;*/
        /*object-fit:cover;*/
    }
</style>
<style>
    .swiper-pagination-bullet {
        margin: 0 3px !important;
    }

    .swiper-container {
        height: 100%;
        margin-left: auto;
        margin-right: 100px;
        /*padding-left: 20px;*/
        width: 100%;
        /*--swiper-pagination-color: #ffffff;*/
        /*--swiper-theme-color: #ff6600; !* 设置Swiper风格 *!*/
        --swiper-navigation-color: #ffffff; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 15px; /* 设置按钮大小 */
    }
</style>
