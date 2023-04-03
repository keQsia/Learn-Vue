<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪资：{{ job.salary }}</h3>
  <h3>测试的数据c：{{job.a.b.c}}</h3>
  <h3>{{ hobby }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  // 此处只是设置一下setup，暂时不考虑响应式的问题
  setup() {
    let name = ref('张三');
    let age = ref(18);
    let job = reactive({
      type: '前端工程师',
      salary: '30K',
      a:{
        b:{
          c: 666
        }
      }
    });
    let hobby = reactive(['抽烟','喝酒','烫头'])
    function changeInfo() {
      name.value = '李四'
      age.value = 48
      job.type = '后端'
      job.salary = '18K'
      job.a.b.c = 999
      hobby[0] = '学习'
      // console.log(job)
    }
    //返回一个对象
    return {
      name,
      age,
      changeInfo,
      job,
      hobby
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
