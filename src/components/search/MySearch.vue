<template>
    <div class="search">
        <a-dropdown :trigger="['click']">
            <a-input-search v-model="inputValue" placeholder="请输入搜索内容" style="width: 200px" @search="onSearch"
                            @change="handleChange">
            </a-input-search>

            <a-menu slot="overlay" v-show="isEnable">
                <!--<a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                </a-menu-item>-->
                <a-menu-divider v-if="false"/>
                <a-menu-item>
                    <a :href="searchUrl" target="_blank">Google {{inputValue}}</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
    import {isNull} from "@/utils/utils";

    export default {
        name: "MySearch",
        data() {
            return {
                dataSource: [],
                isEnable: false,
                inputValue: '',
                searchUrl: ''
            }
        },
        methods: {
            onSearch(value) {
                this.searchUrl = "https://www.google.com/search?q=" + this.inputValue
                window.open(this.searchUrl, "_blank")
            },
            handleChange(value) {
                console.log(value);
                if (!isNull(value)) {
                    this.isEnable = true
                }
                if (isNull(this.inputValue)) {
                    this.isEnable = false
                }
                this.searchUrl = "https://www.google.com/search?q=" + this.inputValue
                /*this.dataSource =
                    !value || value.indexOf('@') >= 0
                        ? []
                        : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`];*/
            },
        }
    }
</script>

<style scoped>
    .search {
        height: 46px;
        text-align: center;
        line-height: 46px;
        border-radius: 40px
        /*margin:0 auto;*/
    }


</style>
<style>
    .ant-input {
        border-radius: 20px !important;
    }
</style>