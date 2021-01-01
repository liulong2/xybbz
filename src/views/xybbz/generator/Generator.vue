<template>
    <div id="generator">
        用户名<input type="text" v-model="userName">
        <br>
        密码<input type="text" v-model="password">
        <button @click.stop="signIn">请求登陆</button>
    </div>
</template>

<script>
import {getList} from '../../../api/generator/api'
export default {
    name: "Generator",
    data() {
      return {
          password: '',
          userName: ''
      }
    },
    methods: {
        signIn() {
            getList(this.userName, this.password).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
        }
    }

}
</script>

<style scoped>

</style>
