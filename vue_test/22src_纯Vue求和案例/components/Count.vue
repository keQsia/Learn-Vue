<template>
  <div>
    <h1>当前计算为：{{sum}}</h1>
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
  export default {
    name: 'Count',
    data() {
      return {
        n: 1,//用户选择数字
        sum: 0//当前的和
      }
    },
    methods: {
      increment(){
        this.sum += this.n;
      },
      decrement(){
        this.sum -= this.n;
      },
      incrementOdd(){
        if(this.sum % 2){
          this.sum += this.n;
        }
      },
      incrementWait(){
        setTimeout(() => {
          //函数体
          this.sum += this.n;
        },500)
      },
    }
  }
</script>

<style>
  * {
    margin-right: 10px;
  }
</style>