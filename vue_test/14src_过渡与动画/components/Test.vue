<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="outin" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'Test',
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

  /* 默认使用v，有名字前面改名字 */
  .outin-enter-active {
    animation: come 0.5s linear;
  }

  .outin-leave-active {
    animation: come 0.5s linear reverse;
  }

  @keyframes come {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>