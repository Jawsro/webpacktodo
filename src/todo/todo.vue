<template>
  <div class="todo">
    <input 
      type="text"
      class="input"
      autofocus="autofocus"
      placeholder="接下来去做什么"
      @keyup.enter="addTodo"
      > 
      <todo-item :todo="todo"></todo-item>
      <Tabs :filter="filter"></Tabs>
  </div>
</template>
<script>
  import TodoItem from"./item.vue"
  import Tabs from"./tabs.vue"
   export default{
     data(){
       return {
         todo:{
           id:0,
           content:'this id todo',
           completed:false
         },
         filter:"all"
       }
     },
      components:{
       TodoItem,
       Tabs
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
      font-size 18px
      font-family inherit
      font-weight inherit 
      line-height 1.4em
      border none
      outline none 
      color inherit 
      box-sizing border-box
      font-smoothing antialiased
      padding 16px 16px 16px 60px
      box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>