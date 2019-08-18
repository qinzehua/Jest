<template>
  <div class="hello">
    <h1 class="mm">{{ msg }}</h1>
    <h1 class="mm">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>