<template>
    <div id="right">
        <slot name="left"/>
        <a-button @click.stop="deleteClick" type="danger" :size="size">
            删除
        </a-button>
        <slot name="right"/>
    </div>
</template>

<script>
    import {deleteData} from '@/api/generator/api'
    import {isNull} from "../../utils/utils";
    import PublicAlert from "./PublicAlert";

    export default {
        name: "PublicRightButton",
        components: {
            PublicAlert
        },
        props: {
            size: {
                type: String,
                default: 'large'
            },
            id: {
                type: String,
                default: ''
            }

        },
        data() {
          return {
              ids: []
          }
        },
        methods: {
            deleteClick() {
                const key = 'del'
                this.$message.loading({content: '删除中', key});
                deleteData(this.id).then(res => {
                    setTimeout(() => {
                        this.$message.success({content: '删除成功', key, duration: 2});
                    }, 600)
                    this.$emit('imageLoad')
                }).catch(error => {
                    setTimeout(() => {
                        this.$message.error({content: '删除失败', key, duration: 2});
                    }, 600)
                })

            }
        }
    }
</script>

<style scoped>

</style>