<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <School name="家里蹲" address="上海" :score="13" assem="great"/>
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue';

  export default {
    name: 'App',
    data() {
      return {
        msg: '欢迎'
      }
    },
    components:{School},
  }
</script>