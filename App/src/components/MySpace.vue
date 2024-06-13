<template>
  <div class="my-space">
    <Navbar/>
    <img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <div class="menu">
        <ul class="nav-list">
          <li>
            <router-link to="/input-form" class="router-link">
              <a id="nav-list-item">
                <div id="arrow-icon"></div>
                Fall melden
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/case-overview" class="router-link">
              <a id="nav-list-item">
                <div id="arrow-icon"></div>
                Fallübersicht
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/default/Navbar.vue";
import Footer from "@/components/default/Footer.vue";

export default {
  name: 'MySpace',
  components: {Navbar, Footer}
}
</script>

<style>
.menu-container {
  background: #fdfdfd;
  width: 100%;
  height: 540px;
}

.menu {
  padding: 1% 6%;
  font-size: 20px;
  font-weight: bold;
}

#background {
  height: 100%;
  width: 100%;
  z-index: -1;
}

.nav-list {
  list-style: none;
  padding: 0;
}

#arrow-icon {
  background-image: url("@/assets/arrow-right.png");
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: 5px;
  transition: 0.3s;
}

#nav-list-item {
  cursor: pointer;
  transition: 0.3s;
}

#nav-list-item:hover #arrow-icon {
  background-image: url("@/assets/arrow-right-hovered.png");
}

#nav-list-item:hover {
  color: #E8C325;
}
</style>
