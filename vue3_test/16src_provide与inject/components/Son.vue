<template>
  <div class="son">
    <h3>我是Son孙子组件，{{ car.name }}--{{ car.price }}</h3>
  </div>
</template>

<script lang='js'>
  import { inject } from 'vue';

  export default {
    name:'Son',
    setup(){
      let car = inject('car')
      return {car}
    },
  }
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
</style>