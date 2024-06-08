<template>
  <Home/>
</template>

<script>
import Home from '@/components/Home.vue'
import InputForm from '@/components/InputForm.vue'
import CaseOverview from '@/components/CaseOverview.vue'

export default {
  name: 'App',
  components: {Home, InputForm, CaseOverview}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a1c2c;
  background: #f6f7fa;
}

body {
  margin: 0;
  padding: 0;
}
</style>
