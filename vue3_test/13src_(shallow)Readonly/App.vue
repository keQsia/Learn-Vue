<template>
  <h4>当前和：{{sum}}</h4>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive,ref,toRefs,readonly,shallowReadonly} from 'vue'
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

    // person = readonly(person)
    person = shallowReadonly(person)

    // const x = toRefs(person)

    return {
      // name:toRef(person, 'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
      ...toRefs(person),
      sum
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
