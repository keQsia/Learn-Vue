<template>
  <div class="app">
    <h1>{{ msg }}来到{{ schoolName }}</h1>
    <!-- 通过父组件给子组件传递一个自定义事件实现子给父传递数据（第一种，使用@或v-on -->
    <School @lanshou.once="sendSchoolName" @demo="sendMsg"/>

    <!-- 通过父组件给子组件传递一个自定义事件实现子给父传递数据（第二种，使用ref） -->
    <!-- <School ref="student"/> -->
    <StudentName/>
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue';
  import StudentName from './components/StudentName.vue';

  export default {
    name: 'App',
    components:{School, StudentName},
    data() {
      return {
        msg: '欢迎',
        schoolName: '',
      }
    },
    methods: {
      sendSchoolName(name){
        console.log('App收到学校名：', name);
        this.schoolName = name;
      },
      sendMsg(){
        console.log('demo');
      }
    },
    mounted() {
      // this.$refs.student.$on('lanshou',this.sendSchoolName)；
      // this.$refs.student.$once('lanshou',this.sendSchoolName);//一次性绑定自定义事件
    }
  }
</script>

<style>
  .app{
    background-color: pink;
    padding: 5px;
  }
</style>