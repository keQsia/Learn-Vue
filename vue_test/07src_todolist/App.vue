<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <!-- 下面代码也能实现功能，但是修改了props有点违反原则 -->
        <!-- <input type="checkbox" v-model="rodo.done"/> -->
        <UserList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :deleteTodo="deleteTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入School组件
  import MyHeader from './components/MyHeader.vue';
  import UserList from './components/UserList.vue';
  import MyFooter from './components/MyFooter.vue';

  export default {
    name: 'App',
    components:{MyHeader, UserList, MyFooter},
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      //添加todo
      addTodo(todoObj){
        this.todos.unshift(todoObj);
      },
      //todo勾选改变
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done;
        })
      },
      //删除一个todo
      deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id )
      },
      //全选或者取消全选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done;
        })
      }
    },
    watch: {
      todos: {
        deep: true,//对象内部的属性需要深度监视才能探测到
        handler(value){//value接受变量产生的新值
          localStorage.setItem('todos',JSON.stringify(value));
        }
      }
    }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>