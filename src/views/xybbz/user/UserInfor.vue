<template>
    <div class="info" v-if="true">
        <div class="topInfo">
            <div>
                <strong>咸鱼 这里是咸鱼帮</strong>
            </div>
            <div style="color: #ccc;">
                一个咸鱼写的网站
            </div>

        </div>
        <a-divider type="horizontal"/>
        <div class="bottomInfo">
            <a-button @click="registeredClick">现在注册
            </a-button>
            <div class="loginRegist">
                <div>
                    已经注册?&nbsp
                </div>
                <div class="noLogin" @click="clickLogin" :class="{aClass: aStyle}" @mouseleave="deleteClass"
                     @mouseenter="updateClass">登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfor",
        data() {
            return {
                aStyle: false
            }
        },
        methods: {
            clickLogin() {
                this.$router.push({path: '/mylogin', query: {key: "false"}})
            },
            registeredClick() {
                this.$router.push({path: '/mylogin', query: {key: "true"}})
            },
            //鼠标离开时间
            deleteClass() {
                this.aStyle = false
            },
            updateClass() {
                this.aStyle = true
            }
        }
    }
</script>

<style scoped>
    .noLogin{
        cursor:pointer
    }
    .loginRegist {
        display: flex;
    }
    .info {
        width: 30%;
        height: 200px;
        background-color: #ffffff;
        border-radius: 4px;
    }

    .topInfo {
        height: 30%;
        width: 100%;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .bottomInfo {
        height: 69%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #778087 !important;
    }

    .aClass {
        color: #0c0c0c !important;
        text-decoration: underline;
    }

    .ant-divider-horizontal {
        margin: 0;
    }
</style>