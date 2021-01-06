<template>
    <div id="dragonSlaying">
        <a-dropdown-button>
            屠龙宝刀
            <a-menu slot="overlay">
                <a-menu-item key="1"> <a-icon type="user" />点击就送 </a-menu-item>
                <a-menu-item key="2"> <a-icon type="user" />我系渣渣辉</a-menu-item>
                <a-menu-item key="3"> <a-icon type="user" />师兄弟 </a-menu-item>
            </a-menu>
            <a-icon slot="icon" type="user" />
        </a-dropdown-button>
    </div>
</template>

<script>
    export default {
        name: "MyDropdown"
    }
</script>

<style scoped>
#dragonSlaying{
    display: flex;
}
</style>
