<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__wobble"
      leave-active-class="animate__backOutDown"
      appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">你好啊</h1>
    </transition-group>
  </div>
</template>

<script>
  // 安装库并引入$ npm install animate.css --save
  import 'animate.css'
  export default {
    name:'Test2',
    data(){
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
</style>