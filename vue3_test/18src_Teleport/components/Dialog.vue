<template>
  <div>
    <button @click="isShow=true">点我弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是弹窗</h3>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang='js'>
import {ref} from 'vue'
  export default {
    name:'Dialog',
    setup(){
      let isShow = ref(false)
      return {isShow}
    }
  }
</script>

<style>
  .mask {
    position: absolute;
    top: 0; bottom: 0;left: 0;right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog {
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
    background-color: white;
    text-align: center;
  }
</style>