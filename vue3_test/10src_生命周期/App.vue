<template>
  <h2>当前和：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default {
  name: 'App',
  setup() {
    let sum = ref(0);

    //通过组合api形式使用生命周期钩子
    onBeforeMount(()=> {
      console.log('onBeforeMount');
    })
    onMounted(()=> {
      console.log('onMounted');
    })
    onBeforeUpdate(()=> {
      console.log('onBeforeUpdate');
    })
    onUpdated(()=> {
      console.log('onUpdated');
    })
    onBeforeUnmount(()=> {
      console.log('onBeforeUnmount');
    })
    onUnmounted(()=> {
      console.log('onUnmounted');
    })

    console.log('setup')

    return {
      sum,
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
