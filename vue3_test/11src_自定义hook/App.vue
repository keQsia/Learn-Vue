<template>
  <h2>当前和：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为：x {{ point.x }} y {{ point.y }}</h2>
</template>

<script>
import {ref} from 'vue'
import usePoint from './hooks/usePoint'
export default {
  name: 'App',
  setup() {
    let sum = ref(0);
    let point = usePoint();
    
    // console.log('setup')

    return {
      sum,
      point
    }
  },
  //#region 
  /* beforeCreate() {
    console.log('---beforeCreate---')
  },
  created() {
    console.log('---created---')
  },
  beforeMount() {
    console.log('---beforeMount---')
  },
  mounted() {
    console.log('---mounted---')
  },
  beforeUpdate() {
    console.log('---beforeUpdate---')
  },
  updated() {
    console.log('---updated---')
  },
  beforeUnmount() {//可以继续使用Vue2生命周期钩子，但是有两个更名：
    console.log('---beforeUnmount---')
  },
  unmounted() {
    console.log('---unmounted---')
  } */
  //#endregion
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
