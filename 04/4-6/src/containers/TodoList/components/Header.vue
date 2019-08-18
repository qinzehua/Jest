<template>
  <div class="header">
    <div class="header-contain">
      TodoList
      <input v-model="inputValue"
           class="header-input"
           placeholder="TodoItem"
           @keyup.enter="addTodoItem"
           type="text" data-test="input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  .header{
    line-height: 60px;
    background: #333;
  }
  .header-contain{
    width: 600px;
    margin : 0 auto;
    color: #fff;
    font-size 20px;
  }
  .header-input{
    float: right;
    width 360px;
    margin-top :16px;
    line-height 24px;
    outline none;
    color #333;
    text-indent 10px;
  }
</style>
