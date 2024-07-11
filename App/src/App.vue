<template>
  <div id="app">
    <nav id="navbar-ar">
      <AppNavbar/>
    </nav>
    
    <router-view id="main-content"></router-view>
    
    <footer id="footer-area">
      <AppFooter/>
    </footer>
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
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