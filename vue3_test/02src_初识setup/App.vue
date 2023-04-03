<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">打招呼</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // 此处只是设置一下setup，暂时不考虑响应式的问题
  setup() {
    let name = '张三';
    let age = 18;
    function sayHello() {
      alert(`我是${name}，我${age}岁了`);
    }
    //返回一个对象
    return {
      name,
      age,
      sayHello
    }

    //返回一个渲染函数
    return ()=>{return h('h1','家里蹲')}
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
