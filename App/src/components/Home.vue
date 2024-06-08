<template>
  <div>
    <div class="background"></div>
    <div class="header">
      <Navbar/>
    </div>
    <div class="body">
      <div class="menu-panel">
        <ul class="menu">
          <li id="create-case">
            <div id="arrow-icon"></div>
            Fall anlegen
          </li>
          <li id="case-overview">
            <div id="arrow-icon"></div>
            Fallübersicht
          </li>
        </ul>
      </div>
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
  display: inline-block;
}

.menu li {
  padding-top: 10px;
  cursor: pointer;
}

#arrow-icon {
  cursor: pointer;
  background-image: url("@/assets/arrow_right.png");
  background-size: 28px;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  top: 3px;
  right: 10px;
}

li:hover #arrow-icon {
  background-image: url("@/assets/arrow_right_hovered.png");
}

li:hover {
  color: #e2b904;
}

@media only screen and (max-width: 1280px) {

}

@media only screen and (max-width: 480px) {

}

</style>
