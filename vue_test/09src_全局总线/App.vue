<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School />
    <StudentName />
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue';
  import StudentName from './components/StudentName.vue';

  export default {
    name: 'App',
    components:{School, StudentName},
    data() {
      return {
        msg: '欢迎',
      }
    },
  }
</script>

<style>
  .app{
    background-color: pink;
    padding: 5px;
  }
</style>