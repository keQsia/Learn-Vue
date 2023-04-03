<template>
  <div>
    <h1>当前计算为：{{ sum }}</h1>
    <h2>当前和放大10倍为：{{ bigSum }}</h2>
    <h3 style="color: red;">我们有{{ personList.length }}人</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前奇数再加</button>
    <button @click="incrementWait(n)">等一等加</button>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
  export default {
    name: 'Count',
    data() {
      return {
        n: 1,//用户选择数字
      }
    },
    computed: {
      //借助mapState生成计算属性，从State中读取数据（数组写法写法）
      ...mapState('countAbout',['sum','school','subject','personList']),
      ...mapState('personAbout',['personList']),
      //同理mapGetters也有两种写法
      // ...mapGetters({bigSum:'bigSum'}),
      ...mapGetters('countAbout',['bigSum'])
    },
    methods: {
      //借助mapMutations生成对应方法，方法会调用commit去联系mutations（对象写法）
      ...mapMutations('countAbout',{increment:'ADD',decrement:'MINUS'}),
      //对象形式
      ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'}),
      //数组形式
      // ...mapActions(['addOdd','addWait']),
    }
  }
</script>

<style>
  * {
    margin-right: 10px;
  }
</style>