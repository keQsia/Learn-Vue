<template>
  <div class="app">
    <h3>我是App祖先</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script lang='js'>
  import { defineAsyncComponent } from 'vue';//静态引入
  // import Child from './components/Child';
  const Child = defineAsyncComponent(() => import('./components/Child.vue'))//动态引入

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