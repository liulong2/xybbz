<template>
    <a-button type="primary" @click="openMessage">
        Open the message box
    </a-button>
</template>
<script>
    const key = 'updatable';
    export default {
        name: "test2",
        methods: {
            openMessage() {
                this.$message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Loaded!', key, duration: 2 });
                }, 1000);
            },
        },
    };
</script>
