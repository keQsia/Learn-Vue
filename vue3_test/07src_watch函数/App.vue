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
    let person = reactive({
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

    //二、监视ref定义的多个响应式数据
    /* watch([sum,msg],(newValue,oldValue)=>{
      console.log('sum变了',newValue,oldValue)
    }) */

    //三、监视reactive定义的一个响应式数据，但是此处无法正确获取oldValue，强制开启了深度监视deep无效
    /* watch(person,(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{immediate:true}) */

    //四、监视reactive定义的一个响应式数据中的某个属性
    /* watch(()=>person.name,(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{immediate:true}) */

    //五、监视reactive定义一个响应式数据中的某些属性
    /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{immediate:true}) */

    //特殊情况
    /* watch([()=>person.job],(newValue,oldValue)=>{
      console.log('person变了',newValue,oldValue)
    },{deep:true})//由于监视的是reactive所定义的对象中的属性，所以deep配置有效 */

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
