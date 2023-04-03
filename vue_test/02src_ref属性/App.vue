<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch"/>
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
    methods: {
      showDOM(){
        console.log(this.$refs.title);//真实DOM元素
        console.log(this.$refs.btn);
        console.log(this.$refs.sch);//School组件的实例对象
      }
    },
  }
</script>