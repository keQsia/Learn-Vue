<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup() {
    //自定义ref
    function myRef(value,delay) {
      let timmer
      return customRef((track,trigger) => {
        return {
          get() {
            track();//追踪value的变化，标记其是需要更新的
            return value;
          },
          set(newValue) {
            value = newValue;
            clearTimeout(timmer)
            timmer = setTimeout(() => {
              trigger();//通知Vue重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue提供的ref
    let keyWord = myRef('hello',500)//使用自定义的ref，实现防抖效果
    return {keyWord}
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
