<template>
  <div class="child">
    <h3>我是Child子组件</h3>
    <Son></Son>
  </div>
</template>

<script lang='js'>
  import Son from './Son'
  export default {
    name:'Child',
    components:{Son}
  }
</script>

<style>
  .child{
    background-color: yellow;
    padding: 10px;
  }
</style>