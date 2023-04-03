<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    // 组件交互相关的代码（数据、方法等）
    name:'SchoolName',//最好和文件名保持一致
    data() {
        return {
            name: '北京大学',
            address: '北京昌平'
        }
    },
    methods: {
        showName() {
            alert(this.name);
        }
    }
}
</script>

<style>
/* 组件的格式 */
    .demo{
        background-color: orange;
    }
</style>