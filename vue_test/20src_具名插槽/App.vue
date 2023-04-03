<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="\assets\food.webp" alt="">
      <a slot="footer" href="https://search.bilibili.com/all?vt=7015023
      5&keyword=%E7%BE%8E%E9%A3%9F&from_source=webtop_sear
      ch&spm_id_from=333.1007&search_source=5">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.bilibili.com/v/game/stand_alone">单机游戏</a>
        <a href="https://www.bilibili.com/v/game/online">网络游戏</a>
      </div>
      
    </Category>
    <Category title="电影" :listData="films">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.bilibili.com/v/game/stand_alone">经典</a>
          <a href="https://www.bilibili.com/v/game/online">热门</a>
          <a href="https://www.bilibili.com/v/game/online">推荐</a>
        </div>
        <h4 class="foot">欢迎观影</h4>
      </template>
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
  .container, .foot {
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