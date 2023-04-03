<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  // 引入组件
  import School from './School';
  import Student from '../../14单文件组件/Student.vue';

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