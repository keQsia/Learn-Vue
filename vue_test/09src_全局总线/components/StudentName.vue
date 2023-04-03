<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生名字：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      age: 18
    }
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello',this.name);
    }
  }
}
</script>

<style>
  .student {
    background-color: aqua;
    padding: 5px;
    margin-top: 30px;
  }
</style>