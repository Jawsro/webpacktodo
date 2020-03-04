<template>
  <div id="helper">
    <span class="left">2 left</span>
    <span class="tabs">
      <span 
        v-for="(item,index) in state"
        :key="index"
        :class="[item,filter===item?'actived':'']"
        @click='togglefiter(item)'>
        {{item}}
      </span>
    </span>
    <span class="clear" @click="ClearAllCompleted">Clear Completed</span>
  </div>
</template>
<script>
  export default{
    props:{
      filter:{
        type:String,
        required:true
      }
    },
    data(){
      return{
        state:["all","active","completed"]
      }
    },
    methods:{
      ClearAllCompleted(){},
      togglefiter(){}
    }
  }
</script>
<style lang="stylus" scoped>
#helper
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
    .left
        text-align left
        width 150px
        padding 0 10px
        box-sizing border-box
    .clear
        text-align right
        padding 0 10px
        width 150px
        cursor pointer
        box-sizing border-box
    .tabs
        width 200px
        padding 0 10px
        box-sizing border-box
        display flex
        justify-content space-between
        *
          display inline-block
          padding 0 10px
          cursor pointer
          border 1px solid rgba(175,47,47,0)
          &.actived
              border-color rgba(175,47,47,0.4)
              border-radius 5px
</style>