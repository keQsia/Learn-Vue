<template>
  <div class="school">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <button @click="sendSchoolName">把学校名给App</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁当前student组件的实例vc</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '家里蹲',
        address: '上海'
      }
    },
    methods: {
      sendSchoolName(){
        //触发Student组件实例身上的lanshou事件
        this.$emit('lanshou',this.name);
        this.$emit('demo')
      },
      unbind(){
        // this.$off('lanshou');//解绑一个自定义事件
        // this.$off(['lanshou', 'demo']);//解绑多个自定义事件
        this.$off();//解绑所有自定义事件
      },
      death(){
        this.$destroy()//销毁了当前的student组件实例，销毁后所有student实例的自定义事件都失效了
      }
    }
  }
</script>

<style>
  .school {
    background-color: grey;
    padding: 5px;
  }
</style>