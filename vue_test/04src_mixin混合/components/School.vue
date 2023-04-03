<template>
  <div class="school">
    <h2 @click="showName">学校名称{{ name }}</h2>
    <h2 @click="showName">学校地址{{ address }}</h2>
  </div>
</template>

<script>
  import {mixin} from '../mixin';
  export default {
    name: 'School',
    data() {
      return {
        name: '家里蹲',
        address: '上海'
      }
    },
    methods: {
      showName(){
        alert(this.name);
      }
    },
    mixins: [mixin]
  }
</script>

<style>
  .school {
    background-color: grey;
  }
</style>