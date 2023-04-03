<template>
  <div class="school">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js';
  export default {
    name: 'School',
    data() {
      return {
        name: '家里蹲',
        address: '上海'
      }
    },
    methods: {
      demo(msgName, data){
        console.log('有人发布消息，hello的回调执行了',msgName,data);
      }
    },
    mounted(){
      // console.log('School', this.$on);
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件，收到了数据', data)
      // })
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId);
    }
  }
</script>

<style>
  .school {
    background-color: grey;
    padding: 5px;
  }
</style>