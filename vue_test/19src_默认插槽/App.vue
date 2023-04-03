<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="\assets\food.webp" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue';
  export default {
    name: 'App',
    components: { Category },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾'], 
        games: ['红色警戒', '穿越火线', '劲舞团'], 
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
</style>