<template>
  <div>
    <ul>
      <li :style="{opacity}">热烈欢迎</li>
      <li>news001 <input type="text"></li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'News',
    data() {
      return {
        opacity:1
      }
    },
    // beforeDestroy() {
    //   clearInterval(this.timer);
    // },
    // mounted(){
    //   this.timer = setInterval(() => {
    //     this.opacity -=0.01;
    //     if(this.opacity <= 0) this.opacity = 1
    //   }, 16);
    // },
    activated() {
      this.timer = setInterval(() => {
        this.opacity -=0.01;
        if(this.opacity <= 0) this.opacity = 1
      }, 16);
    },
    deactivated() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang=''>
  
</style>