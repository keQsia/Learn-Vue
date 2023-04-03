<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <School/>
    <StudentName/>
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue';
  import StudentName from './components/StudentName.vue';

  export default {
    name: 'App',
    data() {
      return {
        msg: '欢迎'
      }
    },
    components:{School, StudentName},
  }
</script>