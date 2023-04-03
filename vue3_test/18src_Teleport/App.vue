<template>
  <div class="app">
    <h3>我是App祖先</h3>
    <Child></Child>
  </div>
</template>

<script lang='js'>
  import { provide, reactive,toRefs } from 'vue';
  import Child from './components/Child';

  export default {
    name:'App',
    components:{Child},
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>