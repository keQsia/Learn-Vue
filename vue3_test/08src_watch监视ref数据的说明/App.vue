<template>
  <h2>当前和：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {ref,watch,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let sum = ref(0);
    let msg = ref('你好')
    let person = ref({
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    //一、监视ref定义的响应式数据
    /* watch(sum,(newValue,oldValue)=>{
      console.log('sum变了',newValue,oldValue)
    },{immediate:true}) */

    //ref想要深度监视的办法一
    /* watch(person.value,(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    }) */

    //办法二
    watch(person,(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{deep:true})


    return {
      sum,
      msg,
      person
    }
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
