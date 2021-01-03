<template>
  <div id="app">
    <log-in v-if="getIsDisplay" @updateNewApp="updateNewApp">{{getIsDisplay}}</log-in>
    <a-layout v-else id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <div class="logo" >
                    <span id="title">
                        我是你爸爸
                    </span>
        </div>
        <a-menu
                theme="dark"
                mode="horizontal"
                :default-selected-keys="['1']"
                :style="{ lineHeight: '64px', width: '500px' }"
        >
          <a-menu-item key="1">
            首页
          </a-menu-item>
          <a-menu-item key="2">
            添加
          </a-menu-item>
          <a-menu-item key="3">
            三方
          </a-menu-item>
        </a-menu>
      <div class="logo">
        <span>
          啦啦啦啦啦
        </span>
      </div>
      </a-layout-header>
      <a-layout-content id="layout-content" style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item><a >Home</a></a-breadcrumb-item>
          <a-breadcrumb-item><a >Home</a></a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
          <a-config-provider :locale="locale">
            <!--    <keep-alive>-->
            <router-view></router-view>
            <!--    </keep-alive>-->
          </a-config-provider>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        乱七八糟的网站
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<script>
  import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
  import LogIn from "./views/xybbz/user/LogIn";
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
  name: 'App',
  data() {
    return {
      locale: zhCN,
      isDisplay: true
    }
  },
    created() {
      this.setDisplay
    },
    components: {
    LogIn
    // HelloWorld
  },
    methods: {
      updateNewApp() {
        console.log("1111111")
        // this.isDisplay = false
      }
    },
    computed: {
      ...mapGetters(['getIsDisplay']),
      ...mapActions(['setDisplay'])
    }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.logo {
  width: 120px;
  height: 31px;
  /*background: rgba(255, 255, 255, 0.2);*/
  margin: 16px 24px 16px 0;
  top: 10px;
  float: left;
  text-align:center;
  /*color: red;*/
  /*left: 10px;*/
  z-index: 1024;
}
#components-layout-demo-top {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
  z-index: 1024;
}
#layer{
  width: 100%;
  height: 100%;
}
#title{
  color: white;
  position: fixed;
  top: 15px;
  left: 0;
  width: 216px;
  height: 69px;
}
</style>
