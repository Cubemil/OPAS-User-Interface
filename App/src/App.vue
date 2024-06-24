<template>
  <div id="app">
    
    <navbar>
      <Navbar/>
    </navbar>
    
    <router-view></router-view>
    
    <footer>
      <Footer/>
    </footer>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Navbar, Footer },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a1c2c;
}

body {
  margin: 0;
  padding: 0;
  background: #fdfdfd;
}
</style>