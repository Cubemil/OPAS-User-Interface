<template>
  <div class="background"/>
  <div class="header">
    <Navbar/>
  </div>
  <div class="body">
    <div class="menu-panel">
      <ul class="menu">
        <li>Fall melden</li>
        <li>Fallübersicht</li>
      </ul>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {Navbar}
}
</script>

<style>
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 50px;
}

.body {
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  margin-top: 400px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 1280px) {
  .body {
    margin-top: 340px;
  }
}

</style>
