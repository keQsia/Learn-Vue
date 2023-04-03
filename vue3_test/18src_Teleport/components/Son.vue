<template>
  <div class="son">
    <h3>我是Son孙子组件</h3>
    <Dialog />
  </div>
</template>

<script lang='js'>
  import { inject } from 'vue';
  import Dialog from './Dialog.vue';
  export default {
    name:'Son',
    components:{Dialog}
  }
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
</style>