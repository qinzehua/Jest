<template>
  <div id="app">
    <TodoList/>
  </div>
</template>
<script>
import TodoList from './containers/TodoList/todoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
