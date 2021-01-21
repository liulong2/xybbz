<template>
    <div class="container">
        <div class="content">

            <div class="login-container animated fadeInDown" style="animation-delay:.3s;"
                 :style="loginContainerStyle">
                <!--   Login   -->
                <div class="login justify-content-center" id="login-form"
                     :class="{'fadeIn': loginFormFadeIn,'animated': loginFormAnimated, 'zoomOut': loginFormZoomOut}"
                     :style="animationDelayCss">
                    <h1 class="form-title"><i class="fas fa-user" style="color:#55a0ff;"></i> <br> LOGIN
                        <hr>
                    </h1>

                    <div class="form-container animated fadeIn" style="animation-delay:.7s">
                        <!--<form method="POST">

                            <label for=""><i class="fas fa-at"></i> Email </label>
                            <input type="email" name="email" placeholder="E-mail">

                            <label for=""><i class="fab fa-slack-hash"></i> Password </label>
                            <input type="password" name="password" placeholder="Password">

                            <div class="submit-buttons">
                                <input type="submit" value="Connect">
                                <input type="button" value="Sign Up" @click="btnRegister" class="btn-register">
                            </div>

                        </form>-->
                        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" labelAlign="right"
                                      layout="horizontal"
                                      v-bind="layout" id="formUser">
                            <label for=""><i class="fas fa-at"></i> 用户名 </label>
                            <input v-model="ruleForm.userName" type="text" name="email" placeholder="请输入用户名">

                            <label for=""><i class="fab fa-slack-hash"></i> 密码 </label>
                            <input v-model="ruleForm.password" type="password" name="password" placeholder="请输入密码">

                            <div class="submit-buttons">
                                <!--<a-button class="buttonNew" type="primary" @click="submitForm('ruleForm')">
                                    登陆
                                </a-button>
                                <a-button class="btn-register" type="primary" @click="submitForm('ruleForm')">
                                    登陆
                                </a-button>-->
                                <!--<a-input type="submit" placeholder="input password" />
                                <a-input type="button" class="btn-register" value="Sign Up" />-->
                                <input type="submit" value="登录" @click="submitForm('ruleForm')">
                                <input type="button" value="Sign Up" @click="btnRegister" class="btn-register">
                            </div>
                        </a-form-model>
                    </div>
                </div>
                <!--   Login   -->

                <!--    Register    -->

                <div class="register justify-content-cente animatedr"
                     :class="{'zoomOut': registerZoomOut, 'animated': registerAnimated, 'fadeIn': registerFadeIn}"
                     :style="registerId" style="animation-delay:.3s">
                    <h1 class="form-title "><i class="fas fa-user-plus" style="color:#57efc4;"></i> <br> REGISTER
                        <hr>
                    </h1>

                    <div class="form-container animated fadeIn" style="animation-delay:.7s;">
                        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" labelAlign="right"
                                      layout="horizontal"
                                      v-bind="layout">
                            <label for=""><i class="fab fa-amilia"></i> Name </label>
                            <input type="text" name="name" placeholder="Name" required autofocus>

                            <label for=""><i class="fas fa-at"></i> Email </label>
                            <input type="email" name="email" placeholder="E-mail">

                            <label for=""><i class="fab fa-slack-hash"></i> Password </label>
                            <input type="password" name="password" placeholder="Password">

                            <label for=""><i class="fab fa-slack-hash"></i> Confirm Password </label>
                            <input type="password" name="password_confirmation" placeholder="Password">

                            <div class="submit-buttons">
                                <input type="submit" value="Register" style="background:#55efc4;">
                                <input type="button" value="Sign In" class="btn-login" @click="btnLogin">
                            </div>
                        </a-form-model>
                         <!--<form method="POST">


                             <label for=""><i class="fab fa-amilia"></i> Name </label>
                             <input type="text" name="name" placeholder="Name" required autofocus>

                             <label for=""><i class="fas fa-at"></i> Email </label>
                             <input type="email" name="email" placeholder="E-mail">

                             <label for=""><i class="fab fa-slack-hash"></i> Password </label>
                             <input type="password" name="password" placeholder="Password">

                             <label for=""><i class="fab fa-slack-hash"></i> Confirm Password </label>
                             <input type="password" name="password_confirmation" placeholder="Password">

                             <div class="submit-buttons">
                                 <input type="submit" value="Register" style="background:#55efc4;">
                                 <input type="button" value="Sign In" class="btn-login" @click="btnLogin">
                             </div>

                         </form>-->
                    </div>
                </div>

                <!--    Register    -->

                <!--<div class="login animated fadeIn" style="animation-delay:.7s; animation-duration:4s;"
                     id="login-bg"></div>-->

            </div>

        </div>
    </div>
</template>

