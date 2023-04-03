<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  // 引入组件
  import School from './components/SchoolName';
  import Student from './components/StudentName.vue';

  export default {
    name: 'App',
    components: {
      School,
      Student
    }
  }
</script>

<style lang=''>
  
</style>