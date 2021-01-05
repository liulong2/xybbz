<template>
    <div id="generator">

        <a-skeleton :loading="loading" active avatar>
        <PublicButton :is-add="false" @imageLoad="imageLoad" :tableIds="tableIds" breadth="400px">
            <template v-slot:left>
                <a-button class="child" type="primary" @click="generateClick" :size="size">
                    生成
                </a-button>
                <!--<a-button class="child" type="primary" @click="test2Click" :size="size">
                    跳转
                </a-button>-->
            </template>
        </PublicButton>
        <a-table bordered :row-selection="rowSelection" :columns="columns" rowKey="id" :data-source="data" :components="components"
        >
            <a slot="name" slot-scope="text">{{ text }}</a>

            <template slot="action" slot-scope="text, record">
                <public-right-button @imageLoad="imageLoad" :id="record.id"></public-right-button>
            </template>
        </a-table>
        </a-skeleton>
    </div>
</template>

<script>
    import {getList,generatorTable} from '../../../api/generator/api'
    import PublicButton from "../../../components/PublicButton/PublicTopButton";

    import Vue from 'vue';
    import VueDraggableResizable from 'vue-draggable-resizable';
    import PublicRightButton from "../../../components/PublicButton/PublicRightButton";
    import { arrayToStr } from "../../../utils/utils"


    Vue.component('vue-draggable-resizable', VueDraggableResizable);

    const columns = [
        {
            title: '表名',
            dataIndex: 'tableName',
            width: 100,
            // scopedSlots: { customRender: 'tableName' },
        },
        {
          title: '前缀名称',
          dataIndex: 'tablePrefix',
          width: 100
        },
        {
            title: '表备注',
            dataIndex: 'tableRemake',
            width: 100,
            // scopedSlots: { customRender: 'tableName' },
        },
        {
            title: '功能按钮',
            key: 'action',
            width: 200,
            scopedSlots: {customRender: 'action'},
        }
    ]


    const draggingMap = {};
    columns.forEach((col) => {
        const k = col.dataIndex || col.key;
        draggingMap[k] = col.width;
    });
    const draggingState = Vue.observable(draggingMap);

    export default {
        name: "Generator",
        components: {
            PublicRightButton,
            PublicButton,

        },
        data() {
            return {
                loading: true,
                size: 'large',
                columns: columns,
                data: [],
                components: {
                    header: {
                        cell: (h1, props, children) => {
                            let thDom = null;
                            const {key, ...restProps} = props;
                            const col = columns.find((item) => {
                                const k = item.dataIndex || item.key;
                                return k === key;
                            });
                            if (!col || !col.width) {
                                return <th {...restProps}>{children}</th>;
                            }
                            const onDrag = (x) => {
                                draggingState[key] = 0;
                                col.width = Math.max(x, 1);
                            };
                            const onDragstop = () => {
                                draggingState[key] = thDom.getBoundingClientRect().width;
                            };
                            return (
                                <th
                            {...restProps}
                            v-ant-ref={(r) => { thDom = r; }}
                            width={draggingState[key]}
                        class="resize-table-th"
                                >
                                {children}
                                <vue-draggable-resizable
                            key={col.dataIndex || col.key}
                        class="table-draggable-handle"
                            w={10}
                            x={ col.width || draggingState[key] }
                            z={1}
                            axis="x"
                            draggable={true}
                            resizable={false}
                            onDragging={onDrag}
                            onDragstop={onDragstop}
                                ></vue-draggable-resizable>
                                </th>
                        );
                        }
                    }
                },
                //数据
                tableNames: [
                    {

                    },
                ],
                tableIds: []
            }
        },
        created() {
            this.getData(r => {
                this.data = (r)
                setTimeout(() => {
                    this.loading = false;
                }, 300);
            });
            // this.getRouter(this.$route)
            // this.setColumns()
            // this.setComponents()
        },
        methods: {
            /*test2Click() {
                this.$router.push('/test2')
            },*/
            generateClick() {
                const key = 'generator'
                this.$message.loading({content: '删除中', key});
                let str =''
                str = arrayToStr(this.tableIds);
                console.log(str)
                generatorTable(str).then(res => {
                    setTimeout(() => {
                        this.$message.success({content: '删除成功', key, duration: 2});
                    }, 600)
                }).catch(error => {
                    setTimeout(() => {
                        this.$message.error({content: '删除失败', key, duration: 2});
                    }, 600)
                })
            },
            imageLoad() {
                this.getData(r => {
                    this.data = []
                    this.data = (r)
                })
            },
            getData(callback) {
                getList({dataId: "1345247374037069825"}).then(res => {
                    callback(res.data.data)
                }).catch(error => {
                    this.$message.error({content: '加载失败', duration: 2});
                    // return new Error(error)
                })
            },
            setColumns() {
                console.log(this.data)
                for (const column in this.data) {
                    console.log(column)
                }

            }
        },
        computed: {
            rowSelection() {
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                        // console.log(selectedRows);
                        selectedRows.forEach(r =>{
                            this.tableIds = []
                            this.tableIds.push(r.id)
                        })
                    },
                    getCheckboxProps: record => ({
                        props: {
                            disabled: record.name === 'Disabled User', // Column configuration not to be checked
                            name: record.name,
                        },
                    }),
                };
            },
        }
    }
</script>

<style lang="less">
    #generator {
        width: 100%;
    }
    .resize-table-th {
        position: relative;
        .table-draggable-handle {
            transform: none !important;
            position: absolute;
            height: 100% !important;
            bottom: 0;
            left: auto !important;
            right: -5px;
            cursor: col-resize;
            touch-action: none;
            will-change: transform;
    }
}
</style>
