<template>
  <div>
    <h1>当前计算为：{{ sum }}</h1>
    <h2>当前和放大10倍为：{{ bigSum }}</h2>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前奇数再加</button>
    <button @click="incrementWait">等一等加</button>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  export default {
    name: 'Count',
    data() {
      return {
        n: 1,//用户选择数字
      }
    },
    computed: {
      //借助mapState生成计算属性，从State中读取数据（数组写法写法）
      ...mapState(['sum','school','subject']),
      //同理mapGetters也有两种写法
      // ...mapGetters({bigSum:'bigSum'}),
      ...mapGetters(['bigSum'])
    },
    methods: {
      increment(){
        // this.sum += this.n;
        this.$store.commit('ADD',this.n);
      },
      decrement(){
        // this.sum -= this.n;
        this.$store.commit('MINUS',this.n);
      },
      incrementOdd(){
        this.$store.dispatch('addOdd',this.n);
      },
      incrementWait(){
        this.$store.dispatch('addWait',this.n);
      },
    }
  }
</script>

<style>
  * {
    margin-right: 10px;
  }
</style>