<template>
    <div id="login">
        <div id="userFa">

            <user @updateApp="updateApp"></user>
        </div>
        <img id="image" src="../../../static/images/user/login.png" alt="">
    </div>
</template>

<script>
    import User from "./User";
    export default {
        name: "LogIn",
        components: {
            User
        },
        methods: {
            updateApp() {
                this.$emit('updateNewApp')
            }
        }
    }
</script>

<style scoped>
    #login{
        background-repeat: no-repeat;
        background-size: 100% 100%;

    }
    #userFa{
        position: fixed;
        top: 40%;
        left: 50%;
        width: 30%;
        height: 10%;
        bottom: 30px;
        border-radius:15px 40px 15px 40px;
    }

</style>
