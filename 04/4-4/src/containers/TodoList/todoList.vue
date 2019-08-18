<template>
  <div class="hello">
    <Header @add="addTodoItem"/>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'TodoList',
  components: {
      Header
  },
  methods: {
      addTodoItem() {
          
      }
  }
}
</script>