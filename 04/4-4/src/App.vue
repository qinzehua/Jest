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
