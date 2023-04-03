<template>
  <h4>当前和：{{sum}}</h4>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <h3>座驾信息：{{person.car}}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人配个车</button>
  <button @click="person.car.name = '宝马'">换车名</button>
</template>

<script>
import {reactive,ref,toRefs,toRaw,markRaw} from 'vue'
export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    let person = reactive({
    // let person = reactive({//只考虑第一层响应式
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    function showRawPerson() {
      console.log(toRaw(person))
    }

    function addCar(){
      let car = {name:'奔驰',price:'40w'}
      person.car = markRaw(car)
    }

    return {
      // name:toRef(person, 'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
      ...toRefs(person),
      person,
      showRawPerson,
      sum,
      addCar
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
