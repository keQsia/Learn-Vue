<template>
  <div>
    <div class="row">
      <!-- 展示用户列表 -->
      <div v-show="dataObj.users.length" class="card" v-for="user in dataObj.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width:100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="dataObj.isFirst">欢迎使用</h1>
        <!-- 展示加载中 -->
        <h1 v-show="dataObj.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="dataObj.errMsg">{{ dataObj.errMsg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        dataObj: {
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users:[]
        }
      }
    },
    mounted() {
      this.$bus.$on('updateListData',(dataObj)=>{
        this.dataObj = {...this.dataObj,...dataObj};
        console.log(this.users);
      })
    }
  }
</script>

<style scoped>
  .album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>