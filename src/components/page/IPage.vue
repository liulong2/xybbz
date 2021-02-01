<template>
    <div>
        <a-pagination v-model="current" :page-size="pageSize" :total="total" @change="onChange" show-less-items
                      :hide-on-single-page="true"/>
    </div>
</template>

<script>
    export default {
        name: "IPage",
        props: {
            pageSize: {
                type: Number,
                default: 20
            },
            total: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                current: 1
            }
        },
        methods: {
            onChange(current) {
                this.current = current;
                this.$emit("updateDate",this.current)
            }
        }
    }
</script>

<style scoped>

</style>