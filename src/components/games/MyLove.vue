<template>
    <div class="myGame">
        <div class="iconFa" @mouseenter="updateClass(value)"
             @mouseleave="deleteClass(value)" v-for="(item,value) in hrefs"
             @click="clickRouter(item.routerPath)"
             :key="value">
            <div class="gameIcon">
                <slot name="iconsvg">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.iconHref"></use>
                    </svg>
                </slot>
            </div>

            <div class="iconName" :class="{colorStyle: value === isExist}">
                {{item.iconName}}
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "MyLove",
        data() {
            return {
                isExist: -1
            }
        },
        props: {
            hrefs: {
                type: Array,
                default() {
                    return [{iconHref: "#icon-youxi", iconName: '游戏'}]
                }
            }
        },
        methods: {
            updateClass(value) {
                console.log(value);
                this.isExist = value;
            },
            deleteClass(value) {
                console.log(value);
                this.isExist = -1
            },
            clickRouter(val) {
                console.log(val)
                this.$router.push(val)
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    /*.iconName {
        position: relative;
        left: 30%;
    }
*/
    .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        border-radius: .75em;
        /*box-shadow: 0 1px 3px rgba(18, 18, 18, .1);*/
        fill: currentColor;
        overflow: hidden;
    }

    .gameIcon {
        height: 80px;
        width: 80px;
        line-height: 80px;
        border-radius: 40px;
        /*background-color: rgba(16, 136, 233, .5);*/
        /*color: #fff;*/
        text-align: center;
        font-size: 40px;
    }

    .iconName {

    }

    .iconFa {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    .myGame {
        display: flex;
        justify-content: space-around;
    }

    .colorStyle {
        color: orange;
    }
</style>
