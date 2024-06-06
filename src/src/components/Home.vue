<template>
  <div class="background"></div>
  <div class="header">
    <Navbar/>
  </div>
  <div class="body">
    <div class="menu-panel">
      <ul class="menu">
        <li><img class="arrow-icon" src="@/assets/arrow_right.png" alt="Fall melden"/><a>Fall melden</a></li>
        <li><img class="arrow-icon" src="@/assets/arrow_right.png" alt="Fallübersicht"/><a>Fallübersicht</a></li>
      </ul>
    </div>
  </div>
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
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 50px;
}

.menu-panel {
  position: fixed;
  background: white;
  width: 100%;
  height: 100%;
  margin-top: 400px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.menu {
  padding: 10px 40px 40px 80px;
  list-style: none;
  font-size: 18px;
  font-weight: bold;
}

.menu li {
  padding-top: 10px;
}

.menu li a {
  cursor: pointer;
}

.arrow-icon {
  height: 26px;
  width: auto;
  position: relative;
  top: 6px;
  right: 10px;
  cursor: pointer;
}

@media only screen and (max-width: 1280px) {

}

@media only screen and (max-width: 480px) {

}

</style>
