<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生名字：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
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