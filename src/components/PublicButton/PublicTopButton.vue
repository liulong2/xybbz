<template>
    <div id="public" style="width: 300px">
        <slot name="left"/>
        <a-button v-if="isAdd" class="child" type="primary" :size="size">
            新增
        </a-button>

        <a-button v-if="isDelete" @click.stop="deleteClick" class="child" type="danger" :size="size">
            删除
        </a-button>
        <slot name="right"/>
    </div>
</template>

<script>
    import {isNull,arrayToStr} from "../../utils/utils";
    import {deleteData} from '@/api/generator/api'
    import PublicAlert from "./PublicAlert";

    export default {
        name: "PublicButton",
        components: {
            PublicAlert
        },
        props: {
            breadth: {
                type: String,
                default: "30px"
            },
            tableIds: {
                type: Array,
                default() {
                    return []
                }
            },
            isAdd: {
                type: Boolean,
                default: true
            },
            isDelete: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                size: 'large',

            };
        },
        methods: {
            deleteClick() {
                const key = 'del'
                this.$message.loading({content: '删除中', key});
                if (!isNull(this.tableIds)) {
                    let str = '';
                    str = arrayToStr(this.tableIds);

                    deleteData(str).then(res => {

                        if (res.status === 200) {
                            setTimeout(() => {
                                this.$message.success({content: '删除成功', key, duration: 2});
                            }, 600)
                            this.$emit('imageLoad')
                        }
                    }).catch(error => {
                        setTimeout(() => {
                            this.$message.error({content: '删除失败', key, duration: 2});
                        }, 600)
                    })
                } else {

                    this.$message.error({content: '请选择一条数据', key, duration: 2});

                }
            }
        }
    }
</script>

<style scoped>
    #public {

        padding: 6px 0;

    }

    .child {
        margin: 0 0 0 16px
        /*width: 25%;*/
    }
</style>