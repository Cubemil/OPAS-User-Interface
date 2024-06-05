<template>
  <Home/>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a1c2c;
  /* 100vh represent 100% of viewport's height / viewable screen's height -> content can now occupy entire screen */
  min-height: 100vh;
  background: #f6f7fa;
}

/* removing default margin and padding */
* {
  margin: 0;
  padding: 0;
}
</style>
