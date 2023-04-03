<template>
  <!-- 组件的结构 -->
  <div class="test">
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
  .test {
    background-color: aqua;
  }
</style>