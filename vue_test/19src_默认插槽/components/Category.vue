<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等组件使用者填充 -->
    <slot>没有内容用这段文字替代</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['title']
  }
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
</style>