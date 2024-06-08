<template>
  <div class="background"></div>
  <div class="header">
    <Navbar/>
  </div>
  <div class="body">
    <div class="menu-panel">
      <ul class="menu">
        <li class="Fall_melden">
          <div class="arrow-icon"/>
          Fall melden
        </li>
        <li class="Fallübersicht">
          <div class="arrow-icon"/>
          Fallübersicht
        </li>
      </ul>
    </div>
  </div>
  <div class="footer">
    <ul class="rights-row">
      <li>© OPUS 2024</li>
      <li>Impressum</li>
      <li>Datenschutzerklärung</li>
      <li>Erklärung zur digitalen Barrierefreiheit</li>
      <li>Nutzungsbedingungen</li>
    </ul>
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
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 50px;
}

.menu-panel {
  position: absolute;
  background: #fdfdfd;
  width: 100%;
  height: 430px;
  margin-top: 400px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.menu {
  padding-left: 80px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
}

.menu li {
  padding-top: 10px;
  cursor: pointer;
  list-style: none;
}

.arrow-icon {
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

li:hover .arrow-icon {
  background-image: url("@/assets/arrow_right_hovered.png");
}

li:hover {
  color: #e2b904;
}

.footer {
  position: absolute;
  background: #404040;
  width: 100%;
  min-height: 100px;
  margin-top: 836px;
  color: #fdfdfd;
  box-shadow: 0 -4px 0 4px rgba(226, 185, 4, 1);
}

.footer li {
  list-style: none;
}

.footer ul {
  padding-left: 80px;
  padding-right: 80px;
}

.rights-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
}

/*

- change list style from none to arrow background

*/

@media only screen and (max-width: 1280px) {

}

@media only screen and (max-width: 480px) {

}

</style>
