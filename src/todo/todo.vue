<template>
  <div class="todo">
    <input 
      type="text"
      class="input"
      autofocus="autofocus"
      placeholder="接下来去做什么"
      @keyup.enter="addTodo"
      > 
      <todo-item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo">
      </todo-item>
      <Tabs 
        :filter="filter" 
        :todos="todos" 
        @toggle="toggleFilter"
        @clearAll="clearAllCompleted"></Tabs>
  </div>
</template>
<script>
  import TodoItem from"./item.vue"
  import Tabs from"./tabs.vue"
  let id=0
   export default{
     data(){
       return {
          todos:[],
          filter:"all"
       }
     },
      components:{
       TodoItem,
       Tabs
      },
      computed:{
        filteredTodos(){
          if(this.filter ==="all"){
            return this.todos
          }
          const completed= this.filter==='completed'
          return this.todos.filter(todo=>completed===todo.completed)
        }
      },
      methods:{
        addTodo(e){//回车键事件
          this.todos.unshift({
            id:id++,
            content:e.target.value.trim(),
            completed:false
          })
          e.target.value = ''
          //console.log(this.todos)
        },
        deleteTodo(id){
          this.todos.splice(this.todos.findIndex(todo =>todo.id===id),1)
        },
        toggleFilter(state){
          this.filter=state
        },
        clearAllCompleted(){
          this.todos=this.todos.filter(todo=>!todo.completed)
        }
      }
    }
</script>
<style lang="stylus" scoped>
  .todo
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
    .input
      position:relative
      margin 0
      width 100%
      font-size 24px
      font-family inherit
      font-weight inherit 
      line-height 1.4em
      border none
      outline none 
      color inherit 
      box-sizing border-box
      font-smoothing antialiased
      padding 16px 16px 16px 60px
      box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, 0.03)
</style>