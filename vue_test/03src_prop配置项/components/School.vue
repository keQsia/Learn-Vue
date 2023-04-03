<template>
  <div class="school">
    <h2>学校名称{{ myName }}</h2>
    <h2>学校地址{{ address }}</h2>
    <h2>学校得分{{ score+1 }}</h2>
    <h2>学校评价{{ assem }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        myName: this.name
      }
    },
    // props:['name','address','score','assem']//简单接收

    //接收同时对数据畸形类型限制
    // props: {
    //   name: String,
    //   address: Number,
    //   score: Number,
    //   assem: String
    // }

    // 接收的同时对数据进行类型限制+默认值指定+必要性限制
    props: {
      name: {
        type: String,//类型是字符串
        required: true
      },
      address: {
        type: String,
        default: '上海'//默认值
      },
      score: {
        type: Number,
        required: true
      },
      assem: {
        type: String,
        default: '上海'
      }
    }
  }
</script>

<style>
  .school {
    background-color: grey;
  }
</style>