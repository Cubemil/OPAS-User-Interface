<template>
    <InputForm />
</template>

<script>
import InputForm from './components/InputForm.vue'

export default {
  name: 'App',
  components: { InputForm }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin : 0;
  background: #1b2d36;
}

</style>
