<template>
    <div id="user">
        <p id="pTitle">登陆账号</p>
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" labelAlign="right" layout="horizontal"
                      v-bind="layout" id="formUser">
            <a-form-model-item has-feedback prop="userName">
                <a-input v-model.number="ruleForm.userName" placeholder="请输入账号">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-model-item>
            <a-form-model-item has-feedback prop="password">
                <a-input v-model="ruleForm.password" type="password" placeholder="请输入密码">
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 11 }">
                <a-button type="primary" @click="submitForm('ruleForm')">
                    登陆
                </a-button>
            </a-form-model-item>
        </a-form-model>
        <!--        -->
    </div>
</template>

<script>
    import Vue from 'vue'
    import {FormModel} from 'ant-design-vue'
    import {logIn} from '@/api/user/index'
    import {setLocalToken} from '@/utils/local'
    import global from '@/config/global'
    import { setToken } from '@/utils/auth'
    import { mapActions } from 'vuex'

    Vue.use(FormModel);
    export default {
        name: "User",
        data() {
            let checkPending;
            let checkAge = (rule, value, callback) => {
                clearTimeout(checkPending);
                if (!value) {
                    return callback(new Error('请输入用户名'));
                }
                checkPending = setTimeout(() => {
                    callback();
                }, 1000);
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请填入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    password: '',
                    userName: '',
                },
                rules: {
                    password: [{validator: validatePass, trigger: 'change'}],
                    userName: [{validator: checkAge, trigger: 'change'}],
                },
                layout: {
                    labelCol: {span: 10, offset: 1},
                    wrapperCol: {span: 12, offset: 6},
                },
            };
        },
        created() {
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        logIn(this.ruleForm.userName, this.ruleForm.password).then(data => {
                            let context = data.data.data.tOKEN;
                            let keyName = global.keyName;
                            let type = false
                            const obj = {keyName, context, type}
                            setLocalToken(obj)
                            setToken(context);
                            this.$router.push('/appMain')
                        }).catch(error => {
                            console.log(error);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        computed: {
            ...mapActions(['setDisplay'])
        }
    }
</script>

<style scoped>
    #user {
        border-radius: 15px 40px 15px 40px;
    }

    #formUser {
        background-color: white;
        position: relative;
        top: 19%;
        height: 200px;
        border-radius: 0px 0px 40px 40px;
    }

    #pTitle {
        /*height: 150px;*/
        position: relative;
        top: 22px;
        bottom: 10px;
        font-size: 22px;
        line-height: 150px;
        text-align: center;
        background-color: white;
        height: 150px;
        border-radius: 40px 40px 0px 0px
        /*box-shadow: 10px 10px 5px #888888;*/
    }
</style>
