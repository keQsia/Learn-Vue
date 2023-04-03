<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="outin" appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">你好啊</h1>
    </transition-group>
  </div>
</template>

<script>
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

  .outin-enter-active, .outin-leave-active {
    transition: 0.5s linear;
  }

  /* 进入的起点 */
  .outin-leave-to, .outin-enter{
    transform: translateX(-100%);
  }

  /* 终点 */
  .outin-leave, .outin-enter-to{
    transform: translateX(0);
  }

</style>