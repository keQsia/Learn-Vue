<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学生名字：{{ name }}</h2>
        <h2 @click="showName">学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    import {mixin} from '../mixin';
    export default {
        // 组件交互相关的代码（数据、方法等）
        name:'StudentName',//最好和文件名保持一致
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
        mixins: [mixin]
    }
</script>