<script>
    import {logIn} from '@/api/user/index'
    import {setLocalToken} from '@/utils/local'
    import global from '@/config/global'
    import {setToken} from '@/utils/auth'
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "MyLogin",
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

                registerFadeIn: false,
                registerAnimated: false,
                registerZoomOut: false,
                loginFormFadeIn: false,
                loginFormAnimated: false,
                loginFormZoomOut: false,
                animationDelayCss: {},
                registerId: {},
                loginContainerStyle: {}

            }
        },
        created(){
            this.setIsDisable()
        },
        computed:{

        },
        methods: {
            ...mapActions(['setDisplay']),
            ...mapGetters(['getIsDisplay']),
            setIsDisable() {
                this.setDisplay(false)
            },

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
                            this.setDisplay(true)
                            //存储到缓存中
                             context = this.getIsDisplay();
                             keyName = global.topBottomEnableName;
                             type = false
                             const enableObj = {keyName, context, type}
                            setLocalToken(enableObj)
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
            btnRegister() {
                setTimeout(() => {
                    this.loginFormFadeIn = false
                    this.registerZoomOut = false
                    this.animationDelayCss.animationDelay = '0'
                    this.registerId.animationDelay = '0'
                }, 10)
                this.loginFormAnimated = true
                this.loginFormZoomOut = true
                this.animationDelayCss.display = 'none'
                this.registerAnimated = true
                this.registerFadeIn = true
                this.registerId.display = 'block'
                this.loginContainerStyle.height = '95vh'

            },
            btnLogin() {
                setTimeout(() => {
                    this.registerFadeIn = false
                    this.loginFormZoomOut = false
                }, 10)
                this.registerAnimated = true
                this.registerZoomOut = true
                this.registerId.display = 'none'
                this.loginFormAnimated = true
                this.loginFormFadeIn = true
                this.animationDelayCss.display = 'block'
                this.loginContainerStyle.height = '70vh'
            }
        }
    }
</script>

<style scoped lang="less">
    @import 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/fontawesome.min.css';
    @import 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/brands.min.css';
    @import 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/solid.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css';
    @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
/*
    body{
        background:#f8fafc;
    }*/

    .container{
        height: 100%;
    }

    html body{
        width: 100%;
    }

    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login-container{
        /*background: white;*/
        position: relative;
        border-radius: 5px;
        display: flex;
        width: 35vw;
        height: 70vh;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.07);
        transition: .4s;
    }
    /*备份*/
    /*.login-container{
        background: white;
        position: relative;
        border-radius: 5px;
        display: flex;
        width: 70vw;
        height: 70vh;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.07);
        transition: .4s;
    }*/


    .login{
        transition: .4s;
        font-family: Comfortaa;
    }

    .login#login-form{
        width: 100%;
        display: block;
        padding: 15px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 20px;
    }
    /*备份*/
    /*.login#login-form{
        width: 50%;
        display: block;
        padding: 15px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 20px;
    }*/

    .login#login-bg{
        width: 50%;
        display: inline-flex;
        background: url(https://picsum.photos/700);
        background-size: cover;
        background-position: center center;
        float: right;
        border-radius: 0 5px 5px 0;
    }

    .register{
        width: 100%;
        /*width: 50%;*/
        display: block;
        padding: 15px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 30px;
        transition: .4s;
        font-family: Comfortaa;
        display: none;
    }


    .form-title{
        position: absolute;
        top: 11%;
        left: 0;
        right: 0;
        text-align: center;
        color: #dedede;
        font-size: 2.2em;
        font-family: Spartan;
        line-height: 1.4;
        margin-top: -24px;
    }

    .form-title hr{
        width: 75%;
        border: 2px solid #dedede1f;
        border-radius: 10px;
        margin-top: 20px;
    }

    .register .form-title{
        margin-top: -54px;
    }


    .form-container{
        padding: 25px 10px;
        border-radius: 5px;
        width: 80%;
        text-align: left;
        margin-top: 70px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    label{
        font-size: .7em;
        color: #7392ff;
        margin: 0px 0 !important;
        margin-left: 4px !important;
    }

    input{
        background: #f8fafc ;
        border: 0;
        width: 100%;
        display: block;
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 20px !important;
        outline: 0;
        transition: .4s;
    }

    input::placeholder{
        opacity: .4;
    }

    .submit-buttons{
        display: flex;
    }

    .submit-buttons input{
        width: 50%;
        text-align: center;
        color: white;
        transition: .2s;
    }

    .submit-buttons input:hover{
        opacity: .7;
    }

    .submit-buttons input:nth-of-type(1){
        border-radius: 5px 0 0 5px;
        background: #54a0ff;
    }

    .submit-buttons input:nth-of-type(2){
        border-radius: 0 5px 5px 0;
        background: #c8d6e5;
    }

    @media (max-width: 933px){
        .login#login-bg{
            width: 0;
        }

        .login#login-form,.register{
            width: 100%;
        }

        input{
            width: 100%;
        }
    }

</style>
