<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
  export default {
    name: 'About',
    //通过路由规则进入该组件时调用
    beforeRouteEnter(to,from,next){
      if (to.meta.isAuth) {//判断是否需要鉴定权限
        if (localStorage.getItem('school') === 'Harvard') {
          next();
        } else {
          alert('学校错误无权限');
        }
      } else {
        next();
      }
    },
    //通过路由规则离开该组件时调用
    beforeRouteLeave(to,from,next){
      next();
    }
  }
</script>

<style>
  
</style>