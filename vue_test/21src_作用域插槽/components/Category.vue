<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games">默认内容</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团'],
      }
    }
  }
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
</style>