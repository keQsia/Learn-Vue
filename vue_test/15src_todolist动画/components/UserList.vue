<template>
  <ul class="todo-main">
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInRight"
      leave-active-class="animate__backOutRight"
      appear
      >
        <UserItem
        v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"
        />
    </transition-group>
  </ul>
</template>

<script>
  import 'animate.css';
  import UserItem from './UserItem.vue';
  export default {
    name: 'UserList',
    components: { UserItem },
    props: ['todos']
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>