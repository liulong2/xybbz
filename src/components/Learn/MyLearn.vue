<template>
    <div class="learn">
        <a-list item-layout="horizontal" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                    <a-avatar
                            slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        }


    ];
    //学习
    export default {
        name: "MyLearn",
        data() {
            return {
                data,
            };
        },
    }
</script>

<style scoped>
.learn{
    margin-top: 5%;
    width: 40%;
    margin-right: auto;
    margin-left: auto;
    background-color: rgba(255, 255, 255, .6);
}
</style>