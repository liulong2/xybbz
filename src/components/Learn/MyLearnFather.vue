<template>
    <div>
        <router-view>
            <template v-slot:user>
                <user-infor></user-infor>
            </template>
        </router-view>
    </div>
</template>

<script>
    import UserInfor from "@/views/xybbz/user/UserInfor";
    export default {
        name: "MyLearnFather",
        components: {
            UserInfor
        }
    }
</script>

<style scoped>

</style>